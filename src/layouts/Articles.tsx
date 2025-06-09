import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    excerpt:
      "Tư tưởng độc lập dân tộc không chỉ là thoát khỏi ách đô hộ mà còn hướng tới tự do, hạnh phúc của nhân dân...",
  },
  {
    id: 2,
    title: "Đạo Đức Cách Mạng Trong Tư Tưởng Hồ Chí Minh",
    excerpt:
      "Hồ Chí Minh đề cao phẩm chất cách mạng như cần, kiệm, liêm, chính và chí công vô tư, thể hiện qua lối sống giản dị...",
  },
  // ... (thêm các bài viết khác)
];

export default function Articles() {
  return (
    <section id="articles" className="section blog-section">
      <h2 className="section-title fade-in">Bài Viết Chuyên Sâu</h2>
      <div className="blog-grid">
        {articles.map((article) => (
          <Link 
            to={`/article/${article.id}`} 
            className="blog-post modern-card" 
            key={article.id} 
            tabIndex={0}
          >
            <div className="blog-icon">
              <FaRegNewspaper size={36} />
            </div>
            <div className="blog-meta">
              <span className="blog-date"># {article.id}</span>
              <span className="blog-tag">Tư Tưởng</span>
            </div>
            <h3 className="blog-title">{article.title}</h3>
            <p className="blog-excerpt">{article.excerpt}</p>
            <span className="blog-readmore-btn">
              Đọc tiếp <span className="arrow">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
