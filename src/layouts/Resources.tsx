import { FaBookOpen } from "react-icons/fa6";

export default function Resources() {
  return (
    <section id="resources" className="section resources-section">
      <h2 className="section-title fade-in">Tài Liệu Tham Khảo</h2>
      <div className="resources-content">
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Đường Kách Mệnh</h3>
          <p>Tác phẩm kinh điển của Hồ Chí Minh, trình bày tư tưởng cách mạng và con đường giải phóng dân tộc.</p>
          <p>Được xuất bản năm 1927, đây là tài liệu quan trọng để đào tạo cán bộ cách mạng.</p>
          <button className="resource-button" title="Xem chi tiết về Đường Kách Mệnh">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Bản Án Chế Độ Thực Dân Pháp</h3>
          <p>Tác phẩm tố cáo tội ác của thực dân Pháp, kêu gọi nhân dân đứng lên đấu tranh.</p>
          <p>Được viết dưới bút danh Nguyễn Ái Quốc, tác phẩm này có tầm ảnh hưởng quốc tế.</p>
          <button className="resource-button" title="Xem chi tiết về Bản Án Chế Độ Thực Dân Pháp">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Nhật Ký Trong Tù</h3>
          <p>Tập thơ được Hồ Chí Minh sáng tác trong thời gian bị giam cầm tại Trung Quốc (1942-1943).</p>
          <p>Tác phẩm này thể hiện tinh thần lạc quan, ý chí bất khuất, và lòng yêu nước sâu sắc.</p>
          <button className="resource-button" title="Xem chi tiết về Nhật Ký Trong Tù">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Tuyên Ngôn Độc Lập</h3>
          <p>Văn kiện lịch sử do Hồ Chí Minh soạn thảo, tuyên bố độc lập của Việt Nam ngày 2/9/1945.</p>
          <p>Tác phẩm này khẳng định quyền tự do và độc lập của dân tộc Việt Nam.</p>
          <button className="resource-button" title="Xem chi tiết về Tuyên Ngôn Độc Lập">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Lời Kêu Gọi Toàn Quốc Kháng Chiến</h3>
          <p>Bài viết kêu gọi toàn dân đứng lên bảo vệ độc lập, thể hiện tinh thần quyết chiến.</p>
          <p>Được công bố năm 1946, đây là lời hiệu triệu mạnh mẽ trong kháng chiến chống Pháp.</p>
          <button className="resource-button" title="Xem chi tiết về Lời Kêu Gọi Toàn Quốc Kháng Chiến">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Di Chúc Hồ Chí Minh</h3>
          <p>Bản di chúc của Hồ Chí Minh, thể hiện tâm nguyện xây dựng một Việt Nam hòa bình, thống nhất.</p>
          <p>Di chúc là kim chỉ nam cho sự nghiệp cách mạng sau khi ông qua đời.</p>
          <button className="resource-button" title="Xem chi tiết về Di Chúc Hồ Chí Minh">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Các Bài Viết Về Đạo Đức Cách Mạng</h3>
          <p>Tập hợp các bài viết của Hồ Chí Minh về phẩm chất cần thiết của người cách mạng.</p>
          <p>Các bài viết này nhấn mạnh sự cần thiết của đạo đức trong công cuộc xây dựng đất nước.</p>
          <button className="resource-button" title="Xem chi tiết về Các Bài Viết Về Đạo Đức Cách Mạng">
            Xem chi tiết
          </button>
        </div>
        <div className="resource-item modern-card slide-up">
          <div className="resource-icon">
            <FaBookOpen size={32} />
          </div>
          <h3 className="resource-title">Hồ Chí Minh Toàn Tập</h3>
          <p>Bộ sưu tập đầy đủ các tác phẩm, bài viết, và diễn văn của Hồ Chí Minh.</p>
          <p>Đây là nguồn tư liệu quý giá để nghiên cứu tư tưởng và cuộc đời của ông.</p>
          <button className="resource-button" title="Xem chi tiết về Hồ Chí Minh Toàn Tập">
            Xem chi tiết
          </button>
        </div>
        {/* (Thêm khoảng 40 tài liệu nữa, mỗi tài liệu 2 đoạn, để đạt ~50 tài liệu tổng cộng) */}
      </div>
    </section>
  );
}
