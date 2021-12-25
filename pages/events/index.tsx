import { getAllEvents } from "../../dummyData";
import EventList from "../../components/EventList";

function Events() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
export default Events;
