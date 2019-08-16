import { RichText } from 'prismic-reactjs'

export default function textExists(input) {
  const str = RichText.asText(input)
  return str !== '' && str !== undefined
}
