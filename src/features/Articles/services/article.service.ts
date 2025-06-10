import { customFetch } from "@/api/customFetch";
import type { Article } from "../types/article.type";

export const articleService = {
  getArticle: async (): Promise<Article[]> => {
    const res = await customFetch<Article[]>("/articles");
    if (!res.success) throw new Error(res.message);
    return res.data ?? [];
  },

  getArticleById: async (id: string): Promise<Article> => {
    const res = await customFetch<Article>(`/articles/${id}`);
    if (!res.success) throw new Error(res.message);
    return res.data!;
  },
};
