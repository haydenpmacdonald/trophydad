import React from 'react'
import '../styles/ContactForm.css';

const ContactForm = () => {
    return (
       <div>
           
  
            <div className='contact--form--hero'>
            <h1 className='gradient--text'>Contact Info</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className='contact--form--box'>
                <h2><a className='a--tag--contact' href='https://www.facebook.com/TrophyDadMusic'>facebook.com/TrophyDadMusic <i className="fab fa-facebook-square "></i></a></h2>
                <h2><a className='a--tag--contact' href='https://www.instagram.com/trophydadmusic/'>instagram.com/trophydadmusic <i className="fab fa-instagram"></i></a></h2>
                <h2><a className='a--tag--contact' href='https://twitter.com/TrophyDadMusic'>twitter.com/TrophyDadMusic <i className="fab fa-twitter"></i></a></h2>
                <h2><a className='a--tag--contact' href='/'>nevrock91@icloud.com <i className="far fa-envelope"></i></a></h2>
            </div>
           


        </div>
       </div>
    )
}

export default ContactForm
