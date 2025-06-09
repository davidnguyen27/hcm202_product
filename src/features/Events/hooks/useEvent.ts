import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../services/event.service";

export function useEvent() {
  return useQuery({
    queryKey: ["histories"],
    queryFn: getEvent,
    staleTime: 1000 * 60 * 5,
  });
}
