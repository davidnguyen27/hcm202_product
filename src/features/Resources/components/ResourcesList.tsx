import ResourceCard from "./ResourceCard";
import { documentsData } from "@/data/documents";

export default function ResourcesList() {
  return (
    <div className="resources-content">
      {documentsData.map((resource, idx) => (
        <ResourceCard key={idx} resource={resource} />
      ))}
    </div>
  );
}
