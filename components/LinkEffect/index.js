import styled, { css } from 'styled-components'

export const Trigger = styled.div`
  cursor: pointer;
`

export const Underline = styled.div`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.1em;
    left: 0;

    border-bottom: 1px solid
      ${({ theme, invert }) =>
        !invert ? theme.colors.primary : theme.colors.secondary};

    width: 100%;
    opacity: 0;
    transition: opacity 300ms ${props => props.theme.ease.standard},
      transform 300ms ${props => props.theme.ease.standard};
    transform: translateY(-0.2em);
  }

  &:hover {
    &::after {
      opacity: 0.5;
      transform: translateY(0px);
    }
  }

  ${Trigger}:hover & {
    &::after {
      opacity: 0.5;
      transform: translateY(0px);
    }
  }
`

const OPACITY_HOVER = css`
  opacity: ${props => (props.invert ? 0.5 : 0.3)};
`

export const Opacity = styled.div`
  display: inline-block;
  transition: opacity 400ms ${props => props.theme.ease.standard};

  &:hover {
    ${OPACITY_HOVER}
  }

  ${Trigger}:hover & {
    ${OPACITY_HOVER}
  }
`

export const ZoomWrapper = styled.div`
  overflow: hidden;
`

export const ZoomNode = styled.div`
  transition: transform 600ms ${props => props.theme.ease.easeOut};

  ${Trigger}:hover & {
    transform: scale(1.0125);
  }
`
