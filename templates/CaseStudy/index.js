import { createContext } from 'react'
import { RichText } from 'prismic-reactjs'
import { Wrap } from '../../style'
import formatTitle from '../../util/formatTitle'
import textExists from '../../util/textExists'
import PageIntro from '../../components/PageIntro'
import Section from '../../components/Section'
import Gallery from './Gallery'

export const CaseStudyCtx = createContext()

export default function CaseStudy({ data }) {
  const title = RichText.asText(data.name)

  return (
    <CaseStudyCtx.Provider value={{ title }}>
      <Wrap>
        <Section noTop>
          <img src={data.image.url} alt={formatTitle(title)} />
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
}

function Slices({ data }) {
  return data.body.map(slice => {
    switch (slice.slice_type) {
      case 'gallery':
        return <Gallery.Wrapper data={slice} />
      default:
        console.log(`nothing built for ${slice.slice_type}`)
        return null
    }
  })
}
