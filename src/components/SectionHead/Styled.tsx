import styled, { css } from 'styled-components'

const Header = styled.div<{ line?: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto;

  ${props =>
    props.line &&
    css`
      border-bottom: 1px solid ${props.theme.colors.standard};
      margin-bottom: ${props.theme.margins.standard};
    `}
`

const HoverTransform = styled.span``

const HoverTarget = styled.div`
  display: inline-block;
  transition: 400ms transform ${props => props.theme.ease.standard};
  ${HoverTransform}:hover & {
    transform: translateX(0.3rem);
  }
`

export default { Header, HoverTransform, HoverTarget }
