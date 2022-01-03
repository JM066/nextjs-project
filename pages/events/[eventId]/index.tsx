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
<<<<<<< HEAD

export async function getStaticProps(context) {
  const { params } = context;
  const eventItemId = params.eventId;
  // const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // const jsonData = await fs.readFile(filePath);
  // const data = JSON.parse(jsonData.toString());
  const event = await getEventById(eventItemId);
=======
async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}
export async function getStaticProps(context) {
  const { params } = context;
  const eventItemId = params.eventId;
  const data = await getData();

  const product = data.products.find((item) => item.id === eventItemId);
>>>>>>> ae7aa82d8e5142d80ec7bd9e0404fa157af2bb2f

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
<<<<<<< HEAD
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
=======
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id: string) => ({ params: { eventId: id } }));
  return {
    paths: params,
>>>>>>> ae7aa82d8e5142d80ec7bd9e0404fa157af2bb2f
    fallback: true,
  };
}
export default EventDetail;
