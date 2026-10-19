from fastapi import APIRouter
import json
import os

router = APIRouter()

PROJECTS = [
    {
        "id": 1,
        "title": "Pallavi Bakery Bot",
        "subtitle": "Multi-Agent AI Ordering Assistant",
        "description": "A 5-agent Telegram ordering system built with Google ADK and Gemini, with an async FastAPI backend, MongoDB, and Razorpay payments.",
        "status": "Completed",
        "period": "April 2026 - May 2026",
        "tech": ["Python", "Google ADK", "Gemini", "FastAPI", "MongoDB", "Razorpay", "Next.js"],
        "category": "agents",
        "github": "https://github.com/subrahmanyahegde24/pallavi-bakery-bot",
    },
    {
        "id": 2,
        "title": "SimplyReview",
        "subtitle": "AI Literature Review Assistant",
        "description": "A literature review tool with a knowledge graph and RAG pipeline over 15K+ Qdrant embeddings, cutting manual review time by ~60%.",
        "status": "Completed",
        "period": "February 2025 - May 2025",
        "tech": ["Python", "LangChain", "Qdrant", "RAG", "Knowledge Graphs"],
        "category": "rag",
        "github": "https://github.com/subrahmanyahegde24/SimplyReview",
    },
    {
        "id": 3,
        "title": "LexiGuid",
        "subtitle": "Agentic RAG Educational Assistant",
        "description": "An AI educational assistant with Agentic RAG workflows, hybrid search over ChromaDB and Qdrant, and quantised local LLMs.",
        "status": "Completed",
        "period": "July 2025 - May 2026",
        "tech": ["LangChain", "Qdrant", "ChromaDB", "OpenCV", "Gemma", "FastAPI"],
        "category": "rag",
        "github": "https://github.com/subrahmanyahegde24",
    },
]


@router.get("/projects")
async def get_projects():
    return {"projects": PROJECTS}
