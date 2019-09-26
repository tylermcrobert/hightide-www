import PropTypes from 'prop-types'
import Section from 'components/Section'
import { Wrap } from 'style'
import Link from 'next/link'
import Styled from './Styled'

function RelatedWrapper({ children }) {
  if (children && children.length) {
    return (
      <Styled.Wrapper>
        <Section>
          <Wrap>
            <Styled.RelatedHeader>Related</Styled.RelatedHeader>
          </Wrap>
          <Styled.ItemWrapper>{children.map(item => item)}</Styled.ItemWrapper>
        </Section>
      </Styled.Wrapper>
    )
  }
  return null
}

RelatedWrapper.propTypes = {
  children: PropTypes.array.isRequired,
}

/**
 * Item that goes inside related wrapper
 */

function RelatedItem({ src, title, link }) {
  return (
    <Link href={link}>
      <a>
        <Styled.Item src={src}></Styled.Item>
        {title && <Styled.Title>{title}</Styled.Title>}
      </a>
    </Link>
  )
}

RelatedItem.defaultProps = {
  title: null,
}
RelatedItem.propTypes = {
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export { RelatedWrapper, RelatedItem }
