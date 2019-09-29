import PropTypes from 'prop-types'
import Section from 'components/Section'
import { Wrap } from 'style'
import Link from 'next/link'
import Styled from './Styled'

function RelatedWrapper({ children, contents }) {
  if (children && children.length) {
    return (
      <Styled.Wrapper>
        <Section>
          <Wrap>
            <Styled.RelatedHeader>
              Related {contents && contents}
            </Styled.RelatedHeader>
          </Wrap>
          <Styled.ItemWrapper>{children.map(item => item)}</Styled.ItemWrapper>
        </Section>
      </Styled.Wrapper>
    )
  }
  return null
}

RelatedWrapper.defaultProps = {
  contents: null,
}
RelatedWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  contents: PropTypes.string,
}

/**
 * Item that goes inside related wrapper
 */

function RelatedItem({ src, title, link, as }) {
  return (
    <Link href={link} as={as}>
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
  as: PropTypes.string.isRequired,
}

export { RelatedWrapper, RelatedItem }
