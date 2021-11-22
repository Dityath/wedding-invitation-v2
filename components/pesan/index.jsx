import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const Pesan = () => {
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
    <section ref={ref} className="pesan">
      <motion.div
        initial={{ y: "30vh", opacity: 0 }}
        className="pesan-main"
        animate={animation}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
      >
        <h1>Pesan Untuk Pasangan</h1>
        <div className="pesan-container">
          <h3>Pesan (12)</h3>
          <hr />
          <form>
            <input type="text" name="nama" placeholder="Nama Anda" />
            <textarea name="pesan" placeholder="Pesan Anda" />
            <button type="submit">Kirim</button>
            <div className="comment-box"></div>
          </form>
        </div>
      </motion.div>
      <div className="pesan-flower">
        <motion.div
          className="flower-1"
          initial={{ y: -10, opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/fower transparant 4.png"
            alt=""
            width="346"
            height="316.98"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Pesan;