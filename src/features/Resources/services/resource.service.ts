import { customFetch } from "@/api/customFetch";
import type { Resource } from "../types/resource.type";

export async function getResource(): Promise<Resource[]> {
  const res = await customFetch<Resource[]>("/documents");
  if (!res.success) throw new Error(res.message);
  return res.data ?? [];
}
