import styled from 'styled-components'

const CurrentPrice = styled.span`
  color: ${props => (props.isDiscount ? props.theme.colors.error : 'inherit')};
`

const ComparePrice = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.primary};
  }
`

export default {
  ComparePrice,
  CurrentPrice,
}
