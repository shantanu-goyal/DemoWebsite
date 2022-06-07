import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <button type="button" onClick={() => {
        throw new Error("Sentry working??");
      }}>
        Throw error
      </button>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/articles`, { headers: { 'Content-Type': 'application/json' } });
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
