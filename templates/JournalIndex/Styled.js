import styled from 'styled-components'
import { mq } from '../../style/theme'

const Wrapper = styled.div`
  @media ${mq.xs} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.margins.standard};
  }
`

const PostDesc = styled.div`
  display: flex;

  @media ${mq.xs} {
    display: block;
  }

  @media ${mq.md} {
    display: flex;
  }
`

const PostTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes[2]};
  margin-right: ${props => props.theme.margins.standard};
  margin-bottom: 0.25em;
  flex: 1;
`

const Img = styled.img`
  margin-bottom: ${props => props.theme.margins.slim};
`

export default { Wrapper, Img, PostTitle, PostDesc }
