// import "@/styles/globals.css";
// import "@/styles/globalStyles";
import Head from "next/head";
import "../styles/globals.scss";
// import GlobalStyles from "@/styles/globalStyles";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persister = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MEC Clone App</title>
        <meta
          name="description"
          content="I love MEC.ca so much, I wanted to try and see if I could clone it"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        {/* <PersistGate loading={null} persister={persister}> */}
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
