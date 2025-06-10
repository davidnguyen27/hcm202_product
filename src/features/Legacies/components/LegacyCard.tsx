interface LegacyCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function LegacyCard({ title, description, imageUrl }: LegacyCardProps) {
  return (
    <div className="legacy-card">
      <div className="legacy-card-image-wrapper">
        <img src={imageUrl} alt={title} className="legacy-card-image" loading="lazy" />
      </div>
      <div className="legacy-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
