import React from 'react'

// Import Link and Route
import { Route, Link } from 'react-router-dom'
import Song from '../components/Song'


// Import music from data file
import music from '../../data/beatles.js'

// console.log(music)
// console.log(music.songs.map(data => data))

// Probably should move to 'Home' component
// Create variable to filter over songs and return object based on mood
const filterSongs = music.songs.filter((data) => data.mood === 'sad')
// console.log(filterSongs)

// console.log(filterSongs.map(data => data.songName))
// console.log(randomSong(filterSongs))



const Playlist = (props) => {
  const mood = props.match.params.mood
  // console.log(props.match.params.mood)

  // console.log(music.songs.filter((data) => data.mood === mood))
  // const songName = props..replace(/[^A-Z0-9]/ig, "");


  const moodFilter = music.songs.filter((data) => data.mood === mood)
  // console.log(moodFilter.map(data => data.songName))
  // const songName = data.songName.replace(/[^A-Z0-9]/ig, "")
  return (
    <div className="background">
      <h2 className="playlist">Playlist</h2>
            {moodFilter.map(data => 
            <div className='card-content'>
              <h2></h2>
            <Link to={`/${data.id}`}>{data.songName}</Link>
              <div className="card-image">
              <img className='album' src={data.image}/>
              </div>
              <div className="card-text">
              <h2 className='song-title'>{data.songName}</h2>
              <h4></h4>
              </div>
            </div>
              )}
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