import loadable from "@loadable/component";

// import MainComponent from "../components";
const MainComponent = loadable(() => import("../components"));

const Custom404 = () => {
  return <MainComponent />;
};

export default Custom404;
