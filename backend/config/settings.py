import os

import google.generativeai as genai
from dotenv import load_dotenv
from google.genai import types


class Settings:
    """App configuration and environment management."""

    def __init__(self):
        load_dotenv()
        self.google_api_key = os.getenv("GOOGLE_API_KEY")

        if not self.google_api_key:
            raise RuntimeError("GOOGLE_API_KEY environment variable not set.")

        genai.configure(api_key=self.google_api_key)

    @staticmethod
    def retry_config():
        """Retry configuration for Gemini API calls."""
        return types.HttpRetryOptions(
            attempts=5,
            exp_base=7,
            initial_delay=1,
            http_status_codes=[429, 500, 503, 504],
        )


settings = Settings()
