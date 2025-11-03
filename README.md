# HNG13-stage3-backend
4th HNG13 BE Task

# ThesisArc - HNG13 Stage 3 Backend Task

ThesisArc is an intelligent AI agent built for the HNG13 Stage 3 Backend Task. It's designed to solve a common and difficult problem for students: **converting a vague research idea into a formal, structured, and academically valid research plan.**

This agent connects to Telex.im using the Mastra framework, acting as an on-demand research assistant.

**Live Endpoint URL:** `https://your-project-name.mastra.cloud/a2a/agent/research_guide`
*(Note: Replace this with your actual deployed Mastra Cloud URL after you deploy.)*

---

## The Problem

Many students and new researchers struggle with:
* "I have a topic, but I don't know how to make it a *real* research question."
* "My supervisor keeps rejecting my topics for being too broad."
* "I don't know what variables to study or what methodology fits."

ThesisArc is a clarification engine, not a content writer. It helps students think like a researcher by providing the essential structure needed to begin their work.

## Features

* **Vague Idea to Structured Plan:** Takes a simple topic (e.g., "AI in Nigerian healthcare") and returns a comprehensive plan.
* **Formal JSON Output:** Responds with a clean, predictable JSON object, perfect for A2A (Agent-to-Agent) integration.
* **Comprehensive Guidance:** Provides refined questions, objectives, a research gap, key variables, scope, and a suggested methodology.
* **Actionable Next Step:** Includes a "mini-task" to help the student start their practical research immediately.

---

## Tech Stack

* **Framework:** Mastra (for building and deploying the AI agent)
* **Language:** TypeScript
* **AI Model Provider:** OpenRouter.ai (to access free models like `meta-llama/llama-4-maverick:free`)
* **Platform:** Telex.im (as the integration chat platform)
* **Core Libraries:** `@mastra/core`, `@openrouter/ai-sdk-provider`

---

## API & Example Usage

The agent is designed to receive a user's topic as a simple string and respond with a structured JSON.

### Example User Input

A user on Telex.im would message the agent with:
> "My topic is 'Impact of AI tutors on learning outcomes among secondary school students in Lagos.' Help refine and structure it."

### Example Agent JSON Output

The agent processes this and returns the following JSON payload:

```json
{
  "research_topic": "Assessing the Effectiveness of Artificial Intelligence-Powered Tutors on Academic Achievement among Secondary School Students in Lagos, Nigeria",
  "research_questions": [
    "To what extent do AI-powered tutors influence the mathematics and science learning outcomes of secondary school students in Lagos compared to traditional teaching methods?",
    "How do student engagement and motivation levels differ when using AI tutors versus conventional instructional approaches in Lagos secondary schools?"
  ],
  "research_objectives": [
    "To investigate the impact of AI-powered tutors on the academic performance of secondary school students in Lagos.",
    "To analyze the effect of AI tutors on student engagement and motivation in learning mathematics and science subjects."
  ],
  "research_gap": "Current research on AI in education primarily focuses on its potential and theoretical benefits, with limited empirical studies on its actual impact on learning outcomes in specific contexts like Lagos, Nigeria.",
  "variables": {
    "independent": "Use of AI-powered tutors",
    "dependent": "Learning outcomes (mathematics and science scores), student engagement, and motivation levels",
    "control": "Teaching methods, school type (public vs. private), socio-economic status of students"
  },
  "scope": {
    "in_scope": [
      "Secondary schools in Lagos, Nigeria",
      "Mathematics and science subjects"
    ],
    "out_scope": [
      "Primary or tertiary education levels",
      "Subjects other than mathematics and science"
    ]
  },
  "methodology": {
    "design": "Quasi-experimental design with a mixed-methods approach",
    "sampling": "Random sampling of 10 secondary schools in Lagos, with a total of 500 students",
    "data_collection": "Standardized pre-and-post-tests for learning outcomes, surveys for student engagement and motivation, and interviews with teachers and students"
  },
  "google_scholar_keywords": [
    "AI in education",
    "AI tutors",
    "Learning outcomes",
    "Secondary school students",
    "Lagos Nigeria"
  ],
  "mini_task": "Conduct a pilot survey with 10 students to identify key areas of engagement and motivation when using AI tutors."
}

## How to Set Up and Run Locally

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/Abdulbaasiterinkitola/HNG13-stage3-backend.git](https://github.com/Abdulbaasiterinkitola/HNG13-stage3-backend.git)
    cd HNG13-stage3-backend
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    * Create a file named `.env` in the root of the project.
    * Sign up at OpenRouter.ai to get a free API key.
    * Add your key to the `.env` file:
    ```
    OPENROUTER_API_KEY=sk-or-your-key-goes-here
    ```

4.  **Run the Local Development Server**
    ```bash
    npm run dev
    ```

5.  **Test in the Playground**
    * Open your browser and go to `http://localhost:4111/`.
    * Select the `research_guide` agent and send it a test topic.

## Telex.im Integration
This project is integrated with Telex.im using a `workflow.json` file. This file points to the deployed Mastra agent's URL and contains the agent's system prompt, allowing Telex to communicate with it via the A2A protocol.

## Author
* **Abdulbaasit Erinkitola**
* [GitHub](https://github.com/Abdulbaasiterinkitola)

## License
This project is licensed under the MIT License.