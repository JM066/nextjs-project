import Head from "next/head";

import MainHeader from "../components/Layout/MainHeader/index";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <title>Meetup Events</title>
        <meta
          name="description"
          content="Find all the coding related events here"
        />
      </Head>
      <MainHeader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
