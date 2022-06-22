import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [available, serAvailable] = useState(false);
  function loadHandler() {
    serAvailable(true)
  };

  return (
    <Layout>
      <Script
        id="sentry"
        src="https://browser.sentry-cdn.com/7.0.0/bundle.tracing.min.js"
        crossOrigin="anonymous"
        integrity="sha384-+zViWRWnRAkk9/+V2CRRVm1tuQEGGqye3jiEC8SDdjaOyzmv86+kvpl6NnRy9QIF"
        priority="true"
        onLoad={loadHandler}
      />
      {available && (<Script id="sentry-init"
        dangerouslySetInnerHTML={{
          __html: `Sentry.init({
            dsn:"https://e31f798306f746fab3b4fc9b33cbdf0d@o1278195.ingest.sentry.io/6477256",
            integrations: [new Sentry.Integrations.BrowserTracing()],
		        tracesSampleRate: 1.0
          });`,
        }}>
      </Script>)}
      <Script
        id="walkme"
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
      <Script id="beamer" type='text/javascript' src="https://app.getbeamer.com/js/beamer-embed.js" />
       <Script id="beamer-config" dangerouslySetInnerHTML={
        {
          __html:`var beamer_config = {
            product_id : 'uJgeHXDh45550'
          };`
        }
       } />
      <Component {...pageProps} />
    </Layout>
  )
}



export default MyApp
