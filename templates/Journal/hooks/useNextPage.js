import { useState, useRef } from 'react'
import Prismic from 'prismic-javascript'
import { fetchOptions } from 'pages/journal'

const apiEndpoint = process.env.PRISMIC_ENDPOINT
const accessToken = process.env.PRISMIC_ACCESS_TOKEN
const client = Prismic.client(apiEndpoint, { accessToken })

export default function useNextPage(totalPages) {
  const currentPage = useRef(1)
  const [loading, setLoading] = useState(false)
  const [additionalPages, setAdditionalPages] = useState([])

  const isEnd = currentPage.current >= totalPages

  const getNextPage = () => {
    function requestPage() {
      setLoading(true)

      const fetchEntries = client.query(
        Prismic.Predicates.at('document.type', 'journal'),
        {
          ...fetchOptions,
          page: currentPage.current,
        }
      )

      fetchEntries
        .then(data => {
          setLoading(false)
          setAdditionalPages([...additionalPages, ...data.results])
        })
        .catch(err => {
          console.error(err)
        })
    }

    if (!isEnd) {
      currentPage.current += 1
      requestPage()
    }
  }

  return { getNextPage, additionalPages, loading, isEnd }
}
