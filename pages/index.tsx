import Head from 'next/head'
import { ClipWindow, Footer } from "./components";

export const Welcome = (): JSX.Element => (
  <div className="welcome-page">
    <Head>
      <title>Owusu K. | Fullstack Web Developer</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet" />
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
