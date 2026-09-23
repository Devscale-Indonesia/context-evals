# Basic agents

A minimal Anvia agent and OpenAI model setup. No eval suites are included.

1. Run `pnpm install`.
2. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`.

Use `getModel(modelId)` in `src/models.ts` to select a model, and `createAgent(modelId)` in `src/agents.ts` to create an agent with it. `src/index.ts` is empty for your own entry point.
