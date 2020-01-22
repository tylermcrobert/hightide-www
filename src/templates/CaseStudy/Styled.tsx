import styled from 'styled-components'

const Center = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.margins.slim};
`

const Credits = styled(Center)`
  p {
    margin-bottom: 0;
  }
  a {
    font-weight: 500;
  }
`

const Tags = styled(Center)`
  margin: 0 auto;
  max-width: 23rem;
`

const Tag = styled.a`
  margin-right: ${props => props.theme.margins.slim};
  line-height: 1.5;
  font-weight: 300;
  color: ${props => props.theme.colors.grey};
  cursor: pointer;
`

export default { Center, Tag, Credits, Tags }
