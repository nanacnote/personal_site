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
                    <div className="pb-5">
                        <a href="/main">Return Home</a>
                    </div>
                    <div className="pb-5">
                        <MyContext.Consumer>
                            {
                                context => (
                                    context.projectsHydrator
                                )
                            }
                        </MyContext.Consumer>
                    </div>
                </Layout>
            </div>
        </main>
    </div>
)
export default Projects
