import React from 'react'
import './homeComp.css'
import Logo from './gold-logo.png'
import Hay from './Haley.jpg'
// import BGImg from './home-gif-3.gif'
import BGImg from './home-gif-3.gif'

const HomeComp = () => {
  return (
    <div className='home-page-content'>

      <div className="header-container">

        <div className="header-wrapper">
          <div className="header">
            <h1 className='header-title'>AN AGENCY FOR THE <span className='gold'>DARING</span> AND <span className='gold'>SOPHISTICATED</span></h1>
          </div>
          <div className="header-img-container">
            <img className="header-img" src={Logo} alt="logo" />
            <img className="headerBG-img" src={BGImg} alt="background" />
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
          <p className='sub-heading-title'>EXPECT THE UNEXPECTED</p>
          <div className="line"></div>
          <br />
          <p className='sub-heading-text'>WITH OVER 10 YEARS OF COMBINED EXPERIENCE IN NIGHTLIFE STRATEGY, ENTERTAINMENT RELATIONS, AND EXPERIENTIAL OCCASIONS, WE STRIVE IN CATERING TO OUR ADVENTUROUS CLIENTS WITH THE BEST SERVICES POSSIBLE. <span className='gold'>CONTACT</span> US AT <a className='victor-email' href="mailto:Victor@Atmospherecorp.com">Victor@Atmospherecorp.com</a> TO INQUIRE WITHIN.</p>
          {/* <div className="line"></div> */}
        </div>
        <div className='hay-img-container'>
          <img className='hay-img' src={Hay} alt="model" />
        </div>
      </div>

    </div>
  )
}

export default HomeComp