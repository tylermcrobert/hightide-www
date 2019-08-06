import React, { createContext } from 'react'
import Layout from '../Layout/index'
import Homepage from 'pages/Homepage'
import useApiData from './hooks/useApiData'

export const AppCtx = createContext()

function App() {
  const data = useApiData()

  if (data) {
    return (
      <AppCtx.Provider value={data}>
        <Layout>
          <Homepage />

          {/* <JournalPage data={data.journal.results[10]} /> */}
        </Layout>
      </AppCtx.Provider>
    )
  }
  return <div>loading...</div>
}

// App.propTypes = {}

export default App
