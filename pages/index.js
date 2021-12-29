import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home({ products }) {
  console.log("products", products);

  return (
    <div className={styles.container}>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <h1>Hello Next World</h1>
    </div>
  );
}
export function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: "p1",
          title: "product 1",
        },
      ],
    },
  };
}
export default Home;
