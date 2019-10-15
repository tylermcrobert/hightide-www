import { title } from 'site.config'

export default function formatTitle(str) {
  return str ? `${str} - ${title}` : title
}
