import { useQuery } from "@tanstack/react-query";
import { getIdeology } from "../services/ideology.service";

export function useIdeology() {
  return useQuery({
    queryKey: ["ideologies"],
    queryFn: getIdeology,
    staleTime: 1000 * 60 * 5,
  });
}
