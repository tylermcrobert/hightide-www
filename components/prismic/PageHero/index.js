import Section from 'components/Section'
import { RichText } from 'prismic-reactjs'
import PropTypes from 'prop-types'

export default function PageHero({ text }) {
  if (text && text.length) {
    return <Section>{RichText.render(text)}</Section>
  }
  return null
}

PageHero.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object).isRequired,
}
