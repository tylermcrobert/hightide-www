import styled from 'styled-components'
import { mq, sizes } from '../../style/theme'

const STACK_SIZE = `(max-width: ${sizes.md}px)`

const Wrapper = styled.div`
  @media ${mq.xs} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.margins.standard};
  }
`

const PostDesc = styled.div`
  display: flex;

  @media ${STACK_SIZE} {
    display: block;
  }
`

const PostTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes[2]};
  margin-right: ${props => props.theme.margins.standard};
  flex: 1;

  @media ${STACK_SIZE} {
    margin-bottom: 0.25em;
  }
`

const Img = styled.img`
  margin-bottom: ${props => props.theme.margins.slim};
`

export default { Wrapper, Img, PostTitle, PostDesc }
