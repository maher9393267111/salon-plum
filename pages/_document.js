import Document, { Head, Main, NextScript ,Html } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }     
    return renderPage();
  }

  render() {
    return (
      <Html>
        <Head>
          <title>nourabeautycenter96</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>


{/* ----Arabic Font---- */}
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;500&display=swap" rel="stylesheet"></link>


          {/* ----site icon---- */}

          <link

rel="icon"
href="/images/my/3.jpg"


/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}