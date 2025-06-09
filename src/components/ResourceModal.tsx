import { FaTimes } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import "../styles/ResourceModal.scss";

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    title: string;
    description: string;
    details: string;
    image?: string;
  } | null;
}

export default function ResourceModal({ isOpen, onClose, resource }: ResourceModalProps) {
  if (!isOpen || !resource) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Đóng">
          <FaTimes />
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <FaBookOpen size={48} />
          </div>
          <h2>{resource.title}</h2>
        </div>

        <div className="modal-body">
          <div className="resource-description">
            <p>{resource.description}</p>
          </div>

          {resource.image && (
            <div className="resource-image">
              <img src={resource.image} alt={resource.title} />
            </div>
          )}

          <div className="resource-details">
            <h3>Chi tiết tài liệu</h3>
            <p>{resource.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 