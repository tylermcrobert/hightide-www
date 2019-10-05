import Section from 'components/Section'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'
import Arrow from 'components/Arrow'
import Link from 'next/link'
import SectionHead from 'components/SectionHead'
import Styled from './Styled'

export default function Recognition({ items }) {
  if (items && items.length) {
    return (
      <Section>
        <SectionHead line>Recognition</SectionHead>
        <Styled.Wrapper>
          {items.map(({ title, link }) => (
            <Link href={link.url} key={RichText.asText(title)}>
              <a rel="noopener noreferrer" target="_blank">
                <Styled.Item>
                  {RichText.render(title)}
                  {link.url && <Arrow />}
                </Styled.Item>
              </a>
            </Link>
          ))}
        </Styled.Wrapper>
      </Section>
    )
  }
  return null
}

Recognition.propTypes = {
  items: PropTypes.array.isRequired,
}
