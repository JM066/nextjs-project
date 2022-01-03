// import path from "path";
// import fs from "fs/promises";
import { GetStaticProps } from "next";

import { getFeaturedEvents } from "../helpers/api-utils";

import EventList from "../components/EventList";
import Button from "../components/Button";

function Homepage(props) {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Re-generating...!");
  // const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // const jsonData = await fs.readFile(filePath);
  // const data = await JSON.parse(jsonData.toString());
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 10,
  };
};
export default Homepage;
