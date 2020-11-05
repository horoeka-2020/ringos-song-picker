import React from 'react'

// Import Link and Route
// Import Link and Route
import { Route, Link } from 'react-router-dom'


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

const Playlist = (props) => {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
      {filterSongs.map((data) => {
        return <li key={data.songName}>
          {/* <Link to={`/song/${props.match.params.song}/${data.songName}`}>{data}</Link> */}
          {data}
        </li>
      })}
      </ul>
    </div>
  )
}

export default Playlist
