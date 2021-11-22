import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const Akad = () => {
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
    <div className="akad" ref={ref}>
      <motion.section
        initial={{ y: "30vh", opacity: 0 }}
        animate={animation}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
        className="akad-main"
      >
        <div className="left">
          <p>AKAD:</p>
          <h5>MASJID AGUNG</h5>
          <p>Jln. Cilik Riwut II Gg. Murai RT 13 Kelurahan Sidorejo</p>
          <h5>SABTU, 9 OKTOBER 2021</h5>
          <p>08.00 WIB</p>
        </div>
        <div className="right">
          <p>RESEPSI:</p>
          <h5>GEDUNG MERDEKA</h5>
          <p>Jln. Cilik Riwut II Gg. Murai RT 13 Kelurahan Sidorejo</p>
          <h5>SABTU, 9 OKTOBER 2021</h5>
          <p>13.30 - 20.00 WIB</p>
        </div>
      </motion.section>
      <div className="akad-flower">
        <motion.div
          className="flower-1"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 5 }}
        >
          <Image
            src="/pattern/flower/fower transparant 2.png"
            alt=""
            width="615"
            height="457"
          />
        </motion.div>
        <motion.div
          className="flower-2"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 3 }}
        >
          <Image
            src="/pattern/flower/grass.png"
            alt=""
            width="181"
            height="265"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Akad;