import { useState, useEffect } from "react";
import { useQuote } from "../hooks/useQuote";

export default function QuoteCarousel() {
  const { data: quotes, isLoading, error } = useQuote();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!quotes || quotes.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [quotes]);

  if (isLoading) return <p>Đang tải câu nói...</p>;
  if (error || !quotes || quotes.length === 0) return <p>Không có dữ liệu để hiển thị.</p>;

  return (
    <div className="quotes-carousel">
      <p key={index} className="quote-text fade-quote">
        “{quotes[index].content}”
      </p>
      <div className="dots">
        {quotes.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} />
        ))}
      </div>
    </div>
  );
}
