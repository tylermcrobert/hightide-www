import styled from 'styled-components'

const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Cart = styled.div`
  h6 {
    font-size: ${props => props.theme.fontSizes[1]};
  }
`
const ItemWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: grid;
  grid-template-columns: 5rem 1fr;

  align-items: center;
  padding: 1rem 0;
  grid-gap: 1rem;
`

const Title = styled.h2`
  margin-bottom: 0.25rem;
`

const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const Secondary = styled.div`
  display: flex;
`

const TotalWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`

const CheckoutBottom = styled.div`
  text-align: right;
`

export default {
  ItemWrapper,
  Title,
  TotalWrapper,
  Cart,
  Detail,
  Secondary,
  CheckoutBottom,
  CheckoutWrapper,
}
