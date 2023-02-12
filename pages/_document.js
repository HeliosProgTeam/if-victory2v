import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";
// emotion
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import createEmotionServer from '@emotion/server/create-instance';
// theme
// import palette from '../src/theme/palette';

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
          {/*<title>ПРИКАРПАТГАРАНТ</title>*/}
          {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.png" />*/}
          {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.png" />*/}
          {/*<link rel="icon" type="image/png" sizes="16x16" href="../src/components/logo/logo.svg" />*/}
          {/*<link rel="icon" type="image/x-icon" href="../src/components/logo/logo.svg"/>*/}
          <link rel="shortcut icon" href="/images/logo.svg" sizes={"192x192"} />

          {/* Fonts */}
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
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    });

  const initialProps = await Document.getInitialProps(ctx);
  return initialProps;
};
