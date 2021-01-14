import fetch from 'isomorphic-unfetch'

export default async function getInstagramData(): Promise<string[]> {
  const dev = process.env.NODE_ENV !== 'production'
  const server = dev ? 'http://localhost:5000' : 'https://hightidenyc.com'
  const res = await fetch(`${server}/api/instagram`)
  return res.json()
}
