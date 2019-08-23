import Homepage from '../templates/Homepage'
import Meta from '../components/Meta'
import getInstagramData from '../util/getInstagramData'

const Index = ({ data }) => (
  <>
    <Meta url={false} />
    <Homepage data={data} />
  </>
)

Index.getInitialProps = async ({ prismicApi }) => {
  const homepage = await prismicApi.getSingle('page_home')
  const brand = await prismicApi.getType('brand')
  const capacity = await prismicApi.getType('capacity')
  const work = await prismicApi.getType('work')
  const instagramData = await getInstagramData()
  return { data: { homepage, capacity, brand, work, instagramData } }
}

export default Index
