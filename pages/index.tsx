import Head from 'next/head'
import { ClipWindow, Footer } from '../components'

export const Home = (): JSX.Element => (
  <div className="home-page">
    <Head>
      <title>Owusu K. | Fullstack Web Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="home-container">
        <ClipWindow />
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
)

export default Home
