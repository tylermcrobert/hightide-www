import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Styled from './Styled'
import { Wrap, Section } from '../../style'
import formatTitle from '../../util/formatTitle'
import Heading from '../../components/Heading'

function Work({ data }) {
  return (
    <Section>
      <Wrap>
        <Styled.Wrapper>
          {data.work.results.map(item => (
            <WorkItem
              key={item.uid}
              image={item.data.image.url}
              title={RichText.asText(item.data.name)}
            />
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
