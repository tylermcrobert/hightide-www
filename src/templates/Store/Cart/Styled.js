import styled from 'styled-components'

const ItemWrapper = styled.div`
  border-bottom: 1px solid grey;
  display: grid;
  grid-template-columns: 6rem 1fr auto;

  align-items: center;
  padding: 1rem 0;
  grid-gap: 1rem;
`

const Title = styled.h2`
  margin-bottom: 0.25rem;
`

export default { ItemWrapper, Title }
