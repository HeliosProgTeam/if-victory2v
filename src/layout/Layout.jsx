import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { MainSection } from "../sections/MainSection/MainSection";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/*<div className="container">*/}
        <main>{children}</main>
      {/*</div>*/}
      <Footer />
    </>
  );
};

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
