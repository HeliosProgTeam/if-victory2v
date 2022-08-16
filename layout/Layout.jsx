import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={"container"}>{children}</main>
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
