import { withLayout } from "../src/layout/Layout";
import { MainSection } from "../src/sections/MainSection/MainSection";
import About from "../src/sections/About/About";
import Contacts from "../src/sections/Contacts/Contacts";

function Home() {
  return (
    <>
      <MainSection />
      <About />
      <Contacts />
    </>
  );
}

export default withLayout(Home);
