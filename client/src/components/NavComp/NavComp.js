import React from 'react'
import './navComp.css';
import { Link, useLocation } from 'react-router-dom';
import NavLogo from '../HomeComp/gold-logo.png'

const NavComp = () => {

    const location = useLocation()

    return (
        <div>
            <nav id='bg-dark' className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img className='logo' src={NavLogo} alt="Atmosphere" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/entertainment' className={location.pathname === '/entertainment' ? 'nav-link active' : 'nav-link'}>Entertainment</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to='/agency' className={location.pathname === '/agency' ? 'nav-link active' : 'nav-link'}>Agency</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/event' className={location.pathname === '/event' ? 'nav-link active' : 'nav-link'}>Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/gallery' className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}>Gallery</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/apply' className={location.pathname === '/apply' ? 'nav-link active' : 'nav-link'}>Apply</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/about-us' className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComp