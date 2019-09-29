import styled from 'styled-components'

const Wrapper = styled.ul`
  column-count: 2;
  column-gap: ${props => props.theme.margins.standard};
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.margins.slim};

  h3 {
    margin-bottom: 0;
  }
`

export default { Wrapper, Item }
