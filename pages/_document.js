import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

// ----------------------------------------------------------------------

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="uk">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Donations to people affected by the war"
          />
          <meta
            name="keywords"
            content="charity,donation,ukraine,prykarpatgarant,"
          />
          <meta name="author" content="IF-Victory" />
          <link rel="shortcut icon" href="/images/logov2.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@500;800&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component,
    });

  const initialProps = await Document.getInitialProps(ctx);
  return initialProps;
};
