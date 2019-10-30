import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1.25rem;
`

export default Button
