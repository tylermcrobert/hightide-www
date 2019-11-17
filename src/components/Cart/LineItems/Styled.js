import styled, { css } from 'styled-components'
import { mq } from 'style/theme'

// Wrapper

const LineItems = styled.div`
  overflow: scroll;
  margin-bottom: ${props => props.theme.fontSizes[2]};
  font-size: 80%;

  @media ${mq.xs} {
    font-size: 100%;
  }
`

// Line Item

const grid = css`
  display: grid;
  grid-template-columns: 1fr 3.75em 5em;
  grid-gap: 1rem;
`

const LineItemHeader = styled.div`
  ${grid}
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding-bottom: 0.5rem;
`

const ItemWrapper = styled.div`
  ${grid}
  padding: 1rem 0;
  border-bottom: 1px solid grey;
`

const QtyEdit = styled.button`
  padding: 0 0.5em;
`

const VariantIndicator = styled.span`
  opacity: 0.5;
`

const ItemDescWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  img {
    display: none;

    @media ${mq.xs} {
      display: block;
    }
  }

  @media ${mq.xs} {
    grid-template-columns: 4rem 1fr;
  }
`

export default {
  ItemWrapper,
  QtyEdit,
  LineItems,
  ItemDescWrapper,
  LineItemHeader,
  VariantIndicator,
}
