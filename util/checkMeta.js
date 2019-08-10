export default function checkMeta() {
  const noTitle = document.title === undefined
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev && noTitle) {
    throw new Error('Please include <Meta /> component.')
  }
}
