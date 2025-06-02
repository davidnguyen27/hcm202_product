const timelineEvents = [
  {
    year: "1890",
    description: "Nguyễn Sinh Cung (tên thật của Hồ Chí Minh) sinh ngày 19/5/1890 tại làng Kim Liên.",
    moreId: "timeline-modal-1",
  },
  {
    year: "1911",
    description: "Bác rời bến Nhà Rồng lên tàu Amiral Latouche-Tréville bắt đầu hành trình cứu nước.",
    moreId: "timeline-modal-2",
  },
  {
    year: "1941",
    description: "Trở về nước sau 30 năm, sáng lập Việt Minh, lãnh đạo cách mạng.",
    moreId: "timeline-modal-3",
  },
  {
    year: "1945",
    description: "Đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    moreId: "timeline-modal-4",
  },
  {
    year: "1969",
    description: "Chủ tịch Hồ Chí Minh từ trần ngày 2/9/1969, để lại di sản vĩ đại cho dân tộc.",
    moreId: "timeline-modal-5",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Dòng Thời Gian</h2>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div key={event.year} className={`timeline-row ${index % 2 === 0 ? "left" : "right"} slide-up`}>
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <p>{event.description}</p>
              <button className="btn">Xem thêm</button>
            </div>
            <span className="timeline-dot" />
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </section>
  );
}
