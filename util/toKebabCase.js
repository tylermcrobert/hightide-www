const toKebabCase = string => {
  return string.replace(/\s+/g, '-').toLowerCase()
}

export default toKebabCase
