import axios from 'axios'

const pipediveUrl = `${process.env.PIPEDRIVE_ENDPOINT}?api_token=${process.env.PIPEDRIVE_TOKEN}`

export default (req, res) => {
  axios
    .post(pipediveUrl, req.body)
    .then(pdRes => {
      res.status(200).json(pdRes.data)
    })
    .catch(err => {
      res.status(err.request.res.statusCode).json(err.response.data)
    })
}
