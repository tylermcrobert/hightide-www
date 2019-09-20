import Meta from 'components/Meta'
import Homepage from 'templates/Homepage'
import getInstagramData from 'util/getInstagramData'

const Index = ({ data }) => (
  <>
    <Meta url={false} />
    <Homepage data={data} />
  </>
)

Index.getInitialProps = async ({ prismicApi }) => {
  const site = await prismicApi.getSingle('site', {
    fetchLinks: ['work.name', 'work.image'],
  })
  const brand = await prismicApi.getType('brand')
  const work = await prismicApi.getType('work')
  const instagramData = await getInstagramData()

  return { data: { brand, work, instagramData, site } }
}

export default Index
