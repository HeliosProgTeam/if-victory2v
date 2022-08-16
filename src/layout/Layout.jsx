import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

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
