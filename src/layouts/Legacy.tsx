import { LegacyCard } from "@/features/Legacies";
import { useLegacy } from "@/features/Legacies/hooks/useLegacy";
import { useState } from "react";

const tabs = ["Chính trị – Tư tưởng", "Văn hóa – Lối sống", "Kháng chiến – Ngoại giao"];

export default function Legacy() {
  const [activeTab, setActiveTab] = useState(0);
  const { data, isLoading, isError, error } = useLegacy();

  const filtered = data?.filter((item) => item.type === tabs[activeTab]) ?? [];

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
        {isLoading && <p>Đang tải dữ liệu...</p>}
        {isError && <p className="text-red-500">Lỗi: {(error as Error).message}</p>}
        {!isLoading && filtered.length === 0 && <p>Không có dữ liệu.</p>}

        {filtered.map((item, i) => (
          <LegacyCard key={i} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
