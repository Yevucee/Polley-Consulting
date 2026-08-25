"""Thin wrapper around the OpenAI-compatible client for the local AI model."""

from __future__ import annotations

from openai import OpenAI

from .config import settings

SYSTEM_PROMPT = (
    "You are the AI assistant for Polley Consulting, a professional consulting "
    "firm. Answer client questions clearly and concisely, offer practical "
    "next steps, and keep a helpful, professional tone."
)

_client = OpenAI(
    base_url=settings.ai_base_url,
    api_key=settings.ai_api_key,
    timeout=settings.ai_request_timeout,
)


def chat(message: str, history: list[dict[str, str]] | None = None) -> str:
    """Send a chat message to the local model and return the assistant reply.

    `history` is an optional list of prior turns as `{"role", "content"}` dicts.
    """
    messages: list[dict[str, str]] = [{"role": "system", "content": SYSTEM_PROMPT}]
    if history:
        messages.extend(history)
    messages.append({"role": "user", "content": message})

    completion = _client.chat.completions.create(
        model=settings.ai_model,
        messages=messages,
        temperature=settings.ai_temperature,
        max_tokens=settings.ai_max_tokens,
    )
    return (completion.choices[0].message.content or "").strip()
