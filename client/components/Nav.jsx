import React from 'react'


// Import music from data file
import music from '../../data/beatles.js'

console.log(music)

// Probably should move to 'Home' component
// Create variable to filter over songs and return object based on mood
const filterSongs = music.songs.filter((data) => data.mood === 'sad')
console.log(filterSongs)



const Nav = () => {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>Build your ranks list here</li>
      </ul>
    </div>
  )
}

export default Nav
