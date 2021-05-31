import React from 'react'
import '../styles/Section2.css';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <div>
            <div className='section--2--hero--image'>
                <div className='section--2--overlay'>
                    <div className='section--2--overlay--text'>
                        <h1>The Band</h1>
                        <h2>Proving the tough times don’t last but the people do, these good time rock and rollers can put any broken heart back together in 4 chords or less.</h2>
                        <Link to="/team" className="footer-links" >
                            <button className='hero--button'>MEET THE BAND</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
