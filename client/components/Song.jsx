import React from 'react'

import { Router, Link } from 'react-router-dom'

import music from '../../data/beatles'

const Song = (props) => {
    console.log(props)

    const selectedSong = music.songs.find((data) => data.id === Number(props.match.params.songID))
    console.log(selectedSong)
    return (
        <div className="individual-song">
            <h2>Songs</h2>
            <img width="300" height="300" src={selectedSong.image} />
            <p>Title: {selectedSong.songName}</p>
            <p>Album: {selectedSong.albumName}</p>
            <p>Year: {selectedSong.year}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TZip_br_v3w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Song