import { useQuery } from "@tanstack/react-query";
import { articleService } from "../services/article.service";

export function useArticle() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: articleService.getArticle,
    staleTime: 1000 * 60 * 5,
  });
}
