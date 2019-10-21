import styled from 'styled-components'
import { mq } from 'style/theme'

const ProductGrid = styled.div`
  display: grid;

  @media ${mq.sm} {
    grid-gap: ${props => props.theme.margins.standard};
    grid-template-columns: 1fr 1fr;
  }
`

const Description = styled.div`
  margin-top: ${props => props.theme.margins.standard};
`

const Product = styled.div`
  margin: 1rem 0;
`

const SizeWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Size = styled.div`
  outline: none;
  cursor: pointer;

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
`

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1.25rem;
`

export default { Button, ProductGrid, SizeWrapper, Size, Product, Description }
