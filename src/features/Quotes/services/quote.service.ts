import { customFetch } from "@/api/customFetch";
import type { Quote } from "../types/quote.type";

export async function getQuote(): Promise<Quote[]> {
  const res = await customFetch<Quote[]>("/quotes");
  if (!res.success) throw new Error(res.message);
  return res.data ?? [];
}
