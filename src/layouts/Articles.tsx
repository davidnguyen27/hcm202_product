import { ArticleCard } from "@/features/Articles";
import { useArticle } from "@/features/Articles/hooks/useArticle";
import { Link } from "react-router-dom";

export default function Articles() {
  const { data: articles, isLoading, error } = useArticle();

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (!articles || articles.length === 0) return <p>Không có bài viết nào.</p>;
  if (error) return <p>Không thể tải bài viết.</p>;

  return (
    <section id="articles" className="section blog-section">
      <h2 className="section-title fade-in">Bài Viết Chuyên Sâu</h2>
      <div className="blog-grid">
        {articles.map((article) => (
          <Link to={`/article?id=${article._id}`} key={article.title} className="blog-link-wrapper">
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
}
