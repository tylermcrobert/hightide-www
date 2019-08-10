const isDev = process.env.NODE_ENV === 'development'

export default function checkMeta() {
  console.log({ isDev })
}
