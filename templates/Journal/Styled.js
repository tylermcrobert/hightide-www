import styled from 'styled-components'
import { mq } from 'style/theme'

const RATIO = (2 / 3) * 100

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};

  @media ${mq.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`

/**
 * Journal Card Items
 */

const JournalCard = styled.a`
  cursor: pointer;
  grid-row: ${props => props.theme.large && 'auto / span 2'};
`

const CardLayout = styled.div`
  height: 100%;
  display: grid;
  grid-gap: ${props => props.theme.margins.slim};
  grid-template-rows: 1fr min-content;
`

const PostImage = styled.div`
  padding-top: ${RATIO}%;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center center;

  @media ${mq.xs} {
    height: ${props => (!props.theme.large ? 0 : '100%')};
    padding-top: ${props => !props.theme.large && `${RATIO}%`};
  }
`

/**
 * Description Area
 */

const DescWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.margins.standard};
  grid-template-columns: 1fr auto;
`

const LoadMore = styled.div`
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
`

export default {
  Wrapper,
  JournalCard,
  PostImage,
  CardLayout,
  DescWrapper,
  LoadMore,
}
