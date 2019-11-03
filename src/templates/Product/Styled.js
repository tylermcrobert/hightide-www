import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.margins.standard};
`

/*
const Product = styled.div`
  margin: 1rem 0;
`

const SizeWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Size = styled.div`
  outline: none;
  cursor: ${({ available }) => (available ? 'pointer' : 'auto')};

  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  border: ${({ selected, theme }) =>
    selected ? '' : `1px solid ${theme.colors.grey}`};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.secondary};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.secondary : theme.colors.primary};

  opacity: ${({ available }) => (available ? 1 : 0.3)};
`
*/

export default { Wrapper }
