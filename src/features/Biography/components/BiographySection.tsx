import nhaBacHoImg from "@/assets/images/nha-bac-ho.png";
import { useBiography } from "../hooks/useBiography";

export default function BiographySection() {
  const { data, isLoading, error } = useBiography();

  return (
    <section id="biography" className="biography-section">
      <div className="container">
        <div className="biography-left">
          <img src={nhaBacHoImg} alt="Nhà Bác Hồ" className="biography-image" />
        </div>

        <div className="biography-right">
          <h2>Tiểu Sử Chủ tịch Hồ Chí Minh</h2>
          <div className="biography-text">
            {isLoading && <p>Đang tải dữ liệu...</p>}
            {error && <p>Lỗi: {error instanceof Error ? error.message : String(error)}</p>}
            {!isLoading && !error && data && data.map((item, idx) => <p key={idx}>{item.content}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
