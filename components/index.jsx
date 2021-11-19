import Main from "../components/main/index";
import Undangan from "../components/undangan/index";
import Head from "next/head";
import Akad from "../components/akad";
import Gallery from "../components/gallery";
import Video from "../components/video";
import Amplop from "../components/amplop";
import Einvitation from "../components/einvitation";
import Nama from "../components/nama";
import Pesan from "../components/pesan";
import Footer from "../components/footer";

import { useState } from "react";
import Expand from "react-expand-animated";

const MainComponent = () => {
  const [reveal, setReveal] = useState(false);

  return (
    <div>
      <Head>
        <title>Lukman Aisyah</title>
        <meta name="description" content="Contoh Undangan Pernikahan" />

        <meta name="og:title" content="Lukman Aisyah" key="title" />
        <meta
          name="og:description"
          content="Contoh Undangan Pernikahan"
          key="og:description"
        />
      </Head>
      <div className="index-background">
        <Main />
        <div className="bottom-button">
          {reveal ? (
            ""
          ) : (
            <button onClick={() => setReveal(true)}>bottom</button>
          )}
        </div>
        <Expand open={reveal} duration={1000}>
          <Nama />
          <Undangan />
          <Akad />
        </Expand>
      </div>

      <Expand open={reveal} duration={1000}>
        <Gallery />
        <div className="free-space" />
        <Video />
        <Amplop />
        <Pesan />
        <Einvitation />
        <Footer />
      </Expand>
    </div>
  );
};

export default MainComponent;
