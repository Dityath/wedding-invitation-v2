import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Gallery = () => {
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
      <section ref={ref} className="gallery">
        <h1>Photos Gallery</h1>
        <div className="gallery-container">
          <div className="mega-wrapper">
            <div className="wrapper">
              <div className="gallery-image-normal">
                <Image
                  src="/gallery/image-1.png"
                  layout="fill"
                  objectFit="cover"
                  alt='Foto Mempelai'
                />
              </div>
              <div className="gallery-image-semi">
                <Image
                  src="/gallery/image-2.png"
                  layout="fill"
                  objectFit="cover"
                  alt='Foto Mempelai'
                />
              </div>
            </div>
            <div className="wrapper">
              <div className="gallery-image-large">
                <Image
                  src="/gallery/image-5.png"
                  layout="fill"
                  objectFit="cover"
                  alt='Foto Mempelai'
                />
              </div>
            </div>
          </div>
          <div className="mega-wrapper">
            <div className="wrapper">
              <div className="gallery-image-normal">
                <Image
                  src="/gallery/image-4.png"
                  layout="fill"
                  objectFit="cover"
                  alt='Foto Mempelai'
                />
              </div>
              <div className="gallery-image-semi">
                <Image
                  src="/gallery/image-3.png"
                  layout="fill"
                  objectFit="cover"
                  alt='Foto Mempelai'
                />
              </div>
            </div>
            <div className="wrapper">
              <div className="gallery-image-large">
                <Image
                  src="/gallery/image-6.png"
                  layout="fill"
                  objectFit="cover"
                  alt='Foto Mempelai'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery