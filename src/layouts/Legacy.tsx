import { LegacyCard } from "@/features/Legacies";
import { useState } from "react";
import { legaciesData } from "@/data/legacies";

const tabs = ["Chính trị – Tư tưởng", "Văn hóa – Lối sống", "Kháng chiến – Ngoại giao"];

export default function Legacy() {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = legaciesData?.filter((item) => item.type === tabs[activeTab]) ?? [];

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
        {filtered.map((item, i) => (
          <LegacyCard key={i} title={item.title} description={item.description} imageUrl={item.imageUrl} />
        ))}
      </div>
    </section>
  );
}
