const toUrlFormat = (tag: string): string => {
  return tag.replace(' ', '-').toLowerCase()
}

export default toUrlFormat
