import ArticleList from '../components/ArticleList'
import { server } from '../config';


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

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`, { headers: { 'Content-Type': 'application/json' } });
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
