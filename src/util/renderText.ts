import { RichText } from 'prismic-reactjs'

export type PrismicRichText =
  | Array<{
      type: string
      text: string
    }>
  | []

const renderText = (input: PrismicRichText): null | React.ReactFragment => {
  if (input === []) {
    return null
  }
  return RichText.render(input)
}

export default renderText
