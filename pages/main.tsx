import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Layout, Introduction } from '../components'

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
  const post = {
    webDevelopmentSkill: {
      title: 'Web Development',
      subTitle:
        'having been coding for many years I have used a lot of frameworks and libraries. Below is how comfortable I am with some of the major ones.',
      frameworks: {
        react: 90,
        vue: 60,
        next: 85,
        express: 90,
        nest: 70,
        loopback: 50,
        jest: 75,
      },
      libraries: {
        jquery: 90,
        lodash: 90,
        chartjs: 85,
        gsap: 75,
        d3: 75,
        boostrap: 90,
        'material ui': 90,
      },
      technologies: {
        nodejs: 90,
        git: 90,
        npm: 90,
        docker: 90,
        sql: 90,
        'nosql (mongoDB)': 90,
        graphql: 75,
      },
      tools: {
        'adobe xd': 90,
        sass: 90,
        'chrome tools': 90,
        webpack: 80,
        browserify: 80,
        gulp: 75,
        grunt: 65,
      },
      projects: {
        "Using Matter JS physics engine to make a Newton's Cradle": {
          link: '/projects',
          componentName: 'NewtonsCradle',
        },
        'Snake Game coded in vanilla JS': {
          link: '/projects',
          componentName: 'PureSnake',
        },
        'CSS designed Drum Machine sounds handled with Howler audio API': {
          link: '/projects',
          componentName: 'DrumMachine',
        },
      },
    },
    dataScienceSkill: {
      title: 'Data Science',
      subTitle:
        'I use Python & R alot for doing tasks related to data cleaning, structuring, analysis (including Machine learning) and visualisation. Below is how comfortable I am with some of the major data science tools and tech.',
      frameworks: {
        django: 50,
        dash: 50,
        flask: 50,
      },
      libraries: {
        numpy: 90,
        scipy: 90,
        pandas: 90,
        matplotlib: 80,
        seaborn: 75,
        'sciKit-learn': 65,
        TensorFlow: 65,
      },
      technologies: {
        pip: 90,
        anaconda: 85,
        NLP: 50,
        ML: 65,
      },
      tools: {
        jupyter: 90,
        spyder: 90,
        'r studio': 75,
        pyenv: 90,
        tableau: 50,
      },
      projects: {},
    },
  }

  return {
    props: {
      post,
    },
  }
}
