import { withLayout } from "../src/layout/Layout";
import { MainSection } from "../src/sections/MainSection/MainSection";
import About from "../src/sections/About/About";
import Divider from "../src/components/divider/Divider";

function Home() {
  return (
    <>
      <MainSection />
      <About />
      <Divider />
    </>
  );
}

export default withLayout(Home);
