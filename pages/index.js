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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': '*',
      Accept: 'application/json; charset=utf-8',
    }
  });

  if (res.status !== 200) {
    throw String(`Invalid server response: ${res.status} ${res.statusText}`);
  }

  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
