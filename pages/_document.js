import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon.ico' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico' />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id='notifications'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
