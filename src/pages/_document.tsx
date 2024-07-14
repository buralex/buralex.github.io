import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* To fix rendering content without styles in firefox https://github.com/vercel/next.js/issues/22465#issuecomment-828886583 */}
        <script>0</script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
