import homeContent from "../content/homeContent";
import { useState } from "react";
import Head from "next/head";
const Home = () => {
  const [lang, setLang] = useState("en");

  const changeLanguage = (language) => {
    setLang(language);
    localStorage.setItem("lang", language);
  };
  return (
    <>
      <Head>
        <title>My website</title>
        <meta property="og:title" content="my website" />
        <meta property="og:description" content="my website description" />
        <meta property="og:image" content="https://picsum.photos/300/300" />
      </Head>
      <div className={lang === "en" ? "page" : "page rtl-page"}>
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("ar")}>عربي</button>
        <h1>{homeContent[lang].title}</h1>
        <h1>{homeContent[lang].msg}</h1>
      </div>
    </>
  );
};

export default Home;
