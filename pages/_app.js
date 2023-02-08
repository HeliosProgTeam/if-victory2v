import "../src/styles/reset.css";
import "../src/styles/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider, useTheme } from "@mui/material";
import * as React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>ПРИКАРПАТГАРАНТ</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
