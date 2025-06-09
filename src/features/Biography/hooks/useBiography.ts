import { useQuery } from "@tanstack/react-query";
import { getBiography } from "../services/biography.service";

export function useBiography() {
  return useQuery({
    queryKey: ["biography"],
    queryFn: getBiography,
    staleTime: 1000 * 60 * 5,
  });
}
