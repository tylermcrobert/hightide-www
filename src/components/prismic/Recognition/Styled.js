import styled from 'styled-components'
import { mq } from 'style/theme'
import Arrow from 'components/Arrow'

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

  svg {
    transform: translateX(0);
    transition: 200ms transform ${props => props.theme.ease.standard};
  }

  &:hover {
    svg {
      transform: translate3d(0.5em, 0, 0);
    }
  }

  h3 {
    margin-bottom: 0;
  }
`

export default { Wrapper, Item }
