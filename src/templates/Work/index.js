import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

import { Wrap } from 'style'
import Heading from 'components/Heading'
import AspectImage from 'components/AspectImage'
import Section from 'components/Section'
import { Opacity, Trigger } from 'components/LinkEffect'
import getImageSize from 'util/getImageSize'
import Styled from './Styled'

function Work({ site }) {
  const caseStudies = site.site_case_studies.map(item => item.case_study)
  return (
    <Section>
      <Wrap>
        <Styled.Wrapper>
          {caseStudies.map(({ data, uid }) => {
            if (data && uid) {
              const image = data.thumbnail ? data.thumbnail.url : data.image.url
              return (
                <Link href="/work/[uid]" as={`/work/${uid}/`} key={uid}>
                  <a>
                    <Trigger>
                      <WorkItem
                        key={uid}
                        image={image}
                        title={RichText.asText(data.name)}
                      />
                    </Trigger>
                  </a>
                </Link>
              )
            }
            return null
          })}
        </Styled.Wrapper>
      </Wrap>
    </Section>
  )
}

function WorkItem({ title, image }) {
  const resizedImage = getImageSize(image, { w: 1200, q: 80, fm: 'webp' })

  return (
    <div>
      <AspectImage src={resizedImage} />
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
// Work.propTypes = {}

export default Work
