import styled from 'styled-components'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mq.sm} {
    .item {
      &.span-1 {
        grid-column: span 1;
      }

      &.span-2 {
        grid-column: span 2;
      }
    }
  }

  p {
    margin-bottom: 0;
  }

  .text-wrap {
    margin-top: ${props => props.theme.margins.slim};
  }
`

const Item = ({ span, ...props }) => {
  return <div className={`item span-${span}`} {...props} />
}

export default { Wrapper, Item }
