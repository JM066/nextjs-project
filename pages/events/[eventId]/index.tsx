import path from "path";
import fs from "fs/promises";

import { useRouter } from "next/router";
import EventItem from "../../../components/EventItems";
import { getEventById } from "../../../dummyData";

function EventDetail(props) {
  const { loadedProduct } = props;
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!loadedProduct || !event) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <EventItem item={event} />
      <p>{loadedProduct.title}</p>
      <p>{loadedProduct.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventItemId = params.eventId;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const product = data.products.find((item) => item.id === eventItemId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { eventId: "e1" } },
      { params: { eventId: "e2" } },
      { params: { eventId: "e3" } },
    ],
    fallback: true,
  };
}
export default EventDetail;
