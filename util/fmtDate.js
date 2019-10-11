import pad from './pad'

export default function fmtDate(date) {
  const m = date.getMonth() + 1
  const d = date.getDate()
  const y = date.getFullYear()

  return `${pad(m)}.${pad(d)}.${pad(y)}`
}
