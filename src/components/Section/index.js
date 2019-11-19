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

const VALUES = [3, 3.5, 4, 4.25]

const Section = styled(FadeIn)`
  margin: ${VALUES[0]}rem 0;

  @media ${mq.sm} {
    margin: ${VALUES[1]}rem 0;
  }
  @media ${mq.md} {
    margin: ${VALUES[2]}rem 0;
  }
  @media ${mq.lg} {
    margin: ${VALUES[3]}rem 0;
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

Section.Padding = styled(FadeIn)`
  padding: ${VALUES[0]}rem 0;

  @media ${mq.sm} {
    padding: ${VALUES[1]}rem 0;
  }
  @media ${mq.md} {
    padding: ${VALUES[2]}rem 0;
  }
  @media ${mq.lg} {
    padding: ${VALUES[3]}rem 0;
  }
`

export default Section
