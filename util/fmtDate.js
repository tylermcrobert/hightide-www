export default function fmtDate(date) {
  const m = date.getMonth() + 1
  const d = date.getDate()
  const y = date.getFullYear()

  const pad = num => num.toString().padStart(2, 0)

  return `${pad(m)}.${pad(d)}.${pad(y)}`
}
