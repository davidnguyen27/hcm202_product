import { customFetch } from "@/api/customFetch";
import type { Legacy } from "../types/legacy.type";

export async function getLegacy(): Promise<Legacy[]> {
  const res = await customFetch<Legacy[]>("/legacies");
  if (!res.success) throw new Error(res.message);
  return res.data ?? [];
}
