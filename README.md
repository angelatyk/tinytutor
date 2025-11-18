# TinyTutor (AI Agentic Educational Media Generator)

TinyTutor is an agentic AI system that turns any subject into 
child-friendly educational audio or video, explained as if 
teaching a 5-year-old.

This project was built as part of Kaggle x Google’s 5-Day AI Agents Intensive.

---

## 🌟 Features
- Multi-agent architecture (ScriptWriter, Reviewer, AudioAgent, VideoAgent)
- Uses ADK + Gemini for agent orchestration
- Memory + context engineering
- Tooling + MCP integration
- Logs, traces, & LLM-as-a-Judge evaluation
- Deployable to Vertex AI Agent Engine

---

## 🧠 System Flow
1. User inputs a subject (e.g., “What is gravity?”)
2. ScriptWriterAgent creates a child-friendly explanation
3. ReviewerAgent checks for clarity, safety, and simplicity
4. AudioAgent generates child-friendly narration
5. VideoAgent produces a simple animated video
6. Output is returned to frontend for playback

