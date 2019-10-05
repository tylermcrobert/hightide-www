import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

import { Wrap } from 'style'
import Heading from 'components/Heading'
import Section from 'components/Section'
import {
  Underline,
  Trigger,
  ZoomWrapper,
  ZoomNode,
} from 'components/LinkEffect'
import Styled from './Styled'

function Work({ data: response }) {
  return (
    <Section>
      <Wrap>
        <Styled.Wrapper>
          {response.results.map(({ uid, data }) => (
            <Link href="/work/[uid]" as={`/work/${uid}/`}>
              <Trigger>
                <a>
                  <WorkItem
                    key={uid}
                    image={data.image.url}
                    title={RichText.asText(data.name)}
                  />
                </a>
              </Trigger>
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
      <ZoomWrapper>
        <ZoomNode>
          <Styled.Image src={image} />
        </ZoomNode>
      </ZoomWrapper>
      <Styled.Link>
        <Heading as="h2" headingStyle={2}>
          <Underline invert>{title}</Underline>
        </Heading>
      </Styled.Link>
    </div>
  )
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
// Work.propTypes = {}

export default Work
