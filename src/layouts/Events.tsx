import { EventCard } from "@/features/Events";
import { useEvent } from "@/features/Events/hooks/useEvent";

export default function Events() {
  const { data: events, isLoading, error } = useEvent();

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Không thể tải sự kiện lịch sử.</p>;
  if (!events || events.length === 0) return <p>Không có sự kiện nào.</p>;

  return (
    <section id="events" className="section">
      <h2 className="section-title-events fade-in">Sự Kiện Lịch Sử</h2>
      <div className="events-content">
        {events.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </section>
  );
}
