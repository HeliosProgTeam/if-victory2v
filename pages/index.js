import {withLayout} from "../src/layout/Layout";
import {MainSection} from "../src/sections/MainSection/MainSection";

function Home() {
  return (
    <>
        <MainSection />
        {/*<MainSection />*/}
    </>
  )
}

export default withLayout(Home)