import React from 'react'


// Import music from data file
import music from '../../data/beatles.js'

console.log(music)

// Probably should move to 'Home' component
// Create variable to filter over songs and return object based on mood
const filterSongs = music.songs.filter((data) => data.mood === 'sad')
console.log(filterSongs)
// console.log(filterSongs.map(data => data.songName))


// // Random functionality
// const randomSong = function (obj) {
//   var keys = Object.keys(obj);
//   console.log(keys)
//   return obj[keys[keys.length * Math.random() << 0]];
// };

// console.log(randomSong(filterSongs))

const Playlist = () => {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        <li>{[filterSongs]}</li>
      </ul>
    </div>
  )
}

export default Playlist
