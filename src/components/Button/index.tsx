import styled from 'styled-components'

const Button = styled.button<{ disabled?: boolean }>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1.25rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ theme }) => theme.colors.secondary};
`

export default Button
