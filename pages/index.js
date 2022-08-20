import { withLayout } from "../src/layout/Layout";
import { MainSection } from "../src/sections/MainSection/MainSection";
import About from "../src/sections/About/About";

function Home() {
  return (
    <>
      <MainSection />
      <About />
      {/*<MainSection />*/}
    </>
  );
}

export default withLayout(Home);
