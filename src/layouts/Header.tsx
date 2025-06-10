import { useEffect, useState } from "react";
import bacHoImg from "@/assets/images/bac-ho.png";
import quocHuyImg from "@/assets/images/quoc-huy.png";
import { QuizModal } from "@/features/Quiz";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "#quiz") {
      setShowQuiz(true);
      return;
    }
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <ul>
          <li>
            <a href="#biography" onClick={(e) => handleSmoothScroll(e, "#biography")}>
              Tiểu Sử
            </a>
          </li>
          <li>
            <a href="#thoughts" onClick={(e) => handleSmoothScroll(e, "#thoughts")}>
              Tư Tưởng
            </a>
          </li>
          <li>
            <a href="#legacy" onClick={(e) => handleSmoothScroll(e, "#legacy")}>
              Di Sản
            </a>
          </li>
          <li>
            <a href="#quotes" onClick={(e) => handleSmoothScroll(e, "#quotes")}>
              Câu Nói
            </a>
          </li>
          <li>
            <a href="#timeline" onClick={(e) => handleSmoothScroll(e, "#timeline")}>
              Dòng Thời Gian
            </a>
          </li>
          <li>
            <a href="#articles" onClick={(e) => handleSmoothScroll(e, "#articles")}>
              Bài Viết
            </a>
          </li>
          <li>
            <a href="#resources" onClick={(e) => handleSmoothScroll(e, "#resources")}>
              Tài Liệu
            </a>
          </li>
          <li>
            <a href="#events" onClick={(e) => handleSmoothScroll(e, "#events")}>
              Sự Kiện
            </a>
          </li>
          <li>
            <a href="#quiz" onClick={(e) => handleSmoothScroll(e, "#quiz")}>
              Trắc nghiệm
            </a>
          </li>
        </ul>
      </nav>

      <div className="header-content">
        <div className="header-left">
          <img src={quocHuyImg} alt="Quốc huy Việt Nam" className="quoc-huy fade-in" />
          <h1 className="title slide-up">Tư Tưởng Hồ Chí Minh</h1>
          <p className="subtitle slide-up">Di sản vô giá của dân tộc Việt Nam</p>
          <a href="#biography" className="btn header-btn slide-up" onClick={(e) => handleSmoothScroll(e, "#biography")}>
            Khám Phá Hành Trình
          </a>
        </div>

        <div className="header-right">
          <img src={bacHoImg} alt="Chủ tịch Hồ Chí Minh" className="bac-ho-img slide-right" />
        </div>
      </div>

      <QuizModal open={showQuiz} onClose={() => setShowQuiz(false)} />
    </header>
  );
}
