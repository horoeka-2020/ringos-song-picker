import React from 'react'
import Button from '@material-ui/core/Button';

import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <>
      <Button variant ="contained" color="primary">MATERIAL UI! LESHHGOOO</Button>
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
