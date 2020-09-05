const replaceAt = (string, index, replacement) =>
  string.substr(0, index) + replacement + string.substr(index + 1)

const OrphanRemover = ({ children }) => {
  if (typeof children === 'string' && children.includes(' ')) {
    const index = children.lastIndexOf(' ')
    const nbsp = '\xa0'
    return replaceAt(children, index, nbsp)
  }
  return children
}

export default OrphanRemover
