import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/MLogo.png" />
      <body className="bg-light dark:bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
