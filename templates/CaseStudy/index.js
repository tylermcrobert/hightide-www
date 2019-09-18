import { createContext, memo } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from '../../style'
import formatTitle from '../../util/formatTitle'
import textExists from '../../util/textExists'
import PageIntro from '../../components/PageIntro'
import Section from '../../components/Section'
import Gallery from './Gallery'
import ImageBlock from './ImageBlock'

export const CaseStudyCtx = createContext()

const CaseStudy = memo(({ data }) => {
  const title = RichText.asText(data.name)
  const alt = formatTitle(title)

  return (
    <CaseStudyCtx.Provider value={{ title, alt }}>
      <Wrap>
        <Section noTop>
          <img src={data.image.url} alt={alt} />
        </Section>
        <Section>
          <PageIntro>
            <PageIntro.Heading>{title}</PageIntro.Heading>
            {textExists(data.description) && (
              <PageIntro.Body>
                {RichText.render(data.description)}
              </PageIntro.Body>
            )}
          </PageIntro>
        </Section>
        <Slices data={data} />
      </Wrap>
    </CaseStudyCtx.Provider>
  )
})

function Slices({ data }) {
  return data.body.map(slice => {
    switch (slice.slice_type) {
      case 'gallery':
        return <Gallery.Wrapper data={slice} />
      case 'image_block':
        return <ImageBlock data={slice} />
      default:
        console.log(`nothing built for ${slice.slice_type}`)
        return null
    }
  })
}

export default CaseStudy
