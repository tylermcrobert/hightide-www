import Meta from 'components/Meta'
import Homepage from 'templates/Homepage'
import getInstagramData from 'middleware/getInstagramData'
import { Client } from 'middleware/prismic'
import prerender from 'middleware/prerender'

const Index = ({ data }) => (
  <>
    <Meta url={false} />
    <Homepage data={data} />
  </>
)

Index.getInitialProps = async ({ req, res }) => {
  const ClientReq = Client(req)

  const site = await ClientReq.getSingle('site', {
    fetchLinks: ['work.name', 'work.image', 'work.homepageThumbnail'],
  })

  const instagramData = await getInstagramData()

  prerender(res)

  return { data: { instagramData, site } }
}

export default Index
