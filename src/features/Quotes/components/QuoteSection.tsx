import QuoteCarousel from "./QuoteCarousel";

export default function QuoteSection() {
  return (
    <section id="quotes" className="quotes-section">
      <div className="quotes-overlay" />
      <h2 className="section-title">Những Câu Nói Nổi Tiếng</h2>
      <QuoteCarousel />
    </section>
  );
}
