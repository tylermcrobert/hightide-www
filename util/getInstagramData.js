import fetch from 'isomorphic-unfetch'

export default async function getInstagramData(count = 3) {
  const endpoint = process.env.INSTAGRAM_ENDPOINT
  const key = process.env.INSTAGRAM_TOKEN

  const apiData = await fetch(
    `${endpoint}?access_token=${key}&count=${count}`
  ).then(res => res.json())

  return apiData
}
