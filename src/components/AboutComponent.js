import React from 'react'
import '../styles/AboutComponent.css';

const AboutComponent = () => {
    return (

        <div className='about--component--container'>
            <h1 className='gradient--text'>How it all started</h1>
            <div className='about--component--section'>
                <div className='about--component--overlay'>
                    <p className='about--component--paragraph'>
                        Trophy Dad started off as Nevil Meyer and Reggie Bast's two man cover band of their own band "One Night Stand" but took off a life of its own due to their natural chemistry on and off stage, 
                        shortly after One Night Stand broke up and Trophy dad became their main project they added Deriek Simon the frontman of "Spaceboots" to play the drums and slid Reggie over to the bass.
                    </p>
                    <p className='about--component--paragraph'>
                        Later on rounding out their sound with the addition of Chris Eriksen of “Mad Mona” & his solo project “Skov.” these super friends have become more of a super group.
                    </p>
                    <p className='about--component--paragraph'>
                        After suffering through numerous hardships and tragedy Nevil and Deriek found that playing high energy 
                        rock & roll shows was the closest to therapy that they could afford, 
                        so they took gigs anywhere from festivals to private events while 
                        stablishing themselves as a prominent party rock and roll band.
                    </p> 
                    {/* <Link to="/team" className="footer-links" >
                        <button className='hero--button'>BOOK THE BAND</button>
                    </Link> */}
                    
                </div>
            </div>
        </div>

    )
}

export default AboutComponent
