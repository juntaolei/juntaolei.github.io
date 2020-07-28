import { ServerStyleSheet } from "styled-components";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal()
    };
  };

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="description" content="Personal site for Jun Tao Lei" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};
