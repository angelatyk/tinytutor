import asyncio

from google.adk.runners import InMemoryRunner

from agents.pedagogy_agent import create_pedagogy_agent
from config.settings import settings


async def run_test():
    pedagogy_agent = create_pedagogy_agent()
    runner = InMemoryRunner(agent=pedagogy_agent)

    response = await runner.run_debug(
        "What is the difference between Agentic and Agent?"
    )

    print("\n=== Agent Response ===")
    print(response)


async def main():
    await run_test()


if __name__ == "__main__":
    asyncio.run(main())
