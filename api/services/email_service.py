import os
import html
import logging
import httpx

logger = logging.getLogger(__name__)

RESEND_API_URL = "https://api.resend.com/emails"


async def send_notification(contact_data: dict) -> bool:
    """Send the contact form submission to NOTIFY_EMAIL via Resend."""
    api_key = os.getenv("RESEND_API_KEY")
    notify_email = os.getenv("NOTIFY_EMAIL")
    # onboarding@resend.dev works without a verified domain, but can only deliver
    # to the email address that owns the Resend account.
    from_email = os.getenv("RESEND_FROM_EMAIL", "Portfolio <onboarding@resend.dev>")

    if not api_key:
        raise RuntimeError("RESEND_API_KEY not set")
    if not notify_email:
        raise RuntimeError("NOTIFY_EMAIL not set")

    name = contact_data["name"]
    email = contact_data["email"]
    subject = contact_data.get("subject", "General")
    message = contact_data["message"]

    text = f"""New message from your portfolio website!

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

    body_html = f"""
<h2>New message from your portfolio website</h2>
<p><strong>Name:</strong> {html.escape(name)}<br>
<strong>Email:</strong> {html.escape(email)}<br>
<strong>Subject:</strong> {html.escape(subject)}</p>
<p style="white-space:pre-wrap">{html.escape(message)}</p>
"""

    payload = {
        "from": from_email,
        "to": [notify_email],
        "reply_to": email,
        "subject": f"Portfolio Contact: {subject} from {name}",
        "text": text,
        "html": body_html,
    }

    async with httpx.AsyncClient(timeout=15) as client:
        response = await client.post(
            RESEND_API_URL,
            json=payload,
            headers={"Authorization": f"Bearer {api_key}"},
        )

    if response.status_code >= 400:
        logger.error(f"Resend error {response.status_code}: {response.text}")
        try:
            reason = response.json().get("message", response.text)
        except ValueError:
            reason = response.text
        raise RuntimeError(f"Resend {response.status_code}: {reason}")

    logger.info(f"Email sent successfully to {notify_email}")
    return True
