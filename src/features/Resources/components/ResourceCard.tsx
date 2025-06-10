import { FaBookOpen } from "react-icons/fa6";
import type { Resource } from "../types/resource.type";

interface Props {
  resource: Resource;
}

export default function ResourceCard({ resource }: Props) {
  return (
    <div className="resource-item modern-card slide-up">
      <div className="resource-icon">
        <FaBookOpen size={32} />
      </div>
      <h3 className="resource-title">{resource.title}</h3>
      <p>{resource.description}</p>
      <a
        href={resource.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resource-button"
        title={`Xem tài liệu ${resource.title}`}
      >
        Xem chi tiết
      </a>
    </div>
  );
}
