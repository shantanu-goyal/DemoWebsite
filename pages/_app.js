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
      <Script
        id="sentry-console-capture"
        src="https://browser.sentry-cdn.com/7.0.0/captureconsole.min.js"
        crossOrigin="anonymous"
        integrity="sha384-F9eVzZTC8N8+p6mvSqBoTIuFHbKq2XFPn6ZtNKPkUBslMACSFOHy3/1XkET00hnC"
        priority="true"
        strategy="worker"
      />

      <Script
        id="sentry-debugging"
        src="https://browser.sentry-cdn.com/7.0.0/debug.min.js"
        crossOrigin="anonymous"
        integrity="sha384-gfwqW2T9/pJzXG5kGMjh219m8NxYr4sFdNEmk8Kcmm03LLR3e7u0MUCJtF+BvwlA
        "
        priority="true"
        strategy="worker"
      />
      
      <Script
        id="sentry-session-timing"
        src="https://browser.sentry-cdn.com/7.0.0/sessiontiming.min.js"
        crossOrigin="anonymous"
        integrity="sha384-yy0Jah9kyZt8VCnKVBxDj92pIC/E9XFkw5G6NXx2+0ZJbTBn83Y3X32KqAZxhF9b"
        priority="true"
        strategy="worker"
      />

      <Script
        id="sentry-transaction"
        src="https://browser.sentry-cdn.com/7.0.0/transaction.min.js"
        crossOrigin="anonymous"
        integrity="sha384-p+n3NUtytg2Zgunyx5gQNdbZk7AieZyquN8nOaL7+hbqbe0SZomZIQJ5apsiXuLd"
        priority="true"
        strategy="worker"
      />

      <Script id="sentry-init" strategy='worker' dangerouslySetInnerHTML={{
        __html: `Sentry.init({
            dsn:"https://e31f798306f746fab3b4fc9b33cbdf0d@o1278195.ingest.sentry.io/6477256",
            integrations: [new Sentry.Integrations.BrowserTracing(), new Sentry.Integrations.Debug(
              {
                debugger: boolean,
                stringify: boolean
              }
            ), new Sentry.Integrations.CaptureConsole(
              {levels: string}
            ), new Sentry.Integrations.SessionTiming(), new Sentry.Integrations.Transaction() ],
		        tracesSampleRate: 1.0
          });`,
      }}>
      </Script>
      <Component {...pageProps} />
    </Layout>
  )
}



export default MyApp
