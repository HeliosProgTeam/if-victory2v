import {withLayout} from "../src/layout/Layout";
import {MainSection} from "../src/sections/MainSection/MainSection";
import Divider from "../src/components/divider/Divider";

function Home() {
  return (
    <>
        <MainSection />
        <Divider/>
    </>
  )
}

export default withLayout(Home)