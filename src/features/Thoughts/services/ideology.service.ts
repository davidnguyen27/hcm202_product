import { customFetch } from "@/api/customFetch";
import type { Ideology } from "../types/Ideology.type";

export async function getIdeology(): Promise<Ideology[]> {
  const res = await customFetch<Ideology[]>("/ideologies");
  if (!res.success) throw new Error(res.message);
  return res.data ?? [];
}
