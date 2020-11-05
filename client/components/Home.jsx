import React from 'react'
import { Link } from 'react-router-dom'
import Playlist from './Playlist'

const Home = (props) => {
  return (
    
    <>
    {/* {console.log(props.match.params)} */}

    <div className="banner-area center">
      <h1> What's the mood?</h1>
        <Link to={`/playlist/happy`}><a className="border-button center">Happy</a></Link>
        <Link to={`/playlist/sad`}><a className="border-button center">Sad</a></Link>
    </div>
    </>
    
    
 
  )
}

export default Home


{/* <div className="box-area">
      
<header>
  <div className="wrapper">
    <div className="logo">
      <a href="https://fontmeme.com/the-beatles-font/"><img src="https://fontmeme.com/permalink/201105/9ca11cf7f585fc322ac101c0a99239e9.png" alt="the-beatles-font" border="0"/></a>
    </div>

    <nav>
      <a href="#">About</a>
    </nav>
  </div>
</header>

<div className="banner-area">
  <h1 style="font-size:7vmax"> What's the mood?</h1>
     <a className="border-button" href="#">Happy</a>
</div>
</div> */}