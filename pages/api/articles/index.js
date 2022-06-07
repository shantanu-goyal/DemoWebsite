import { articles } from '../../../data'
import { withSentry } from '@sentry/nextjs';



const handler = (req, res) => {
  res.status(200).json(articles)
}

export default withSentry(handler);

