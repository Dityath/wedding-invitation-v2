import Slider from "react-slick";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Amplop = () => {
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

  const settings = {
    customPaging: function (i) {
      if (i === 0) {
        return (
          <a>
            Bank Transfer
          </a>
        );
      } else if (i === 1) {
        return (
          <a>
            Dana
          </a>
        );
      }
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section ref={ref} className="amplop">
      <motion.div
        initial={{ y: "30vh", opacity: 0 }}
        animate={animation}
        transition={{type: "spring", duration: 2.6, bounce: 0}}
      >
        <h1>Amplop Online</h1>
        <p>Bagi para undangan yang ingin memberikan amplop secara digital dapat menggunakan motode yang ada di bawah ini </p>
        <div className="amplop-container">
          <Slider {...settings}>
            <div className="inside">
              <div className="image">
                <Image
                  src="/amplop/bank.png"
                  layout="fill"
                  alt='Mandiri'
                />
              </div>
              158-2030-2294-2
              <b>A/N Muhammad Juliandro</b>
            </div>
            <div className="inside">
              Dana
            </div>
          </Slider>
        </div>
      </motion.div>
    </section>
  )
}

export default Amplop;