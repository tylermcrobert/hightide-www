import { RichText } from 'prismic-reactjs'
import Error from 'next/error'
import PostTemplate from 'templates/Post'
import Meta from 'components/Meta'
import { Client } from 'util/prismic'

const Post = ({ journal }) => {
  if (journal) {
    const postImg = journal.data.main_image.url
    const thumnail =
      journal.data.thumbnail_image && journal.data.thumbnail_image.url

    const title = RichText.asText(journal.data.title)

    return (
      <>
        <Meta
          title={title}
          image={thumnail || postImg}
          url={`journal/${journal.uid}`}
        />
        <PostTemplate data={journal} />
      </>
    )
  }
  return <Error statusCode={404} />
}

Post.getInitialProps = async ({ query, req }) => {
  const { uid } = query
  const journal = await Client(req).getByUID('journal', uid)
  return { journal }
}

export default Post
