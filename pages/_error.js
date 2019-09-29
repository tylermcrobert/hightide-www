import React from 'react'
import ErrorTemplate from 'templates/Error'

function Error({ statusCode }) {
  return (
    <>
      <ErrorTemplate statusCode={statusCode} />
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const renderErr = err ? err.statusCode : null
  const statusCode = res ? res.statusCode : renderErr
  return { statusCode, err }
}

export default Error
