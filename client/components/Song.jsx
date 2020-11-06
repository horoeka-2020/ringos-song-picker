
import React from 'react'

import { Router, Link } from 'react-router-dom'

import music from '../../data/beatles'

const Song = (props) => {
    console.log(props)

    const selectedSong = music.songs.find((data) => data.id === Number(props.match.params.songID))
    console.log(selectedSong)
    return (
        <div className="individual-song">
            <div className="song-card">

            <h2>{selectedSong.songName}</h2>
            <img className="album-large" src={selectedSong.image} />
            <p>Title: {selectedSong.songName}</p>
            <p>Album: {selectedSong.albumName}</p>
            <p>Year: {selectedSong.year}</p>
            <div className="video">
            <iframe className="video" width="200" height="150" src={selectedSong.audio} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    )
}

export default Song