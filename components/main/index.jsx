import Ring from "./ring"
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

const Main = () => {
  const router = useRouter();

  const pathName = router.asPath;
  const newWords = pathName.substr(1)
    ? pathName.substr(1).split("%20")
    : ["Bapak/Ibu"];

  return (
    <section className="main">
      <motion.div
        className="main-first"
        initial={{ y: "30vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
      >
        <Ring />
        <h1 className="main-first-title">Wedding Invitation</h1>
        <p>Dear</p>
        <p>{newWords.map((word) => word + " ")}</p>
        <hr />
      </motion.div>
      <div className="main-flowers">
        <motion.div
          className="flower-1"
          initial={{ rotate: 30, y: 10, opacity: 0 }}
          animate={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ duration: 5, ease: "easeIn" }}
        >
          <Image
            src="/pattern/flower/flower 2.webp"
            alt="flower image"
            width="208"
            height="190"
          />
        </motion.div>
        <motion.div
          className="flower-2"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn" }}
        >
          <Image
            src="/pattern/flower/flower 5.webp"
            alt="flower image 2"
            width="170"
            height="156"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Main