import { RichText } from 'prismic-reactjs'
import Error from 'next/error'
import PostTemplate from 'templates/Post'
import SoundSystemTemplate from 'templates/SoundSystem'
import Meta from 'components/Meta'
import { Client } from 'middleware/prismic'
import SoundSystemReq from 'middleware/SoundSystemReq'

const Post = ({ journal, soundSystem }) => {
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
        {/*
          If spotify data exists, use SoundSystem template
         */}
        {soundSystem.tracks ? (
          <SoundSystemTemplate {...soundSystem} prismicData={journal.data} />
        ) : (
          <PostTemplate data={journal.data} />
        )}
      </>
    )
  }
  return <Error statusCode={404} />
}

Post.getInitialProps = async ({ query, req }) => {
  try {
    /**
     * Get journal page from prismic
     */
    const { uid } = query
    const journal = await Client(req).getByUID('journal', uid, {
      fetchLinks: [
        'journal.title',
        'journal.thumbnail_image',
        'journal.main_image',
      ],
    })

    /**
     * Get get spotify data
     */
    const soundSystem = new SoundSystemReq(journal)
    if (soundSystem.playlistId) {
      await soundSystem.fetch()
    }

    return { journal, soundSystem }
  } catch (err) {
    console.error(err)
    return {}
  }
}

export default Post
