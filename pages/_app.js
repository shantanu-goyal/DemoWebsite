import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        id="sentry"
        src="https://browser.sentry-cdn.com/7.0.0/bundle.tracing.min.js"
        crossOrigin="anonymous"
        integrity="sha384-+zViWRWnRAkk9/+V2CRRVm1tuQEGGqye3jiEC8SDdjaOyzmv86+kvpl6NnRy9QIF"
        priority="true"
        strategy="worker"
      />
      <Script id="sentry-init" strategy='worker' dangerouslySetInnerHTML={{
        __html: `Sentry.init({
            dsn:"https://e31f798306f746fab3b4fc9b33cbdf0d@o1278195.ingest.sentry.io/6477256",
            integrations: [new Sentry.Integrations.BrowserTracing()],
		        tracesSampleRate: 1.0
          });`,
      }}>
      </Script>
      <Component {...pageProps} />
    </Layout>
  )
}



export default MyApp
