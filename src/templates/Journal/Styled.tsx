import styled, { css } from 'styled-components'
import { mq, sizes } from 'style/theme'

const RATIO = (2 / 3) * 100

/**
 * Description Area
 */

const DescWrapper = styled.div<{ hovered: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: ${props => props.theme.margins.standard};
  margin-bottom: ${props => props.theme.margins.standard};
  margin-top: ${props => props.theme.margins.slim};

  opacity: ${props => (props.hovered ? 0.5 : 1)};
  transform: 400ms ${props => props.theme.ease.standard} opacity;

  @media (min-width: ${sizes.xs}px) and (max-width: ${sizes.sm}px) {
    display: block;
  }
`

const JournalSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-column-gap: ${props => props.theme.margins.standard};
  grid-auto-flow: column;
`

const ImageWrap = styled.div<{ isLarge: boolean }>`
  grid-row: ${props => (props.isLarge ? 'auto / span 3' : 'auto')};
  position: relative;

  ${props =>
    props.isLarge
      ? css`
          height: 100%;
        `
      : css`
          padding-top: ${RATIO}%;
          height: 0;
        `}

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const LoadMore = styled.div`
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
`

export default {
  DescWrapper,
  LoadMore,
  JournalSection,
  ImageWrap,
}
