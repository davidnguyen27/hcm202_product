import type { Article } from "../types/article.type";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="blog-post modern-card">
      <div className="blog-meta">
        <span className="blog-tag">#{article.tags.join(", ")}</span>
      </div>
      <h3 className="blog-title">{article.title}</h3>
      <p className="blog-excerpt">{article.summary}</p>
    </div>
  );
}
