import Main from "../components/main/index";
import Undangan from "../components/undangan/index";
import Akad from "../components/akad";
import Gallery from "../components/gallery";
import Video from "../components/video";
import Amplop from "../components/amplop";
import Einvitation from "../components/einvitation";
import Nama from "../components/nama";
import Pesan from "../components/pesan";
import Footer from "../components/footer";

import Seo from "./seo";

import Switch from "./switch";

import { useState } from "react";
import Expand from "react-expand-animated";
import Sound from "react-sound";

const MainComponent = () => {
  const [reveal, setReveal] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const lagu =
    "https://res.cloudinary.com/bagastri07/video/upload/v1620572921/y2mate.com_-_Marry_Me_Thomas_Rhett_Lyrics_btvj9e.mp3";

  return (
    <>
      <Sound
        url={lagu}
        playStatus={isOn ? Sound.status.PLAYING : Sound.status.PAUSED}
        loop={true}
        volume={30}
      />
      <Seo />
      {reveal ? <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} /> : ""}
      <div className="index-background">
        <Main />
        <div className="bottom-button">
          {reveal ? (
            ""
          ) : (
            <button
              onClick={() => {
                setReveal(true);
                setIsOn(true);
              }}
            >
              bottom
            </button>
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
    </>
  );
};

export default MainComponent;
