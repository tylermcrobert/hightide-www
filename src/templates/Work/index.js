import { memo } from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

import { Wrap } from 'style'
import Heading from 'components/Heading'
import AspectImage from 'components/AspectImage'
import Section from 'components/Section'
import { Opacity, Trigger, ZoomWrapper, ZoomNode } from 'components/LinkEffect'
import Styled from './Styled'

const Work = memo(({ data: response }) => {
  return (
    <Section>
      <Wrap>
        <Styled.Wrapper>
          {response.results.map(({ uid, data }) => (
            <Link href="/work/[uid]" as={`/work/${uid}/`} key={uid}>
              <Trigger>
                <a>
                  <WorkItem
                    key={uid}
                    image={data.image.url}
                    thumbnail={data.thumbnail.large && data.thumbnail.large.url}
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
})

export default Work

function WorkItem({ title, image, thumbnail }) {
  return (
    <div>
      <ZoomWrapper>
        <ZoomNode>
          <AspectImage src={thumbnail || image} />
        </ZoomNode>
      </ZoomWrapper>
      <Styled.Title>
        <Heading as="h2" headingStyle={2}>
          <Opacity invert>{title}</Opacity>
        </Heading>
      </Styled.Title>
    </div>
  )
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
