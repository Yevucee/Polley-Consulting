"""Application configuration.

Settings are read from environment variables (and an optional local `.env`
file). Defaults point at the local AI model running on the Beelink server, so
the app works out of the box in that setup while remaining fully configurable.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    # Local AI model (OpenAI-compatible endpoint) served on the Beelink server.
    ai_base_url: str = "http://127.0.0.1:9888/v1"
    ai_model: str = "local-8b"
    ai_api_key: str = "local"

    # Sampling controls for chat completions.
    ai_temperature: float = 0.4
    ai_max_tokens: int = 512
    ai_request_timeout: float = 60.0

    # HTTP server.
    host: str = "0.0.0.0"
    port: int = 8000


settings = Settings()
