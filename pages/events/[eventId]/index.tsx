import { useRouter } from "next/router";
import EventItem from "../../../components/EventItems";
import { getEventById } from "../../../dummyData";
function EventDetail() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <div>
      <EventItem item={event} />
    </div>
  );
}
export default EventDetail;
