import { RichText } from 'prismic-reactjs'
import { Wrap, Section } from '../../style'
import Heading from '../../components/Heading'
import formatTitle from '../../util/formatTitle'

export default function CaseStudy({ data }) {
  const title = RichText.asText(data.name)
  return (
    <Wrap>
      <Section noTop>
        <img src={data.image.url} alt={formatTitle(title)} />
      </Section>
      <Section>
        <Heading headingStyle={1} as="h1">
          {title}
        </Heading>
        {data.description && RichText.render(data.description)}{' '}
      </Section>
    </Wrap>
  )
}
