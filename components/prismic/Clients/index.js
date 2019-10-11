import React from 'react'
import Section from 'components/Section'
import PropTypes from 'prop-types'
import Marquee from 'components/Marquee'
import SectionHead from 'components/SectionHead'
import Link from 'next/link'
import Styled from './Styled'

const SPEED = 1.2
function Clients({ items }) {
  if (items && items.length) {
    return (
      <Section>
        <>
          <SectionHead line>Clients</SectionHead>
          <Marquee speed={items.length * SPEED}>
            <Styled.Grid>
              {items.map((item, i) => (
                <Image
                  logo={item.logo.url}
                  uid={item.link_to_project.uid}
                  key={i}
                />
              ))}
            </Styled.Grid>
          </Marquee>
        </>
      </Section>
    )
  }
  return null
}

Clients.propTypes = {
  items: PropTypes.array.isRequired,
}

const Image = ({ logo, uid }) => {
  if (logo) {
    const image = <img src={logo} alt="" />

    return uid ? (
      <Link href="/work/[uid]" as={`/work/${uid}/`}>
        <a>{image}</a>
      </Link>
    ) : (
      image
    )
  }
  return null
}

Image.defaultProps = {
  uid: null,
}

Image.propTypes = {
  logo: PropTypes.string.isRequired,
  uid: PropTypes.string,
}
export default Clients
