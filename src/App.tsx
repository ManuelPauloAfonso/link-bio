import React, { useState } from 'react'
import Home from './pages/home'
import { GlobalStyle } from './style/global'


function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  )
}

export default App
