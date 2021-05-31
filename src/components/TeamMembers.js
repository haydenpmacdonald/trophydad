import React from 'react'
import '../styles/TeamMembers.css';
import cardfiller from '../cardfiller'

const TeamMembers = () => {
    return (
        <div className="img-grid">
      {cardfiller.map(filler => (
        <div className="img-wrap" >
            <div className='team--image--overlay'>
            <img src={filler.image} alt={filler.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
            <div className='overlay--text'>
                <h2 className='overlay--name'>{filler.name}</h2>
                <h2 className='overlay--name'>{filler.instrument}</h2>
                <p><i className="fab fa-instagram"></i> &nbsp;{filler.description}</p>
            </div>
            
            </div>
        </div>
      ))}
    </div>
    )
}

export default TeamMembers
