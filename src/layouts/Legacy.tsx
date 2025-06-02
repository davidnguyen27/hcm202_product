import { useState } from "react";

const tabs = ["Chính trị – Tư tưởng", "Văn hóa – Lối sống", "Kháng chiến – Ngoại giao"];

export default function Legacy() {
  const [activeTab, setActiveTab] = useState(0);

  const content = [
    // Tab 0
    [
      {
        title: "Đảng Cộng Sản Việt Nam",
        text: [
          "Hồ Chí Minh sáng lập Đảng Cộng sản Việt Nam năm 1930.",
          "Đảng tiếp tục lãnh đạo đất nước theo con đường xã hội chủ nghĩa.",
          "Ông nhấn mạnh đạo đức và đoàn kết trong Đảng.",
        ],
      },
      {
        title: "Tuyên Ngôn Độc Lập",
        text: [
          "Ngày 2/9/1945, Hồ Chí Minh đọc bản Tuyên ngôn khai sinh nước Việt Nam Dân chủ Cộng hòa.",
          "Văn kiện lịch sử khẳng định quyền độc lập dân tộc.",
        ],
      },
      {
        title: "Tư Tưởng Ngoại Giao",
        text: [
          "Ông xây dựng nền ngoại giao hòa bình, hợp tác và chủ động.",
          "Quan điểm: Việt Nam sẵn sàng làm bạn với tất cả các nước.",
        ],
      },
    ],
    // Tab 1
    [
      {
        title: "Văn Hóa và Thơ Ca",
        text: [
          "Tác phẩm tiêu biểu: 'Nhật ký trong tù', 'Lời kêu gọi toàn quốc kháng chiến'.",
          "Thơ ca giàu tính nhân văn và cách mạng.",
        ],
      },
      {
        title: "Lối Sống Giản Dị",
        text: ["Ở nhà sàn, mặc đồ ka-ki, sống thanh bạch.", "Tấm gương đạo đức cách mạng, chí công vô tư."],
      },
    ],
    // Tab 2
    [
      {
        title: "Phong Trào Giải Phóng Dân Tộc",
        text: [
          "Tư tưởng Hồ Chí Minh lan tỏa khắp châu Á, châu Phi, châu Mỹ Latin.",
          "Ông là biểu tượng đấu tranh chống chủ nghĩa đế quốc.",
        ],
      },
      {
        title: "Kháng Chiến Chống Pháp",
        text: ["Lãnh đạo toàn quốc kháng chiến, giành chiến thắng Điện Biên Phủ.", "Kết thúc ách đô hộ của Pháp."],
      },
      {
        title: "Kháng Chiến Chống Mỹ",
        text: [
          "Tư tưởng Hồ Chí Minh soi đường cho kháng chiến thống nhất đất nước.",
          "Chiến thắng 1975 là thành quả của tư tưởng đoàn kết toàn dân.",
        ],
      },
    ],
  ];

  return (
    <section id="legacy" className="section legacy-section">
      <h2>Di Sản Hồ Chí Minh</h2>

      <div className="tabs">
        {tabs.map((label, i) => (
          <button key={i} className={i === activeTab ? "active" : ""} onClick={() => setActiveTab(i)}>
            {label}
          </button>
        ))}
      </div>

      <div className="legacy-grid">
        {content[activeTab].map((item, i) => (
          <div className="legacy-card" key={i}>
            <h3>{item.title}</h3>
            {item.text.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
