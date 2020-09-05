import styled from 'styled-components/'
import Button from 'components/Button'

const CheckoutButton = styled(Button)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  width: 100%;
  margin-bottom: 0.5rem;
`

const SubtotalWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export default { CheckoutButton, SubtotalWrapper }
