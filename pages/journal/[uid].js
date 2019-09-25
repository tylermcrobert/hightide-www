import { RichText } from 'prismic-reactjs'
import Error from 'next/error'
import PostTemplate from 'templates/Post'
import Meta from 'components/Meta'
import { Client } from 'util/prismic'

const Post = ({ data }) => {
  if (data) {
    const postImg = data.data.main_image.url
    const thumnail = data.data.thumbnail_image.url

    const title = RichText.asText(data.data.title)

    return (
      <>
        <Meta
          title={title}
          image={thumnail || postImg}
          url={`journal/${data.uid}`}
        />
        <PostTemplate data={data} />
      </>
    )
  }
  return <Error statusCode={404} />
}

Post.getInitialProps = async ({ query, req }) => {
  const { uid } = query
  const data = await Client(req).getByUID('journal', uid)
  return { data }
}

export default Post
