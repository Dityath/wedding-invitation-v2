import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Akad = () => {
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
    <motion.div
      initial={{ y: "30vh", opacity: 0 }}
      animate={animation}
      transition={{type: "spring", duration: 2.6, bounce: 0}}
    >
      <section ref={ref} className="akad">
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
      </section>
    </motion.div>
  )
}

export default Akad