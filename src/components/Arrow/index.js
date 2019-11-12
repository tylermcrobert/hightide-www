import styled from 'styled-components'

const ArrowSvg = ({ className, white, reverse }) => (
  <Arrow
    className={className}
    viewBox="0 0 60 18"
    xmlns="http://www.w3.org/2000/svg"
    white={white}
    reverse={reverse}
  >
    <g stroke="#000" strokeLinecap="square">
      <path d="M1.25 9H58.5M59 9l-9 9M59 9l-9-9" strokeWidth="1.4" />
    </g>
  </Arrow>
)

const Arrow = styled.svg`
  height: 0.8em;
  padding: 0 0.5em;
  transform: translateY(15%)
    rotate(${props => (props.reverse ? '180' : '0')}deg);

  * {
    stroke: ${props => (props.white ? 'white' : 'black')};
  }
`

export default ArrowSvg
