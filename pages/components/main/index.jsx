import Ring from "./ring"
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();

  let { id } = router;
  let newWords = id ? id.split("-") : ["Bapak/Ibu"];

  return (
    <section className="main">
      <div className="main-first">
        <Ring />
        <h1 className="main-first-title">Wedding Invitation</h1>
        <p>Dear</p>
        <p>{newWords.map((word) => word + "")}</p>
        <hr />
      </div>
      <div className="main-second">
        <div className="main-second-title">
          <h1>Lukman</h1>
          <h1>&</h1>
          <h1>Aisyah</h1>
        </div>
      </div>
    </section>
  )
}

export default Main