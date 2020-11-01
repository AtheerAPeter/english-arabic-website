import "../styles/globals.scss";
import "../styles/rtl.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My website</title>
        <meta property="og:title" content="my website" />
        <meta property="og:description" content="my website description" />
        <meta property="og:image" content="https://picsum.photos/300/300" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
