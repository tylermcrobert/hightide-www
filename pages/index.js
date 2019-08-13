import Prismic from 'prismic-javascript'
import Homepage from '../templates/Homepage'
import { apiEndpoint, accessToken } from '../prismic.config'
import Meta from '../components/Meta'
import getInstagramData from '../util/getInstagramData'

const Index = ({ data }) => (
  <>
    <Meta url={false} />
    <Homepage data={data} />
  </>
)

Index.getInitialProps = async () => {
  const api = await Prismic.getApi(apiEndpoint, { accessToken })

  const homepage = await api.getSingle('page_home')

  const brand = await api.query(Prismic.Predicates.at('document.type', 'brand'))

  const capacity = await api.query(
    Prismic.Predicates.at('document.type', 'capacity')
  )

  const work = await api.query(Prismic.Predicates.at('document.type', 'work'))
  const instagramData = await getInstagramData()

  return { data: { homepage, capacity, brand, work, instagramData } }
}

export default Index
