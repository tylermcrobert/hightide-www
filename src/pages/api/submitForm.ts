import axios from 'axios'

const pipediveUrl = `${process.env.PIPEDRIVE_ENDPOINT}?api_token=${process.env.PIPEDRIVE_TOKEN}`

export default (req, res) => {
  axios
    .post(pipediveUrl, { name: 'testingform' })
    .then(pdRes => {
      res.status(200).json(pdRes.data)
    })
    .catch(err => {
      console.log(err)

      res.status(500).json(err.response.data)
    })
}
