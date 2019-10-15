import styled, { css } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { mq } from 'style/theme'

const FadeInNode = styled.div`
  opacity: ${props => (props.isInView ? 1 : 0)};
  transition: opacity 800ms ${props => props.theme.ease.easeIn};
  will-change: opacity;
`

const FadeIn = ({ ...props }) => {
  const [ref, inView] = useInView({
    threshold: [0, 0, 0.25, 0],
    triggerOnce: true,
  })
  return <FadeInNode ref={ref} isInView={inView} {...props} />
}

const Section = styled(FadeIn)`
  margin: 3rem 0;

  @media ${mq.sm} {
    margin: 4rem 0;
  }
  @media ${mq.md} {
    margin: 4.5rem 0;
  }
  @media ${mq.lg} {
    margin: 5rem 0;
  }

  ${props =>
    props.noTop &&
    css`
      margin-top: 0 !important;
    `}
  ${props =>
    props.noBottom &&
    css`
      margin-bottom: 0 !important;
    `}
`

export default Section
