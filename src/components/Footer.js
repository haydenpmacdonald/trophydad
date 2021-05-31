import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer--container'>
            <h3 className='footer--header'>TROPHY DAD MUSIC</h3>
            <h5 className='footer--header'>Tire Fire Entertainment 2021</h5>
            <div>
                <Link to="/" className="footer-links" >
                    Home
                </Link>  

                <Link to="/about" className="footer-links" >
                    About
                </Link>
                <Link to="/video" className="footer-links" >
                    Videos
                </Link>
                      
                <Link to="/team" className="footer-links" >
                    The Band
                </Link>
                      
                <Link to="/contact" className="footer-links" >
                    Contact
                </Link>
            </div>
             
                          
                                 

                  
            <h2 className='social--logos'><a href='https://www.instagram.com/trophydadmusic/'><i className="fab fa-instagram"></i></a></h2>
            <h2 className='social--logos'><a href='https://www.facebook.com/TrophyDadMusic/'><i className="fab fa-facebook-square"></i></a></h2>
            <h2 className='social--logos'><a href='https://open.spotify.com/track/0oPQeV3HmOftmJUEsp1qb3?si=sZCRPT71SquRhC8cSusXXA'><i className="fab fa-spotify"></i></a></h2>
            <h2 className='social--logos'><a href='https://music.apple.com/us/album/rock-n-roll-love-songs-ep/1529747082'><i className="fab fa-apple"></i></a></h2>
            <h2 className='social--logos'><a href='https://twitter.com/trophydadmusic?lang=en'><i className="fab fa-twitter"></i></a></h2>
            <h2 className='social--logos'><a href='https://www.youtube.com/channel/UCv8k2iuekqucH-KTZ_6SpHg'><i className="fab fa-youtube"></i></a></h2>
           
            
        </div>
    )
}

export default Footer
