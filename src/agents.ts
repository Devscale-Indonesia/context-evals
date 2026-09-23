import { Agent } from "@anvia/core";
import { getModel } from "./models.js";

export function createAgent(modelId?: string) {
  return new Agent({
    id: "assistant",
    model: getModel(modelId),
    instructions: "You are a helpful assistant.",
  });
}
