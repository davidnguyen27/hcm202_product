import { customFetch } from "@/api/customFetch";
import type { Event } from "../types/event.type";

export async function getEvent(): Promise<Event[]> {
  const res = await customFetch<Event[]>("/histories");
  if (!res.success) throw new Error(res.message);
  return res.data ?? [];
}
