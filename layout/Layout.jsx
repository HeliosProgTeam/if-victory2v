import styles from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

const Layout = ({ children })=> {
  return (
    <>
      <Header />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout =(Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
