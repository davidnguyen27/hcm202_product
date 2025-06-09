import { useQuery } from "@tanstack/react-query";
import { getLegacy } from "../services/legacy.service";

export function useLegacy() {
  return useQuery({
    queryKey: ["legacies"],
    queryFn: getLegacy,
    staleTime: 1000 * 60 * 5,
  });
}
