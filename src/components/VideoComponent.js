import React from 'react'
import videocontent from '../videocontent'
import '../styles/VideoComponent.css';
import ReactPlayer from 'react-player'

const VideoComponent = () => {
    return (
        <div className='video--card--container'>
            <div className='video--card--header'>
                <a href='https://www.youtube.com/channel/UCv8k2iuekqucH-KTZ_6SpHg'>
                    <h2>visit the YouTube channel now <i className="fab fa-youtube"></i></h2>
                </a>
            </div>
            
            {videocontent.map(vid => (
                <div className='video--card'>
                    <h1 className='gradient--text--video'>{vid.title}</h1>
                    <ReactPlayer width='100%' url={vid.video} />
                </div>
            ))}
            
        </div>
    )
}

export default VideoComponent
