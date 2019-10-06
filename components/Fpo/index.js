import styled from 'styled-components'

const Fpo = styled.div`
  border: 2px dashed rgb(255, 0, 255);
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 255, 0.1);
    pointer-events: none;
  }

  &:after {
    position: absolute;
    content: 'fpo';
    top: 0;
    left: 1rem;
    background: rgb(255, 0, 255);
    padding: 0.5rem;
    height: 1rem;
    border-radius: 1.5rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    text-transform: uppercase;
    transform: translateY(-50%);
  }
`

export default Fpo
