import path from "path";
import fs from "fs/promises";
import { GetStaticProps } from "next";
import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/EventList";
import Button from "../components/Button";

function Homepage(props) {
  const featuredEvent = getFeaturedEvents();
  console.log("pageProps", props);
  const { products } = props;
  return (
    <div>
      <EventList items={featuredEvent} />
      <ul>
        {products?.map((product) => (
          <li key={product.id} style={{ marginTop: "30px", listStyle: "none" }}>
            <Button link={`/events/${product.id}`}>{product.title}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Re-generating...!");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = await JSON.parse(jsonData.toString());

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
export default Homepage;
