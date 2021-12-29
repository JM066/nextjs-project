import Layout from "../components/Layout";
import Home from "./index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }, props) {
  // console.log("pageProps", props);
  return (
    <Layout>
      <Home />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
