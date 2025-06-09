import type { Event } from "../types/event.type";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="event-item slide-up">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </div>
  );
}
