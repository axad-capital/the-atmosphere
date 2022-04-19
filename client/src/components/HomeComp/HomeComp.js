import React from 'react'
import './homeComp.css'
import Hay from './Haley.jpg'
import Logo from './logo-dark.JPG'

const HomeComp = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className='home-header-container'>
        <div className='logo-home-container'>
          <img className='logo-home' src={Logo} alt="logo" />
        </div>
        <h1 className='header-title'>AN AGENCY FOR THE <span className='daring'>DARING</span> AND <span className='soph'>SOPHISTICATED</span></h1>
        <div className="line"></div>
        <br />
        <p className='header-sub-title'>THE ATMOSPHERE CREATIVE SPECIALIZES IN PROVIDING YOU WITH NEW YORK CITY'S TOP SPECIALTY PERFORMERS, MODELS, AND EVENT PRODUCTION. </p>
        <br />
        <div className="line"></div>
      </div>

      <div className='home-info-contianer'>
        <div className='home-img-container'>
          <img className='home-img' src={Hay} alt="model" />
        </div>
        <div className='home-info'>
          <p className='home-info-text'><span className='exper'>WITH OVER 10 YEARS OF COMBINED EXPERIENCE</span> IN NIGHTLIFE STRATEGY, ENTERTAINMENT RELATIONS, AND EXPERIENTIAL OCCASIONS, WE STRIVE IN CATERING TO OUR ADVENTUROUS CLIENTS WITH THE BEST SERVICES POSSIBLE. CONTACT US AT ____________ TO INQUIRE. </p>
        </div>

      </div>
    </div>
  )
}

export default HomeComp