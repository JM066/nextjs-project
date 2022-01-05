import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../helpers/api-utils";

import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { Fragment } from "react";

function Events(props) {
  const { events } = props;
  const router = useRouter();
  const findEvent = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <Head>
        <title>Meetup Events</title>
        <meta
          name="description"
          content="Find all the coding related events here"
        />
      </Head>
      <div className="center">
        <EventSearch onSearch={findEvent} />
        <EventList items={events} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 20,
  };
}
export default Events;
