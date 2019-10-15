import styled from 'styled-components'
import { Wrap } from 'style'
import { mq } from 'style/theme'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 1px 0;
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`

const ItemWrapper = styled(Wrap)`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const RelatedHeader = styled.div`
  text-align: center;
  margin-bottom ${props => props.theme.margins.standard};

`

const Item = styled.div`
  width: 100%;
  height: 0;
  padding-top: ${(2 / 3) * 100}%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

const Title = styled.h5`
  margin-top: ${props => props.theme.margins.slim};
`

export default { Wrapper, Item, ItemWrapper, RelatedHeader, Title }
