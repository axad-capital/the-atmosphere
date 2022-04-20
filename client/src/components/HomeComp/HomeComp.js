import React from 'react'
import './homeComp.css'
import Logo from './logo-noBG.png'
import Hay from './Haley.jpg'

const HomeComp = () => {
  return (
    <div className='home-page-content'>

      <div className="header-container">
        <div className="header-wrapper">
          <div className="header">
            <h1 className='header-title'>AN AGENCY FOR THE <span className='gold'>DARING</span> AND <span className='blue'>SOPHISTICATED</span></h1>
          </div>
          <div className="header-img-container">
            <img className="header-img" src={Logo} alt="logo" />
          </div>
        </div>
        <div className='header-sub-title'>
          <p className='sub-title'>THE ATMOSPHERE CREATIVE SPECIALIZES IN PROVIDING YOU WITH NEW YORK CITY'S TOP SPECIALTY PERFORMERS, MODELS, AND EVENT PRODUCTION.</p>
        </div>
      </div>

      <div className='sub-heading-container'>
        <div className='sub-heading'>
        <div className="line"></div>
        <br />
          <p className='sub-heading-title'>THE BEST AT WHAT WE DO</p>
          <div className="line"></div>
          <br />
          <p className='sub-heading-text'>WITH OVER 10 YEARS OF COMBINED EXPERIENCE IN NIGHTLIFE STRATEGY, ENTERTAINMENT RELATIONS, AND EXPERIENTIAL OCCASIONS, WE STRIVE IN CATERING TO OUR ADVENTUROUS CLIENTS WITH THE BEST SERVICES POSSIBLE. CONTACT US AT ____________ TO INQUIRE.</p>
        <div className="line"></div>
        </div>
        <div className='hay-img-container'>
          <img className='hay-img' src={Hay} alt="model" />
        </div>
      </div>

    </div>
  )
}

export default HomeComp