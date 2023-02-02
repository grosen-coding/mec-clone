// import "@/styles/globals.css";
// import "@/styles/globalStyles";
import GlobalStyles from "@/styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
