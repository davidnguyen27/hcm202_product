import { ArticleCard } from "@/features/Articles";
import { Link } from "react-router-dom";
import { articlesData } from "@/data/articles";

export default function Articles() {
  return (
    <section id="articles" className="section blog-section">
      <h2 className="section-title fade-in">Bài Viết Chuyên Sâu</h2>
      <div className="blog-grid">
        {articlesData.map((article) => (
          <Link to={`/article?id=${article._id}`} key={article.title} className="blog-link-wrapper">
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
}
