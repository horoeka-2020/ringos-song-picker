import React from 'react'

import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <>
      <h1>Ringo's Song Selector</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
