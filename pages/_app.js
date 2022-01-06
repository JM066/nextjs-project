import Head from "next/head";
import Layout from "../components/Layout";
import MainHeader from "../components/Layout/MainHeader/index";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <Layout>
      <Head>
        <title>Meetup Events</title>
        <meta
          name="description"
          content="Find all the coding related events here"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
