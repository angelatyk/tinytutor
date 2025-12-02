# 🎓 TinyTutor - AI Agentic Educational Media Generator

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Google Cloud](https://img.shields.io/badge/Google%20Cloud-TTS%20%26%20Gemini-orange.svg)](https://cloud.google.com/)
[![Colab](https://img.shields.io/badge/Google-Colab-yellow.svg)](https://colab.research.google.com/)
[![Status](https://img.shields.io/badge/Project-Capstone-success.svg)]()

---
<div align="center">
🦉 TinyTutor - AI Kids Storytelling & Education Pipeline
</div>

<div align="center">
  <img src="logo.png" width="420" alt="TinyTutor Logo"/>
</div>

### 📖 Introduction

**TinyTutor** is an agentic AI system that transforms any topic into **child-friendly educational audio or video**, explained as if teaching a 5-year-old.

It was created during the **Kaggle × Google 5-Day AI Agents Intensive** as a capstone project, demonstrating how multi-agent AI pipelines can make learning playful, accessible, and engaging for children.

TinyTutor uses a coordinated set of AI agents to research topics, design educational narratives, generate TTS-ready scripts, and produce natural-sounding audio (and soon video).

### 🌟 About TinyTutor

**TinyTutor** is an AI-powered pipeline designed to generate **children’s stories**, **educational scripts**, **narration-ready text**, and even **storyboards or simple videos** - all with a warm, gentle, picture-book feel.

With a single prompt, TinyTutor produces:

* 📝 A soft, age-appropriate narrative
* 📚 A pedagogical interpretation
* 🎙️ TTS-friendly narration script
* 🎬 Optional storyboard or animated video
* 🖼️ Supporting artwork for stories, lessons, or kids’ books

---

## 🌟 Features

### 🧩 Multi-Agent Architecture

* **PedagogyAgent** - researches topics and produces extremely clear ELI5 explanations
* **ScriptWriterAgent** - creates warm, natural, child-friendly audio-ready scripts
* **ReviewerAgent** - ensures clarity, safety, and simplicity
* **AudioWriterAgent** - converts scripts into friendly narration (MP3), using single-voice TTS
* **VideoAgent** *(coming soon)* - generates simple animated videos

### 🔧 Technology & Tooling

* Built with **Google’s Agent Developer Kit (ADK)**
* Powered by **Gemini** for reasoning, scriptwriting, and content generation
* Uses **Google Cloud Text-to-Speech** (Journey & Neural2 voices)
* Adds **memory**, **context engineering**, and **safety checks**
* Integrated with **MCP tools** for extensibility
* Includes logs, traces, evaluation, and **LLM-as-a-Judge** quality scoring
* Deployable on **Vertex AI Agent Engine**

---

## 🧠 System Flow

1. **User provides a topic** (ex: “What are volcanoes?”)
2. **PedagogyAgent** analyzes the topic and generates a kid-friendly explanation
3. **ScriptWriterAgent** transforms the explanation into a soft, playful, TTS-ready story

   * No markdown
   * One narrator
   * Natural spoken language
4. **ReviewerAgent** checks for:

   * misunderstandings
   * safety issues
   * age-appropriateness
5. **AudioWriterAgent** produces natural narration using Google Cloud TTS
6. *(coming soon)* **VideoAgent** converts the script + audio into simple animations
7. Final content is displayed or downloaded for the user

## 🧠 Pipeline Overview

### 1. **Pedagogy Agent**

Defines age range, tone, learning intent, and story style.
Ensures safe, simple, emotionally appropriate language.

### 2. **ScriptWriter Agent**

Creates charming, storybook-style content:

* Short sentences
* Gentle narration
* Repetition for memory
* Clear moral or learning purpose
* Friendly characters

### 3. **AudioWriter Agent**

Rewrites the story for **natural TTS delivery**:

* No bullet points
* No symbols that TTS reads awkwardly
* No robotic phrasing
* Smooth, human flow
* Warm emotional tone

### 4. **VideoAgent (coming soon)**

Produces storyboards or simple animated sequences to match the narrative.

---

## 📂 Project Structure

```
.
├── backend/
│   ├── agents/
│   │   ├── __init__.py
│   │   ├── pedagogy_agent.py
│   │   ├── scriptwriter_agent.py
│   │   ├── reviewer_agent.py
│   │   └── audio_writer_agent.py
│   └── config/
│       ├── main.py
│       └── requirements.txt
│
├── notebooks/
│   ├── 00_master_demo.ipynb
│   ├── 01_eli5_logic/
│   │   ├── 01a_pedagogy_agent.ipynb
│   │   ├── 01b_scriptwriter_audio_agent.ipynb
│   │   └── 01b_scriptwriter_video_agent.ipynb
│   ├── 02_audio_generation_experiments.ipynb
│   ├── 03_video_generation_experiments.ipynb
│   ├── 04_multi-agent_pipeline.ipynb
│   ├── 05_evaluation_and_observability.ipynb
│   └── 06_backend_api_prototyping.ipynb
│
├── .gitignore
├── README.md
```

---

## 🔗 Useful Links (GitHub)

* [backend/agents/pedagogy_agent.py](https://github.com/angelatyk/tinytutor/blob/main/backend/agents/pedagogy_agent.py)
* [backend/config/main.py](https://github.com/angelatyk/tinytutor/blob/main/backend/config/main.py)
* [notebooks/00_master_demo.ipynb](https://github.com/angelatyk/tinytutor/blob/main/notebooks/00_master_demo.ipynb)
* [notebooks/01_eli5_logic/](https://github.com/angelatyk/tinytutor/blob/main/notebooks/01_eli5_logic)
* [notebooks/02_audio_generation_experiments.ipynb](https://github.com/angelatyk/tinytutor/blob/main/notebooks/02_audio_generation_experiments.ipynb)
* [notebooks/03_video_generation_experiments.ipynb](https://github.com/angelatyk/tinytutor/blob/main/notebooks/03_video_generation_experiments.ipynb)
* [notebooks/04_multi-agent_pipeline.ipynb](https://github.com/angelatyk/tinytutor/blob/main/notebooks/04_multi-agent_pipeline.ipynb)
* [notebooks/05_evaluation_and_observability.ipynb](https://github.com/angelatyk/tinytutor/blob/main/notebooks/05_evaluation_and_observability.ipynb)
* [notebooks/06_backend_api_prototyping.ipynb](https://github.com/angelatyk/tinytutor/blob/main/notebooks/06_backend_api_prototyping.ipynb)
* [requirements.txt](https://github.com/angelatyk/tinytutor/blob/main/backend/config/requirements.txt)
* [README.md](https://github.com/angelatyk/tinytutor/blob/main/README.md)

---

## 🚀 Future Features

* **Video Narration Pipeline**

  * ScriptWriter outputs → animated educational shorts
* **Subtitle & Caption Generation**
* **Interactive Learning Mode**

  * Children answer questions via voice
  * Agents respond adaptively
* **Cross-Domain Learning Agents**

  * Healthcare, environment, safety education
* **Multi-Voice Audio Mode**

  * Different characters with different TTS voices

---

## 🧩 How It Works

1. You provide a theme or idea.
2. The Pedagogy Agent builds an educational foundation.
3. The ScriptWriter creates the story.
4. The AudioWriter transforms it into natural TTS text.
5. The VideoAgent generates frames or video.
6. The final output becomes a complete kids’ content package.

---

## 🚀 Getting Started

Clone the repository:

```
git clone https://github.com/angelatyk/TinyTutor
cd TinyTutor
```

Install dependencies:

```
pip install -r requirements.txt
```

Run an example:

```
python run_example.py
```

---

## 📄 License

MIT License - free for personal and commercial use.

---

## 🦉 Final Notes

TinyTutor is built to be **calm, gentle, and educational**, bringing the feeling of a cozy storybook into an AI-powered creative pipeline.

If you want, I can also create:

* Custom badges
* More illustrations
* Sample stories
* A full Streamlit demo

---

## 👩‍💻 Authors

* **Angela Kwok**
* **Carllos Watts-Nogueira**

**Kaggle × Google – Agents Intensive (Capstone Project)**
*Applying multi-agent AI systems to solve real-world challenges in education.*

---









