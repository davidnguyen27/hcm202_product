import { useState, useEffect } from "react";
import { quotesData } from "@/data/quotes";

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!quotesData || quotesData.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotesData.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [quotesData]);

  return (
    <div className="quotes-carousel">
      <p key={index} className="quote-text fade-quote">
        “{quotesData[index].content}”
      </p>
      <div className="dots">
        {quotesData.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} />
        ))}
      </div>
    </div>
  );
}
