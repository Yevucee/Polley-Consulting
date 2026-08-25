"""FastAPI application exposing the Polley Consulting AI assistant."""

from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from . import __version__
from .ai import chat
from .config import settings

STATIC_DIR = Path(__file__).parent / "static"

app = FastAPI(title="Polley Consulting AI Assistant", version=__version__)


class ChatTurn(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    history: list[ChatTurn] = Field(default_factory=list)


class ChatResponse(BaseModel):
    reply: str


@app.get("/api/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "version": __version__,
        "model": settings.ai_model,
        "ai_base_url": settings.ai_base_url,
    }


@app.post("/api/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest) -> ChatResponse:
    history = [turn.model_dump() for turn in request.history]
    reply = chat(request.message, history=history)
    return ChatResponse(reply=reply)


@app.get("/")
def index() -> FileResponse:
    return FileResponse(STATIC_DIR / "index.html")


app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
