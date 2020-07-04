import Head from 'next/head'
import { ClipWindow, Footer } from "./components";

export const Welcome = (): JSX.Element => (
  <div className="welcome-page">
    <Head>
      <title>Owusu K. | Fullstack Web Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="welcome-container">
        <ClipWindow />
      </div>
    </main>

    <footer>
      <Footer/>
    </footer>

  </div>
)

export default Welcome
