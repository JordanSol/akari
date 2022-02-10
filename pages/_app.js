import Head from 'next/head'
import {motion} from 'framer-motion'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
    return (
      <>
        <Head>
          <title>Akari NFT</title>
        </Head>
        <Layout>
          <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}>
            <Component {...pageProps}/>
          </motion.div>
        </Layout>
      </>
    )
  }
  
export default MyApp