import React from 'react'

import { Router, Link } from 'react-router-dom'

import music from '../../data/beatles'

const Song = (props) => {
    const filterSongs = music.songs.filter((data) => data.mood == 'sad')
    const single = filterSongs[0]

    const song = props.match.params.songName
    console.log(song)

    // console.log(single)
    return (
        <div>
            <h2>Songs</h2>
            <img width="300" height="300" src={single.image} />
            <p>Title: {single.songName}</p>
            <p>Album: {single.albumName}</p>
            <p>Year: {single.year}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TZip_br_v3w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Song