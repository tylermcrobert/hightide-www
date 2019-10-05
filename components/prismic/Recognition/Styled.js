import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.ul`
  column-gap: ${props => props.theme.margins.standard};
  @media ${mq.sm} {
    column-count: 2;
  }
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.margins.slim};

  h3 {
    margin-bottom: 0;
  }
`

export default { Wrapper, Item }
