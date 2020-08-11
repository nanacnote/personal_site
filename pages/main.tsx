import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Layout, Introduction } from '../my_components'

export const Home = ({ post }): JSX.Element => (
  <div className="main-page">
    <Head>
      <title>Owusu K. | Fullstack Web Developer | Norwich - UK</title>
      <link rel="icon" href="/favicon/favicon.ico" />
    </Head>

    <main>
      <Layout siderAnimation>
        <Introduction post={post} />
      </Layout>
    </main>
  </div>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const post = (await import('../my_lib/profile.json')).default

  return {
    props: {
      post,
    },
  }
}
