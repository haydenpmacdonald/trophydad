import React from 'react';
import '../styles/VideoHero.css';

const VideoHero = () => {
    return (
        <>
            <div className='disc--section'>
                <div className='disc--overlay'>
                    <h1>VIDEOS</h1>
                    <div className="disc--modal">
                        <h2 className='social--logos'><a href='https://www.instagram.com/trophydadmusic/'><i className="fab fa-instagram"></i></a></h2>
                        <h2 className='social--logos'><a href='https://www.facebook.com/TrophyDadMusic/'><i className="fab fa-facebook-square"></i></a></h2>
                        <h2 className='social--logos'><a href='https://open.spotify.com/track/0oPQeV3HmOftmJUEsp1qb3?si=sZCRPT71SquRhC8cSusXXA'><i className="fab fa-spotify"></i></a></h2>
                        <h2 className='social--logos'><a href='https://music.apple.com/us/album/rock-n-roll-love-songs-ep/1529747082'><i className="fab fa-apple"></i></a></h2>
                        <h2 className='social--logos'><a href='https://twitter.com/trophydadmusic?lang=en'><i className="fab fa-twitter"></i></a></h2>
                        <h2 className='social--logos'><a href='https://www.youtube.com/channel/UCv8k2iuekqucH-KTZ_6SpHg'><i className="fab fa-youtube"></i></a></h2>
                    </div>            
                </div>
            </div>
        </>
    )
}

export default VideoHero
