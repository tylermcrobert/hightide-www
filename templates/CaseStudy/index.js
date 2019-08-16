import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import formatTitle from '../../util/formatTitle'
import PageIntro from '../../components/PageIntro'

export default function CaseStudy({ data }) {
  const title = RichText.asText(data.name)

  return (
    <Wrap>
      <Section noTop>
        <img src={data.image.url} alt={formatTitle(title)} />
      </Section>
      <Section>
        <PageIntro>
          <PageIntro.Heading>{title}</PageIntro.Heading>
          {data.description[0].text !== '' && (
            <PageIntro.Body>{RichText.render(data.description)}</PageIntro.Body>
          )}
        </PageIntro>
      </Section>
    </Wrap>
  )
}
