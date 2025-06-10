import { useResource } from "../hooks/useResource";
import ResourceCard from "./ResourceCard";

export default function ResourcesList() {
  const { data: resources, isLoading, error } = useResource();

  if (isLoading) return <p>Đang tải ...</p>;
  if (error) return <p>Không thể tải tài liệu tham khảo.</p>;
  if (!resources || resources.length === 0) return <p>Không có dữ liệu.</p>;

  return (
    <div className="resources-content">
      {resources.map((resource, idx) => (
        <ResourceCard key={idx} resource={resource} />
      ))}
    </div>
  );
}
