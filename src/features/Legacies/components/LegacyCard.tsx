interface LegacyCardProps {
  title: string;
  description: string;
}

export default function LegacyCard({ title, description }: LegacyCardProps) {
  return (
    <div className="legacy-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
