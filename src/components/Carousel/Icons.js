import styled, { css } from 'styled-components'

const Arrow = ({ className }) => (
  <svg
    {...{ className }}
    viewBox="0 0 32 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="1.5">
      <polyline points="22 19 31 10 22 1" />
      <line x1="31" y1="10" y2="10" />
    </g>
  </svg>
)

const PlusSvg = ({ className }) => (
  <svg
    viewBox="0 0 18 18"
    {...{ className }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="white" strokeWidth="1.5" fill="none" fillRule="evenodd">
      <line x1="9" x2="9" y2="18" />
      <line x1="18" y1="9" y2="9" />
    </g>
  </svg>
)

const SHARED_STYLE = css`
  height: 2em;

  g {
    stroke: white;
  }
`
export const ArrowNext = styled(Arrow)`
  ${SHARED_STYLE};
`

export const ArrowPrev = styled(Arrow)`
  ${SHARED_STYLE};
  transform: rotate(180deg);
`

export const Expand = styled(PlusSvg)`
  ${SHARED_STYLE};
  transform: rotate(180deg);
`
