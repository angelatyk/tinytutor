from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini
from google.adk.tools import google_search

from config.settings import settings


def create_pedagogy_agent():
    """Initialize and return the PedagogyAgent."""

    return Agent(
        name="PedagogyAgent",
        model=Gemini(
            model="gemini-2.5-flash-lite",
            retry_options=settings.retry_config(),
        ),
        description="Researches a topic and explains it to a child in a simple way.",
        instruction="""
        1. Research the topic using available tools (e.g., google_search).
        2. Summarize and simplify the explanation so a 5-year-old can understand it.
        3. Use the simplify_topic tool if needed.
        """,
        tools=[google_search],
    )
