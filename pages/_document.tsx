/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta
            name="description"
            content="Scaffold a starter project using the t3 stack"
          />
          <meta property="og:site_name" content="Create t3 App" />
          <meta
            property="og:description"
            content="Scaffold a starter project using the t3 stack"
          />
          <meta property="og:image" content="/banner.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="theme-color" content="#E8DCFF" />
          <meta name="twitter:title" content="Create t3 App" />
          <meta
            name="twitter:description"
            content="Scaffold a starter project using the t3 stack"
          />
          <meta name="twitter:image" content="/banner.png" />

          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon.svg"
            sizes="any"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
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

export default MyDocument;
