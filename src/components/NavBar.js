import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        
        <>

            <nav >
                <div className="navbar-container">
                    <ul>
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <img src='images/trophydadlogo.jpeg' className='navbar-logo' alt='dsdf'></img>
                        </Link>
                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times-circle' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link to="/video" className="nav-links" onClick={closeMobileMenu}>
                                Videos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                                The Band
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        

                    </ul>
               
                </div>
            </nav>
            
              
        </>
    )
}

export default NavBar