// import Iframe from "react-iframe";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

import loadable from "@loadable/component";
const Iframe = loadable(() => import("react-iframe"));

const Video = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        rotate: 0,
      });
    }
  }, [animation, inView]);

  return (
    <section ref={ref} className="video">
      <motion.div
        initial={{ y: "30vh", opacity: 0 }}
        className="video-main"
        animate={animation}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
      >
        <h1>Video Prewedding</h1>
        <div className="container">
          <Iframe
            className="responsiveYt"
            url="https://www.youtube.com/embed/Iy-dJwHVX84"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfFullScreen
          />
        </div>
      </motion.div>
      <div className="video-flower">
        <motion.div
          className="flower-1"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/flower transparant 3.png"
            alt=""
            width="286"
            height="411.56"
          />
        </motion.div>
        <motion.div
          className="flower-2"
          initial={{ rotate: 20, y: 10, opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/flower 6.webp"
            alt=""
            width="144"
            height="132"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
