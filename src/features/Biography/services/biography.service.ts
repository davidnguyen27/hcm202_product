import { customFetch } from "@/api/customFetch";
import type { Biography } from "../types/biography.type";

export async function getBiography(): Promise<Biography[]> {
  const res = await customFetch<Biography[]>("/biography");
  if (!res.success) throw new Error(res.message);
  return res.data ?? [];
}
