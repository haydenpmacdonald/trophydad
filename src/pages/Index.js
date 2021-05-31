import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import AlbumComponent from '../components/AlbumComponent';
import Footer from '../components/Footer';


const Index = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Section1 />
            <AlbumComponent />
            <Section2 />
            <Footer />
        </div>
    )
}

export default Index
