import {withLayout} from "../src/layout/Layout";
import {MainSection} from "../src/sections/MainSection/MainSection";

function Home() {
  return (
    <div>
        <MainSection />
        <MainSection />
    </div>
  )
}

export default withLayout(Home)