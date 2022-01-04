import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";

import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";

function Events(props) {
  const { events } = props;
  const router = useRouter();
  const findEvent = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.replace(fullPath);
  };
  return (
    <div className="center">
      <EventSearch onSearch={findEvent} />
      <EventList items={events} />
    </div>
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
