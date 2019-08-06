import React, { createContext } from 'react'
import Layout from '../Layout/index'
import Homepage from 'pages/Homepage'
import JournalPage from 'pages/JournalPage'
import useApiData from './hooks/useApiData'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
export const AppCtx = createContext()

function App() {
  const data = useApiData()

  if (data) {
    return (
      <AppCtx.Provider value={data}>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route
                path="/journal/:i"
                render={({ match }) => (
                  <JournalPage
                    data={data.journal.results[parseInt(match.params.i)]}
                  />
                )}
              />
              <Route path="/" render={() => <Homepage />} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </AppCtx.Provider>
    )
  }
  return <div>loading...</div>
}

// App.propTypes = {}

export default App
