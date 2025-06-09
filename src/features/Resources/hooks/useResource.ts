import { useQuery } from "@tanstack/react-query";
import { getResource } from "../services/resource.service";

export function useResource() {
  return useQuery({
    queryKey: ["documents"],
    queryFn: getResource,
    staleTime: 1000 * 60 * 5,
  });
}
