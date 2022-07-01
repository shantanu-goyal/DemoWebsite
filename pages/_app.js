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
        strategy={'beforeInteractive'}
        crossOrigin="anonymous"
        integrity="sha384-+zViWRWnRAkk9/+V2CRRVm1tuQEGGqye3jiEC8SDdjaOyzmv86+kvpl6NnRy9QIF"
        priority="true"
        onLoad={loadHandler}
      />
      {available && (<Script strategy={'beforeInteractive'} id="sentry-init"
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
        strategy={'beforeInteractive'}
        dangerouslySetInnerHTML={{
          __html: `(function() { 
                var walkme = document.createElement('script'); 
                walkme.type = 'text/javascript'; 
                walkme.src = "https://cdn.walkme.com/users/c820617fb6f145dcba1a92a407382865/test/walkme_c820617fb6f145dcba1a92a407382865_https.js"; 
                var s = document.getElementsByTagName('script')[0]; 
                s.parentNode.insertBefore(walkme, s); 
                window._walkmeConfig = {smartLoad:true}; 
              })();`,
        }}
      />
      <Script id="beamer" strategy={'beforeInteractive'} type='text/javascript' src="https://app.getbeamer.com/js/beamer-embed.js" />
      <Script id="beamer-config" strategy={'beforeInteractive'} dangerouslySetInnerHTML={
        {
          __html: `var beamer_config = {
            product_id : 'uJgeHXDh45550'
          };`
        }
      } />
      <Script strategy={'beforeInteractive'} id="segment-app" type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="bRXNRn318aULtnU6nP0XiGOmwp1c5HoP";;analytics.SNIPPET_VERSION="4.15.3";
          analytics.load("bRXNRn318aULtnU6nP0XiGOmwp1c5HoP");
          analytics.page();
          }}();
        `
        }} />
      <Script strategy={'beforeInteractive'} id="google-ads" src="https://www.googletagmanager.com/gtag/js?id=UA-232776594-1" />
      <Script  strategy={'beforeInteractive'} id="google-ads-2" dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-232776594-1');`
      }} />
      <Script  strategy={'beforeInteractive'} id="hotjar" dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3034966,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
      }}>
      </Script>
      <Script id="hotjar2"  strategy={'beforeInteractive'} dangerouslySetInnerHTML={{
        __html: `
        var userId = 943568 || null;
        window.hj('identify', userId, {
        'Signed up': '2019—06-20Z',
        'Total purchases': 15,
        'Last purchase date': '2019-06-20Z'
        });`
      }} />
      <Script  strategy={'beforeInteractive'} src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous" />
      <Component {...pageProps} />
      <Script  strategy={'beforeInteractive'} src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js" integrity="sha512-9mpsATI0KClwt+xVZfbcf2lJ8IFBAwsubJ6mI3rtULwyM3fBmQFzj0It4tGqxLOGQwGfJdk/G+fANnxfq9/cew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Script  strategy={'beforeInteractive'} src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.js" integrity="sha512-8clKd0Zb9EeWqWE0gzlNxwWIjzYlYZ9cAsGcGM7gPsE+SKUxY6zZmLhrWqHMYQqbNCSwy21bn/TtA4zTQ+edag==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Layout>
  )
}



export default MyApp
