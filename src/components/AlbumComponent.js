import React from 'react'
import '../styles/AlbumComponent.css';

const AlbumComponent = () => {
    return (
        <div className='album--container'>
            <img src='images/love-songs-album.png' alt='sdff' className='album--image'></img>
            <br></br>
            <br></br>
            <div className='album--container--text'>
                <h2>check out the latest album</h2>
                <h2 className='social--logos'><a href='https://open.spotify.com/track/0oPQeV3HmOftmJUEsp1qb3?si=sZCRPT71SquRhC8cSusXXA'><i className="fab fa-spotify fa-2x"></i></a></h2>
                <h2 className='social--logos'><a href='https://music.apple.com/us/album/rock-n-roll-love-songs-ep/1529747082'><i className="fab fa-apple fa-2x"></i></a></h2>
                <p>The band has just released their first EP  “Rock ‘N’ Roll Love Songs” featuring their first single “Pretty Girls Cause Car Accidents” and the follow up “Fuddle Duddle” paired nicely with their light hearted music videos and promotional skits. </p> 
                <p>Trophy Dad is here for your good and bad days, aiming to get you through the work week and get your weekend started.</p>
            </div>
            
            
        </div>
    )
}

export default AlbumComponent
