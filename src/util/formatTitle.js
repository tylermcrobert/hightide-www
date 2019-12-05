import { title } from 'siteconfig'

export default function formatTitle(str) {
  return str ? `${str} - ${title}` : title
}
