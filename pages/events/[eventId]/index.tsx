import path from "path";
import fs from "fs/promises";

import EventItem from "../../../components/EventItems";
import { getEventById, getAllEvents } from "../../../helpers/api-utils";

function EventDetail(props) {
  const { selectedEvent } = props;

  if (!selectedEvent) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <EventItem item={selectedEvent} />
      <p>{selectedEvent.title}</p>
      <p>{selectedEvent.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventItemId = params.eventId;
  // const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData.toString());
  const event = await getEventById(eventItemId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}
export default EventDetail;
