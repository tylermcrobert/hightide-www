import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const StoreCtx = createContext()

const StoreProvider = ({ children, checkout }) => {
  const [storeCount, updateStoreCount] = useState(0)
  return (
    <StoreCtx.Provider value={{ checkout, storeCount, updateStoreCount }}>
      {children}
    </StoreCtx.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.any.isRequired,
  checkout: PropTypes.object.isRequired,
}

export default StoreProvider
