import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        id="walkme"
        strategy="lazyOnload"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function() { 
          var walkme = document.createElement('script'); 
          walkme.type = 'text/javascript'; 
          walkme.async = true; 
          walkme.src = "https://cdn.walkme.com/users/c820617fb6f145dcba1a92a407382865/test/walkme_c820617fb6f145dcba1a92a407382865_https.js"; 
          var s = document.getElementsByTagName('script')[0]; 
          s.parentNode.insertBefore(walkme, s); 
          window._walkmeConfig = {smartLoad:true}; 
        })();`,
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
