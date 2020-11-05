import React from 'react'
import { Route } from 'react-router-dom'

import Playlist from './Playlist'
import Home from './Home'
import Song from './Song'

const App = () => {
  return (
    <>
      <h1>Ringo's Song Selector</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/playlist/:mood' component={Playlist} />
        <Route path='/playlist/:mood/:songName' component={Song} />
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}

export default App
