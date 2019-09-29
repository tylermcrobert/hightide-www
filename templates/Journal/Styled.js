import styled, { css } from 'styled-components'
import LazyImg from '@tylermcrobert/react-lazyimg'
import { mq, sizes } from 'style/theme'

const STACK_SIZE = `(min-width: ${sizes.xs}px) and (max-width: ${sizes.md}px)`

const RATIO = (2 / 3) * 100

const Wrapper = styled.div`
  @media ${mq.xs} {
    display: grid;
    grid-gap: ${props => props.theme.margins.standard};
    grid-template-columns: repeat(2, 1fr);
  }
`

const CardWrapper = styled.a`
  cursor: pointer;

  ${props =>
    props.large &&
    css`
      grid-row: auto / span 2;
      display: flex;
      flex-direction: column;
    `}
`

const ImgContainer = styled.div`
  flex: 1;
  height: 0;
  padding-top: ${RATIO}%;
  position: relative;
  overflow: hidden;
  margin-bottom: ${props => props.theme.margins.slim};
`

const Img = styled(LazyImg)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

const PostDesc = styled.div`
  display: flex;

  @media ${STACK_SIZE} {
    display: block;
  }
`

const PostTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes[2]};
  margin-right: ${props => props.theme.margins.standard};
  flex: 1;

  @media ${STACK_SIZE} {
    margin-bottom: 0.25em;
  }
`

export default { Wrapper, Img, PostTitle, PostDesc, ImgContainer, CardWrapper }
