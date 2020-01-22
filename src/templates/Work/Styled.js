import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Title = styled.div`
  color: ${props => props.theme.colors.secondary};
  margin: ${props => props.theme.margins.slim} 0;
`

const TagWrapper = styled.div`
  margin-bottom: ${props => props.theme.margins.standard};
  margin: -0.5rem;
`

const Tag = styled.a`
  color: ${props =>
    props.greyed ? props.theme.colors.grey : props.theme.colors.secondary};

  display: inline-block;
  line-height: 2;
  margin: 0 0.5rem;
  cursor: pointer;
`

export default { Wrapper, Title, Tag, TagWrapper }
