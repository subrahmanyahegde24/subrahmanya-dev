import os
import logging
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field
from api.services.mongodb_service import save_contact
from api.services.email_service import send_notification

logger = logging.getLogger(__name__)
router = APIRouter()


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    subject: str = Field(default="General", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class ContactResponse(BaseModel):
    success: bool
    message: str


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(request: ContactRequest):
    data = request.model_dump()

    # Saving to MongoDB is optional — only attempted when a URI is configured.
    if os.getenv("MONGO_URI") or os.getenv("MONGODB_URI"):
        try:
            await save_contact(data)
        except Exception as e:
            logger.error(f"Failed to save contact from {request.name}: {e}")

    try:
        await send_notification(data)
    except Exception as e:
        logger.error(f"Email notification failed for contact from {request.name}: {e}")
        raise HTTPException(status_code=502, detail=f"Could not send message: {e}")

    return ContactResponse(success=True, message="Message received! I'll get back to you soon.")
