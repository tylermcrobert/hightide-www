import styled from 'styled-components'
import { mq } from 'style/theme'

const Item = styled.div`
  border-top: 1px solid ${props => props.theme.colors.black};
  padding-top: ${props => props.theme.margins.slim};
`

const ItemWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

export default { Item, ItemWrapper }
