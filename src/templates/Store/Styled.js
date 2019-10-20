import styled from 'styled-components'

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const SizeWrapper = styled.div`
  display: flex;
`

const Size = styled.div`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`

const ItemWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 0;
`

export default { ProductWrapper, SizeWrapper, Size, ItemWrapper }
