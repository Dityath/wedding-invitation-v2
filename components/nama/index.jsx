import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const Nama = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [animation, inView]);

  return (
    <section ref={ref} className="nama">
      <div className="nama-container">
        <motion.div
          className="nama-title"
          initial={{ y: "30vh", opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 2.6, bounce: 0 }}
        >
          <h1>Lukman</h1>
          <h1>&</h1>
          <h1>Aisyah</h1>
        </motion.div>
      </div>
      <div className="nama-flower">
        <motion.div
          className="flower-1"
          initial={{ y: "-10vh", opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/flower 8.png"
            alt=""
            width="89"
            height="86"
          />
        </motion.div>
        <motion.div
          className="flower-2"
          initial={{ y: "20vh", opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/leaf 4.png"
            alt=""
            width="60"
            height="87"
          />
        </motion.div>
        <motion.div
          className="flower-3"
          initial={{ y: -10, opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/leaf 3.png"
            alt=""
            width="60"
            height="87"
          />
        </motion.div>
        <motion.div
          className="flower-4"
          initial={{ y: 10, opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/flower transparant 2.png"
            alt=""
            width="490"
            height="708"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Nama