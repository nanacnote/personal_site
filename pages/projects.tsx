import Head from 'next/head'
import { Layout, MyContext } from '../components'

export const Projects = (): JSX.Element => (
  <div className="project-page">
    <Head>
      <title>Owusu K. | Fullstack Web Developer | Norwich - UK</title>
      <link rel="icon" href="/favicon/favicon.ico" />
    </Head>

    <main>
      <div className="project-container">
        <Layout>
          <div className="pb-5 d-flex">
            <div>
              <a href="/main" data-no-decoration data-inherit-color>
                <div className="clickable-item p-1 position-relative">Home</div>
              </a>
            </div>
            <div className="p-1 position-relative">|</div>
            <div
              className="clickable-item p-1 position-relative"
              onClick={() => window.history.back()}
            >
              <span>Back</span>
            </div>
          </div>
          <div className="pb-5">
            <MyContext.Consumer>
              {(context) => context.projectsHydrator}
            </MyContext.Consumer>
          </div>
        </Layout>
      </div>
    </main>
  </div>
)
export default Projects
