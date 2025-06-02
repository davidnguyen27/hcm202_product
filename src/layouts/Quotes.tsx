import { useState, useEffect } from "react";

const quotes = [
  "Không có gì quý hơn độc lập, tự do.",
  "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
  "Nhiệm vụ của thanh niên không phải là đòi hỏi nước nhà đã cho mình những gì, mà phải tự hỏi mình đã làm gì cho nước nhà.",
  "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
  "Cần, kiệm, liêm, chính, chí công vô tư.",
  "Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.",
  "Học để làm việc, làm người, làm cán bộ...",
  "Chúng ta phải giữ gìn Đảng ta thật trong sạch...",
  "Muốn cứu nước không có con đường nào khác ngoài cách mạng vô sản.",
  "Tôi chỉ có một ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập...",
  "Dân ta phải giữ gìn nước ta, giữ gìn độc lập.",
  "Thà hy sinh tất cả, nhất định không làm nô lệ.",
  "Non sông Việt Nam có trở nên tươi đẹp hay không... chính nhờ một phần lớn ở công học tập của các em.",
  "Người cách mạng phải có đạo đức cách mạng...",
  "Cách mạng là sự nghiệp của quần chúng.",
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="quotes" className="quotes-section">
      <div className="quotes-overlay" />
      <h2 className="section-title">Câu Nói Nổi Tiếng</h2>
      <div className="quotes-carousel">
        <p key={index} className="quote-text fade-quote">
          “{quotes[index]}”
        </p>
        <div className="dots">
          {quotes.map((_, i) => (
            <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
