import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import Styled from './Styled'
import { Wrap, Section } from '../../style'
import formatTitle from '../../util/formatTitle'
import Heading from '../../components/Heading'

function Work({ data: response }) {
  return (
    <Section>
      <Wrap>
        <Styled.Wrapper>
          {response.work.results.map(({ uid, data }) => (
            <Link href="/work/[uid]" as={`/work/${uid}/`}>
              <a>
                <WorkItem
                  key={uid}
                  image={data.image.url}
                  title={RichText.asText(data.name)}
                />
              </a>
            </Link>
          ))}
        </Styled.Wrapper>
      </Wrap>
    </Section>
  )
}

function WorkItem({ title, image }) {
  return (
    <div>
      <img src={image} alt={formatTitle(title)} />
      <Heading as="h2" headingStyle={2}>
        {title}
      </Heading>
    </div>
  )
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
// Work.propTypes = {}

export default Work
