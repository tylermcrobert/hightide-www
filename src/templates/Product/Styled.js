import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: ${props => props.theme.margins.standard};
`

const TitlePriceWrapper = styled.div`
  margin-bottom: 2rem;
  h1 {
    margin-bottom: 0.5rem;
  }
`

const OptionWrapper = styled.ul`
  margin-bottom: 1rem;
`

const Option = styled.li`
  display: inline-flex;
  font-size: ${props => props.theme.fontSizes[1]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.grey};
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  overflow: hidden;

  ${props =>
    props.isSelected &&
    css`
      border: 1px solid ${props.theme.colors.primary};
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.secondary};
    `};
`

const ProductDetail = styled.div`
  margin-bottom: ${props => props.theme.margins.standard};
`

const Description = styled.div`
  margin-bottom: ${props => props.theme.margins.standard};

  li {
    padding-left: 1em;
    position: relative;
    margin-bottom: 0.5rem;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
    }
  }
`

export default {
  Wrapper,
  ProductDetail,
  Description,
  TitlePriceWrapper,
  OptionWrapper,
  Option,
}
