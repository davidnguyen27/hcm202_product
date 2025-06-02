import { useEffect, useState } from "react";
import bacHoImg from "@/assets/images/bac-ho.png";
import quocHuyImg from "@/assets/images/quoc-huy.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <ul>
          <li>
            <a href="#biography">Tiểu Sử</a>
          </li>
          <li>
            <a href="#thoughts">Tư Tưởng</a>
          </li>
          <li>
            <a href="#legacy">Di Sản</a>
          </li>
          <li>
            <a href="#quotes">Câu Nói</a>
          </li>
          <li>
            <a href="#timeline">Dòng Thời Gian</a>
          </li>
          <li>
            <a href="#articles">Bài Viết</a>
          </li>
          <li>
            <a href="#resources">Tài Liệu</a>
          </li>
          <li>
            <a href="#events">Sự Kiện</a>
          </li>
        </ul>
      </nav>

      <div className="header-content">
        <div className="header-left">
          <img 
            src={quocHuyImg} 
            alt="Quốc huy Việt Nam" 
            className="quoc-huy fade-in"
          />
          <h1 className="title slide-up">Tư Tưởng Hồ Chí Minh</h1>
          <p className="subtitle slide-up">Di sản vô giá của dân tộc Việt Nam</p>
          <a href="#biography" className="btn header-btn slide-up">
            Khám Phá Hành Trình
          </a>
        </div>

        <div className="header-right">
          <img 
            src={bacHoImg} 
            alt="Chủ tịch Hồ Chí Minh" 
            className="bac-ho-img slide-right"
          />
        </div>
      </div>
    </header>
  );
}
