import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

import { Wrap } from 'style'
import Heading from 'components/Heading'
import AspectImage from 'components/AspectImage'
import Section from 'components/Section'
import { Opacity, Trigger } from 'components/LinkEffect'
import getImageSize from 'util/getImageSize'
import toUrlFormat from 'util/toUrlFormat'
import Styled from './Styled'

function Work({ site, tag }) {
  const caseStudies = site.site_case_studies.map(item => item.case_study)

  return (
    <Wrap>
      <Section>
        <Styled.Wrapper>
          {caseStudies.map(({ data, uid, tags }) => {
            if (data && uid) {
              return (
                <Link href="/work/[uid]" as={`/work/${uid}/`} key={uid}>
                  <a>
                    <Trigger>
                      <WorkItem
                        key={uid}
                        image={
                          data.thumbnail ? data.thumbnail.url : data.image.url
                        }
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
      </Section>
    </Wrap>
  )
}

function WorkItem({ title, image }) {
  const resizedImage = getImageSize(image, { w: 1200, q: 80, fm: 'jpg' })

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
