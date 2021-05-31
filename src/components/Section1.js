import React from 'react'
import '../styles/Section1.css';
import ReactPlayer from 'react-player'



const Section1 = () => {
    return (
        <div className='section--1'>
            <div className='section--1--big--text'>
                <h1 className='gradient--text'>If Friday was a band, it would be Trophy Dad.</h1>
                <hr></hr>
                <hr></hr>
            </div>
            <div className='video--container'>
                <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=q5rrugFUNhg' alt='pretty girls video' />
                <h1 className='gradient--text'>Pretty Girls</h1>
                <hr></hr>
                <hr></hr>
            </div>
            
               
           
        </div>
    )
}

export default Section1