import loadable from "@loadable/component";

// import MainComponent from "../components";
const MainComponent = loadable(() => import("../components"));

export default function Home() {
  return <MainComponent />;
}
