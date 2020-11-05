import React from 'react'

// Import Link and Route
import { Route, Link } from 'react-router-dom'


// Import music from data file
import music from '../../data/beatles.js'

console.log(music)
console.log(music.songs.map(data => data))

// Probably should move to 'Home' component
// Create variable to filter over songs and return object based on mood
const filterSongs = music.songs.filter((data) => data.mood === 'sad')
console.log(filterSongs)

// console.log(filterSongs.map(data => data.songName))
// console.log(randomSong(filterSongs))



const Playlist = (props) => {
  const mood = props.match.params.mood
  console.log(props.match.params.mood)

  console.log(music.songs.filter((data) => data.mood === mood))

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        <li>
          {music.songs.filter((data) => data.mood === mood)}
          </li>
        </ul>
    </div>
  )
}

export default Playlist

{filterSongs.map((data) => {
  return <li key={data.songName}>
    {/* <Link to={`/song/${props.match.params.song}/${data.songName}`}>{data}</Link> */}
    {data}
  </li>
})}

// // Random functionality
// const randomSong = function (obj) {
//   var keys = Object.keys(obj);
//   console.log(keys)
//   return obj[keys[keys.length * Math.random() << 0]];
// };