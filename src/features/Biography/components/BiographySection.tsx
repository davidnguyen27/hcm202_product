import nhaBacHoImg from "@/assets/images/nha-bac-ho.png";

export default function BiographySection() {
  return (
    <section id="biography" className="biography-section">
      <div className="container">
        <div className="biography-left">
          <img src={nhaBacHoImg} alt="Nhà Bác Hồ" className="biography-image" />
        </div>

        <div className="biography-right">
          <h2>Tiểu Sử Chủ tịch Hồ Chí Minh</h2>
          <div className="biography-text">
            <p>
              Nguyễn Tất Thành, tức Chủ tịch Hồ Chí Minh, sinh ngày 19/5/1890 tại làng Kim Liên, huyện Nam Đàn, tỉnh
              Nghệ An. Xuất thân trong một gia đình Nho học yêu nước, thuở nhỏ Người thông minh, hiếu học. Đến tuổi
              thiếu niên, theo thân phụ vào Huế học tại Trường Tiểu học Đông Ba và Trường Trung học Quốc Học. Năm 1911,
              Người vào Sài Gòn, lấy tên là Ba, làm phụ bếp trên tàu buôn Amiral Latouche-Tréville, rồi sang Pháp và
              nhiều nước khác để tìm hiểu tình hình thế giới. Năm 1919, với tên Nguyễn Ái Quốc, Người gửi đến Hội nghị
              Versailles bản yêu sách đòi tự do, dân chủ và quyền bình đẳng cho người Việt Nam. Năm 1921, tham gia Đảng
              Cộng sản Pháp. Cuối năm 1923, sang Liên Xô với tư cách đại biểu của nông dân các nước thuộc địa. Năm 1924,
              về Quảng Châu (Trung Quốc) với tên Lý Thụy, công tác trong phái đoàn Brodine. Năm 1930, chủ trì thành lập
              Đảng Cộng sản Việt Nam. Năm 1941, về nước, lãnh đạo Cách mạng Tháng Tám thành công, khai sinh nước Việt
              Nam Dân chủ Cộng hòa. Người giữ chức Chủ tịch nước từ năm 1945 đến 1969. Ngày 2/9/1969, Chủ tịch Hồ Chí
              Minh từ trần, để lại di sản to lớn cho dân tộc Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
