import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Layout from "../components/layout";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const theme = {
  white: "#FFFFFF",
  light: "#F7FAFC",
  dark: "#1F2232",
  sizzlingred: "#FF5A5F",
  slateblue: "#645DD7",
  brightblue: "#3F62DC",
};

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Fira Sans", sans-serif;
  }

  .disabled {
    pointer-events: none;
  }

  .underlay {
    opacity: 0.5;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-enter-active {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .fade-enter-active, .fade-exit-active {
    transition: opacity 300ms;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <SwitchTransition>
        <CSSTransition
          key={router.route}
          classNames="fade"
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CSSTransition>
      </SwitchTransition>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
