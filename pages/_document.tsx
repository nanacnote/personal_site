import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="theme-provider theme-light">
          <div
            className="d-flex flex-justify-center position-absolute"
            style={{ right: 0, zIndex: 500 }}
          >
            <span className="h2 px-5">&#x1f6a7;</span>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
