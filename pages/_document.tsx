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
            <span className="bg-info px-5">under construction</span>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
