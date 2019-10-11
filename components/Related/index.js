import PropTypes from 'prop-types'
import Section from 'components/Section'
import { Wrap } from 'style'
import Link from 'next/link'
import { Trigger, Opacity, ZoomWrapper, ZoomNode } from 'components/LinkEffect'
import Styled from './Styled'

function RelatedWrapper({ children, heading }) {
  if (children && children.length) {
    return (
      <Styled.Wrapper>
        <Section>
          {heading && (
            <Wrap>
              <Styled.RelatedHeader>{heading}</Styled.RelatedHeader>
            </Wrap>
          )}
          <Styled.ItemWrapper>{children.map(item => item)}</Styled.ItemWrapper>
        </Section>
      </Styled.Wrapper>
    )
  }
  return null
}

RelatedWrapper.propTypes = {
  children: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
}

/**
 * Item that goes inside related wrapper
 */

function RelatedItem({ src, title, link, as }) {
  return (
    <Trigger>
      <Link href={link} as={as}>
        <a>
          <ZoomWrapper>
            <ZoomNode>
              <Styled.Item src={src}></Styled.Item>
            </ZoomNode>
          </ZoomWrapper>
          {title && (
            <Styled.Title>
              <Opacity invert>{title}</Opacity>
            </Styled.Title>
          )}
        </a>
      </Link>
    </Trigger>
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
