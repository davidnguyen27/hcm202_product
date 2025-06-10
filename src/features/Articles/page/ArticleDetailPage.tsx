import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaRegNewspaper } from "react-icons/fa6";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { articlesData } from "@/data/articles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ArticleDetailPage() {
  const query = useQuery();
  const articleId = query.get("id");
  const article = articlesData.find((a) => a._id === articleId);

  if (!article) {
    return (
      <>
        <Header />
        <main className="article-detail-page">
          <div className="container">
            <Link to="/" className="back-button">
              <FaArrowLeft /> Quay lại danh sách bài viết
            </Link>
            <div className="article-detail">
              <p>Không tìm thấy bài viết.</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="article-detail-page">
        <div className="container">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Quay lại danh sách bài viết
          </Link>

          <div className="article-detail">
            <div className="article-header">
              <div className="article-icon">
                <FaRegNewspaper size={48} />
              </div>
              <h1 className="article-title">{article.title}</h1>
            </div>

            <div className="article-meta">
              <span>
                <strong>Tác giả:</strong> {article.author}
              </span>
              <span>
                <strong>Ngày đăng:</strong> {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <span>
                <strong>Tags:</strong> {article.tags.join(", ")}
              </span>
            </div>

            <div className="article-summary">
              <p>{article.summary}</p>
            </div>

            <div className="article-content">
              {article.content.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
