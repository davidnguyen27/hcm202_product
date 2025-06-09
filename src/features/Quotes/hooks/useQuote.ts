import { useQuery } from "@tanstack/react-query";
import { getQuote } from "../services/quote.service";

export function useQuote() {
  return useQuery({
    queryKey: ["quotes"],
    queryFn: getQuote,
    staleTime: 1000 * 60 * 5,
  });
}
