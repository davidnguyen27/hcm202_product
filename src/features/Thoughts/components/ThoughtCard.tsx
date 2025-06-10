import type { Ideology } from "../types/Ideology.type";
import { thoughtsData } from "@/data/thoughts";

export default function ThoughtCard() {
  return (
    <div className="thoughts-content">
      {thoughtsData?.map((item: Ideology, idx: number) => (
        <div key={idx} className="thought-card">
          <div className="thought-card-image-wrapper">
            <img src={item.image} alt={item.title} className="thought-card-image" loading="lazy" />
          </div>
          <div className="thought-card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
