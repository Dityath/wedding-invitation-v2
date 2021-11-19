import Ring from "./ring"
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
    </section>
  );
}

export default Main