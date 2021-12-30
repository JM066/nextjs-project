import MainHeader from "../components/Layout/MainHeader/index";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <div>
      <MainHeader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
