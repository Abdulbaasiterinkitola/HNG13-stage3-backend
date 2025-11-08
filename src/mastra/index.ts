import 'dotenv/config';
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { researchGuide } from "./agents/research-guide.agent.ts";

export const mastra = new Mastra({
  agents: { research_guide: researchGuide },
  storage: new LibSQLStore({ url: ":memory:" }),
  logger: new PinoLogger({ name: 'Mastra', level: 'info' }),
  telemetry: { enabled: false },
  observability: { default: { enabled: true } },
});

// for debugging purposes
console.log('OPENROUTER_API_KEY ?', process.env.OPENROUTER_API_KEY ? 'OK' : 'MISSING');

// Forcing a clean redeploy