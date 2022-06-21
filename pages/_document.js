import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head >
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
