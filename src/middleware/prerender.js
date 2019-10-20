export default function SPR(res) {
  if (res) {
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  }
}
