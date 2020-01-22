import { memo } from 'react'
import Section from 'components/Section'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import Arrow from 'components/Arrow'
import SectionHead from 'components/SectionHead'
import Styled from './Styled'

interface RecognitionProps {
  items: any[]
}
const Recognition: React.FC<RecognitionProps> = memo(({ items }) => {
  if (items && items.length) {
    return (
      <Section>
        <SectionHead line>Recognition</SectionHead>
        <Styled.Wrapper>
          {items.map(({ title, link }) => (
            <a
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
              key={RichText.asText(title)}
            >
              <Styled.Item>
                {RichText.render(title)}
                {link.url && <Arrow />}
              </Styled.Item>
            </a>
          ))}
        </Styled.Wrapper>
      </Section>
    )
  }
  return null
})

Recognition.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Recognition
