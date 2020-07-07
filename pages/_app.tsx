import { AppProps } from 'next/app'
import '../public/stylesheet/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
