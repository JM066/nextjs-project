import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/EventList";

function Homepage() {
  const featuredEvent = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvent} />
    </div>
  );
}
export default Homepage;
