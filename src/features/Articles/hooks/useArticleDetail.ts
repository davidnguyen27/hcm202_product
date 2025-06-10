import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { articleService } from "../services/article.service";

export function useArticleDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => articleService.getArticleById(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}
