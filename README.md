# 🎓 TinyTutor - AI Agentic Educational Media Generator

<div align="center">
  
![Logo](https://skillicons.dev/icons?i=python,ai,gcp,vscode,github)

</div>



<div align="center">
🦉 TinyTutor - Agentic AI Pipeline for Child-Friendly Educational Media
</div>
<div align="center">
Kaggle × Google AI Agents Intensive Course - Capstone Project
</div>

<div align="center">
  <img src="logo.png" width="420" alt="TinyTutor Logo"/>
</div>

### 📖 Overview

**TinyTutor** is an agentic AI system that transforms any topic into **clear, emotionally safe, age-appropriate educational content** for young children.

It demonstrates how a coordinated **multi-agent architecture** can perform research, pedagogical simplification, scriptwriting, safety review, and audio generation autonomously.

Developed as part of the **Kaggle × Google 5-Day AI Agents Intensive Course**, TinyTutor explores how agentic systems can transform complex subjects into clear, engaging educational content for young learners.

---

### 🌟 Motivation

Children often encounter explanations that are too abstract or cognitively overwhelming. While LLMs can simplify text, generating *high-quality early-childhood educational material* requires:

- Controlled vocabulary  
- Emotional and content safety  
- Age-appropriate pacing  
- Clear analogies  
- TTS-friendly language  
- Consistent pedagogy  

TinyTutor investigates whether a **role-specialized agentic pipeline** can meet those constraints reliably.

<div align="center">
TinyTutor - Demo Screenshot
</div>
<div align="center">
<img src="screenapp.png" width="420" alt="TinyTutor Logo"/>
</div>

---

### 🧩 Multi-Agent Architecture

TinyTutor uses **multiple specialized agents**, each scoped for stability and predictable transformations.

### 1. **Pedagogy Agent**

Simplifies any topic into a safe, age-appropriate “Explain Like I’m 5” foundation.

* Defines the age range and learning intent
* Chooses tone (gentle, friendly, emotionally safe)
* Breaks complex ideas into simple, familiar concepts
* Ensures correct-but-beginner-friendly explanations
* Avoids fear-inducing, technical, or abstract language
* Uses search tools when needed to verify accuracy
* Produces a clean, structured base explanation for downstream agents

### 2. **Audio ScriptWriter Agent**

Creates charming, storybook-style content:

* Short, clear child-friendly sentences
* Warm narration with gentle transitions
* Repetition and imagery to support memory
* Two natural curiosity-sparking questions
* Familiar examples and simple metaphors
* Avoids sound effects, dramatic repetition, and complex vocabulary

### 3. **Audio Generator Agent**

Rewrites the story for **natural TTS delivery**:

* Removes bullets, symbols, and formatting TTS struggles with
* Ensures smooth pacing and human-like flow
* Eliminates robotic or repetitive phrasing
* Keeps tone warm, calm, and emotionally engaging
* Splits long text into TTS-safe chunks for stable audio generation

### 4. **Video Generator Agent (coming soon)**

Produces storyboards or simple animated sequences to match the narrative.

---

### 🔧 Technical Implementation

* Built with **Google’s Agent Developer Kit (ADK)**
* Powered by **Gemini** for reasoning, scriptwriting, and content generation
* Uses **Google Cloud Text-to-Speech** (Journey & Neural2 voices)
* Deployable on **Vertex AI Agent Engine**

---

### 🛠️ Key Design Principles
- Explicit **role separation** between agents  
- Structured message schemas for deterministic handoff  
- Safety through redundancy (pedagogy → script → TTS)  

---

### 🧠 System Flow
```
                      ┌──────────────────────┐
                      │   PedagogyAgent      │
                      └──────────┬───────────┘
                                 │
                ┌────────────────┴────────────────┐
                │                                 │
┌──────────────────────────────┐  ┌──────────────────────────────┐
│   AudioScriptWriterAgent     │  │   VideoScriptWriterAgent     │
└───────────────┬──────────────┘  └───────────────┬──────────────┘
                │                                 │
   ┌────────────▼─────────────┐     ┌─────────────▼──────────────┐
   │    AudioGeneratorAgent   │     │    VideoGeneratorAgent     │
   └────────────┬─────────────┘     └─────────────┬──────────────┘
                └────────────────┬────────────────┘
                                 ▼
                        Final Media Package

```
---

### 📂 Project Structure

```
.
├── backend/
│   ├── agents/
│   │   ├── __init__.py
│   │   ├── pedagogy_agent.py
│   │   ├── audio_scriptwriter_agent.py
│   │   └── audio_generator_agent.py
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

###  YouTube demo + Hugging Face Spaces live app

[![YouTube Demo](https://img.shields.io/badge/YouTube-Demo-red?logo=youtube)](https://youtu.be/bAAcL3O1oQs) 
[YouTube Demo](https://youtu.be/bAAcL3O1oQs)

[![Hugging Face Spaces](https://img.shields.io/badge/Hugging%20Face-Live%20Demo-yellow?logo=huggingface)](https://huggingface.co/spaces/cwattsnogueira/tinytutor) 
[Hugging Face Spaces](https://huggingface.co/spaces/cwattsnogueira/tinytutor)

---

### 🚀 Future Features

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

### 🚀 Getting Started

Clone the repository:

```
git clone https://github.com/angelatyk/TinyTutor
cd TinyTutor/backend
```

Install dependencies:

```
pip install -r requirements.txt
```

Run an example:

```
python main.py
```

---

### 📄 License

MIT License - free for personal and commercial use.

---

### 👩‍💻 Authors

* **Angela Kwok** [@angelatyk](https://github.com/angelatyk)  
* **Carllos Watts-Nogueira** [@cwattsnogueira](https://github.com/cwattsnogueira)  

**Kaggle × Google – Agents Intensive (Capstone Project)**
*Applying multi-agent AI systems to solve real-world challenges in education.*

---
