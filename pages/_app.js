import "../src/styles/reset.css";
import "../src/styles/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ThemeProvider, useTheme} from "@mui/material";

function MyApp({ Component, pageProps }) {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
