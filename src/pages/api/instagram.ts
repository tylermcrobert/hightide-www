// https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables=%7B%22id%22%3A%22516151050%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFDNDZSay1YeHJOM1lUVUstX3JvVFZ6X0hvcGo3Q2xZMXZxY0RTdnc1ZlZxSTJPeVhkQldCZk1UM3NFbXJ4NXdRRWs2eFAzcTRPZVk4V2drcXQwOVRYMQ%3D%3D%22%7D

import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

const VARIABLES = JSON.stringify({
  id: '516151050',
  first: 3,
})

const ENDPOINT = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables=${VARIABLES}`

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await fetch(ENDPOINT).then(endpointRes => endpointRes.json())

  res.json(
    data.data.user.edge_owner_to_timeline_media.edges.map(
      edge => edge.node.display_resources[1].src
    )
  )
}
