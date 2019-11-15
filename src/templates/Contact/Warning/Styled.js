import styled from 'styled-components'

const ValidationWarning = styled.div`
  color: ${props => props.theme.colors.error};
  margin: 0.25em 0;
  overflow: hidden;
`

export default { ValidationWarning }
