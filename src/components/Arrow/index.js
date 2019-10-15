import styled from 'styled-components'

const ArrowSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 60 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#000" fill="none" fillRule="evenodd" strokeLinecap="square">
      <path d="M1.25 9H58.5M59 9l-9 9M59 9l-9-9" strokeWidth="1.4" />
    </g>
  </svg>
)

const Arrow = styled(ArrowSvg)`
  height: 0.8em;
  padding: 0 0.5em;
  transform: translateY(15%);
`

export default Arrow
