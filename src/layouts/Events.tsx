import { EventCard } from "@/features/Events";
import { historiesData } from "@/data/histories";

export default function Events() {
  return (
    <section id="events" className="section">
      <h2 className="section-title-events fade-in">Sự Kiện Lịch Sử</h2>
      <div className="events-content">
        {historiesData.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </section>
  );
}
