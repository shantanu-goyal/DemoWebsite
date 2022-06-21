import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [available,serAvailable]=useState(false);
  function loadHandler(){
    serAvailable(true)
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}



export default MyApp
