import React from 'react'
import Heading from 'components/Heading'
import splitArr from 'util/splitArr'
import Styled from './Styled'

interface WrapperProps {
  title: string
  children: React.ElementType[]
}

export const Wrapper: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <>
      <Heading headingStyle={2} as="h3">
        {title}
      </Heading>
      <Styled.Wrapper>
        {splitArr(children, 2).map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{item}</div>
        ))}
      </Styled.Wrapper>
    </>
  )
}

export const Item: React.FC = ({ children }) => {
  return <Styled.Item>{children}</Styled.Item>
}

export const Title: React.FC<{ noMargin?: boolean }> = ({
  children,
  noMargin,
}) => {
  return (
    <Heading as="h4" headingStyle={1} noMargin={noMargin}>
      {children}
    </Heading>
  )
}
