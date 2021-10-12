import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Nama = () => {
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
    <section  ref={ref} className="nama">
      <motion.div
        className="nama-title"
        initial={{ y: "30vh", opacity: 0 }}
        animate={animation}
        transition={{type: "spring", duration: 2.6, bounce: 0}}
      >
        <h1>Lukman</h1>
        <h1>&</h1>
        <h1>Aisyah</h1>
      </motion.div>
    </section>
  )
}

export default Nama