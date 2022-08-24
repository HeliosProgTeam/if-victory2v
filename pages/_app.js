import "../src/styles/reset.css";
import "../src/styles/style.scss";
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
