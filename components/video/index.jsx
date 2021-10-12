import Iframe from "react-iframe";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Video = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [animation, inView])

  return (
    <section ref={ref} className="video">
      <motion.div
        initial={{ y: "30vh", opacity: 0 }}
        animate={animation}
        transition={{type: "spring", duration: 2.6, bounce: 0}}
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
    </section>
  )
}

export default Video