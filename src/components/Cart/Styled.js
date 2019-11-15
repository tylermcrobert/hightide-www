import styled from 'styled-components'

const Cart = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;

  width: 100%;
  height: 100vh;
  max-width: 30rem;

  padding: ${props => props.theme.margins.standard};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  display: grid;
  grid-template-rows: auto 1fr auto;

  transform: translate3d(${props => (props.isOpen ? 0 : 100)}%, 0, 0);
  transition: transform 300ms ${props => props.theme.ease.standard};
`

const FinePrint = styled.h6`
  font-size: ${props => props.theme.fontSizes[1]};
`

const ItemWrapper = styled.div`
  border-bottom: 1px solid grey;
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

const QtyEdit = styled.button`
  padding: 0 0.5em;
`

export default {
  ItemWrapper,
  Title,
  Cart,
  Detail,
  Secondary,
  FinePrint,
  QtyEdit,
}
