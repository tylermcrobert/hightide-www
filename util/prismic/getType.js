import Prismic from 'prismic-javascript'
import { Client } from './Client'

export const getType = async (req, type, options) => {
  return Client(req).query(
    Prismic.Predicates.at('document.type', type),
    options
  )
}
