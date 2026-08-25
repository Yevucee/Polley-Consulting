# Polley-Consulting

AI assistant web app for Polley Consulting. A small [FastAPI](https://fastapi.tiangolo.com/)
service serves a chat UI backed by a local, OpenAI-compatible AI model.

## Requirements

- Python 3.12+
- A running OpenAI-compatible model endpoint (defaults to the local Beelink
  server at `http://127.0.0.1:9888/v1`, model `local-8b`).

## Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # adjust if your model endpoint differs
```

## Run

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Then open http://localhost:8000 and chat with the assistant.

## Configuration

All settings are read from environment variables (or a local `.env` file).
Defaults target the local Beelink model.

| Variable             | Default                     | Description                          |
| -------------------- | --------------------------- | ------------------------------------ |
| `AI_BASE_URL`        | `http://127.0.0.1:9888/v1`  | OpenAI-compatible model base URL     |
| `AI_MODEL`           | `local-8b`                  | Model name                           |
| `AI_API_KEY`         | `local`                     | API key (dummy for the local model)  |
| `AI_TEMPERATURE`     | `0.4`                       | Sampling temperature                 |
| `AI_MAX_TOKENS`      | `512`                       | Max tokens per reply                 |
| `AI_REQUEST_TIMEOUT` | `60`                        | Request timeout (seconds)            |
| `HOST`               | `0.0.0.0`                   | HTTP bind host                       |
| `PORT`               | `8000`                      | HTTP port                            |

## API

- `GET /api/health` — service and model status.
- `POST /api/chat` — body `{ "message": "...", "history": [...] }`, returns `{ "reply": "..." }`.
