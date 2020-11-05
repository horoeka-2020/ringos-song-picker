import React from 'react'

import { Router, Link } from 'react-router-dom'

import music from '../../data/beatles'

const Song = (props) => {
    const filterSongs = music.songs.filter((data) => data.mood == 'sad')
    const single = filterSongs[0]

    console.log(single)
    return (
        <div>
            <h2>Songs</h2>
            <img src='' />
            <p>Title: {single.songName}</p>
            <p>Album: {single.albumName}</p>
            <p>Year: {single.year}</p>
            <p>Link to Audio</p>
        </div>
    )
}

export default Song