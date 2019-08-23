function getApi(inputApi) {
  if (typeof window !== 'undefined' && window.__API_DATA__) {
    const windowData = window.__API_DATA__
    return windowData
  }
  return inputApi
}

export default getApi
