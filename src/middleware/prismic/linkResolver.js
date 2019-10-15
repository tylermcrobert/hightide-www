/**
 * This is to generate links to documents within this website.
 *
 * Since routing is specific to site, this tells links and preview
 * things where to point links to.
 */

export const linkResolver = ({ uid, type }) => {
  if (type === 'work') {
    return `/work/${uid}`
  }
  if (type === 'journal') {
    return `/journal/${uid}`
  }
  if (type === 'sound_system') {
    return `/journal/sound-system/${uid}`
  }
  return '/'
}
