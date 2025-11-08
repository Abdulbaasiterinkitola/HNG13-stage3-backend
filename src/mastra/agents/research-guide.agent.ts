import { Agent } from "@mastra/core/agent";
// 1. Import 'createOpenRouter' instead of '@ai-sdk/openai'
import { createOpenRouter } from "@openrouter/ai-sdk-provider"; 

// 2. Initialize the OpenRouter client
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const researchGuide = new Agent({
  name: "research_guide",
  model: openrouter("meta-llama/llama-4-maverick:free"),
  
  // THIS IS THE FIX. AN EMPTY PROMPT.
  instructions: ``, 
});