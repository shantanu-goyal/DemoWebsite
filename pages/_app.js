import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [available, serAvailable] = useState(false);
  const [available2, setAvailable2] = useState(false);
  const [available3, setAvailable3] = useState(false);
  function loadHandler() {
    serAvailable(true)
  };
  function loadHandler2() {
    setAvailable2(true);
  }
  function loadHandler3() {
    setAvailable3(true);
  }

  return (
    <Layout>
      <Script
        id="sentry"
        src="https://browser.sentry-cdn.com/7.0.0/bundle.tracing.min.js"
        strategy={'worker'}
        crossOrigin="anonymous"
        integrity="sha384-+zViWRWnRAkk9/+V2CRRVm1tuQEGGqye3jiEC8SDdjaOyzmv86+kvpl6NnRy9QIF"
        priority="true"
      />
      <Script id="sentry-init"
        strategy={'worker'}
        dangerouslySetInnerHTML={{
          __html: `Sentry.init({
            dsn:"https://e31f798306f746fab3b4fc9b33cbdf0d@o1278195.ingest.sentry.io/6477256",
            integrations: [new Sentry.Integrations.BrowserTracing()],
		        tracesSampleRate: 1.0
          });`,
        }}>
      </Script>
      <Script
        id="walkme"
        strategy={'lazyOnload'}
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
      <Script strategy={'lazyOnload'} id="beamer" type='text/javascript' src="https://app.getbeamer.com/js/beamer-embed.js" onLoad={loadHandler2} />

      {available2 && (
        <Script strategy={'lazyOnload'} id="beamer-config" dangerouslySetInnerHTML={
          {
            __html: `var beamer_config = {
                product_id : 'uJgeHXDh45550'
              };`
          }
        } />
      )}


      <Script strategy={'lazyOnload'} id="segment-app" type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="bRXNRn318aULtnU6nP0XiGOmwp1c5HoP";;analytics.SNIPPET_VERSION="4.15.3";
          analytics.load("bRXNRn318aULtnU6nP0XiGOmwp1c5HoP");
          analytics.page();
          }}();
        `
        }} />
      <Script strategy={'lazyOnload'} id="google-ads" src="https://www.googletagmanager.com/gtag/js?id=UA-232776594-1" onLoad={loadHandler3} />
      {available3 && (
        <Script strategy={'lazyOnload'} id="google-ads-2" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-232776594-1');`
        }} />
      )}
      <Script strategy={'lazyOnLoad'} id="hotjar" dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3034966,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://cors-anywhere.herokuapp.com/https://static.hotjar.com/c/hotjar-','.js?sv=');`
      }}>
      </Script>
      <Script strategy={'lazyOnload'} src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous" />
      <Script strategy={'lazyOnload'} src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.esm.min.js" integrity="sha512-WzHZOpkAAY/u9nfFXTQq2oKrRlVTKtPKLOp3J0TULh85H3NW1sDTRo0+8c30+l0X3Ry1Z1cJt2yla0aGU7uqqw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Script strategy={'lazyOnload'} src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.min.js" integrity="sha512-1/8Tj23BRrWnKZXeBruk6wTnsMJbi/lJsk9bsRgVwb6j5q39n0A00gFjbCTaDo5l5XrPVv4DZXftrJExhRF/Ug==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Component {...pageProps} />
    </Layout>
  )
}



export default MyApp
