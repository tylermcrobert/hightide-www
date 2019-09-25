import Meta from 'components/Meta'
import Homepage from 'templates/Homepage'
import getInstagramData from 'util/getInstagramData'
import { Client } from 'util/prismic'

const Index = ({ data }) => (
  <>
    <Meta url={false} />
    <Homepage data={data} />
  </>
)

Index.getInitialProps = async ({ req }) => {
  const ClientReq = Client(req)

  const site = await ClientReq.getSingle('site', {
    fetchLinks: ['work.name', 'work.image'],
  })

  const instagramData = await getInstagramData()

  return { data: { instagramData, site } }
}

export default Index
