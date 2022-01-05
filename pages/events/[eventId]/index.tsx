// import path from "path";
// import fs from "fs/promises";
import Head from "next/head";

import EventItem from "../../../components/EventItems";
import { getEventById, getAllEvents } from "../../../helpers/api-utils";
import { Fragment } from "react";

function EventDetail(props) {
  const { selectedEvent } = props;

  if (!selectedEvent) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta
          name="description"
          content="Find all the coding related events here"
        />
      </Head>
      <div>
        <EventItem item={selectedEvent} />
        <p>{selectedEvent.title}</p>
        <p>{selectedEvent.description}</p>
      </div>
    </Fragment>
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
