import { customFetch } from "@/api/customFetch";
import type { ChatRequest, ChatResponse } from "../types/chat.type";

export async function sendChatMessage(prompt: string) {
  const body: ChatRequest = { prompt };

  return await customFetch<ChatResponse>("/chat", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
