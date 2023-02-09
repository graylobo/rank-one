import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="계급도, 등급표, 티어표, 브랜드 계급"></meta>
        <meta name="description" content="계급도, 등급표, 티어표, 브랜드 계급"></meta>

        <meta property="og:title" content="랭크원" />
        <meta property="og:description" content="계급도, 등급표, 티어표, 브랜드 계급" />
        <meta property="og:url" content="https://rank-one.netlify.app/" />
        <meta property="og:image" content="/images/tier-logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
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
