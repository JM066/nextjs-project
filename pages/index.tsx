import path from "path";
import fs from "fs/promises";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/EventList";

function Homepage(props) {
  const featuredEvent = getFeaturedEvents();
  console.log("pageProps", props);
  const { products } = props;
  return (
    <div>
      <EventList items={featuredEvent} />
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  console.log("jsonData", jsonData);
  // const data = await JSON.parse(jsonData);
  return {
    props: {
      // products: data.products,
    },
  };
};
export default Homepage;
