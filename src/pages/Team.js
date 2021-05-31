import React from 'react'
import NavBar from '../components/NavBar';
import TeamHero from '../components/TeamHero';
import TeamMembers from '../components/TeamMembers';
import Footer from '../components/Footer';

const Team = () => {
    return (
        <div>
           <NavBar />
           <TeamHero /> 
           <TeamMembers />
           <Footer />
        </div>
    )
}

export default Team
