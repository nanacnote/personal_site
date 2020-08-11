import { AppProps } from 'next/app'
import { MyProvider } from '../components'
import '../public/stylesheet/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}

export default MyApp
