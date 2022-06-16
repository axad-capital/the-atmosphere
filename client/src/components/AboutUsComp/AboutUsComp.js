import React from 'react'
import './aboutUsComp.css'
import { Link } from 'react-router-dom';
// import LightLogo from './light-logo.JPG'

const AboutUsComp = () => {
    return (
        <div className='about-bg'>
            <div className='about-container'>
                <div className='about-top'>
                    <h1>One Of New York City's Most Daring Social Clubs</h1>
                    <br />

                    <p>The Atmosphere corporation was founded in 2022 by a collective of like-minded people who share & strive for the same goals in life. We are a private members-only society specializing in providing a safe and well-curated environment for the pursuit of happiness and erotic freedom.</p>

                    <p>It is with great pride that we serve our audience the best social and entertainment experience New York City has to offer.</p>

                    <br />

                    <p className='orbit-text'>Your're in our Orbit, you breathe our Atmosphere</p>
                </div>

                <div className="line2"></div>
                <div className="hay-about-container">
                    <img src='https://res.cloudinary.com/dtodsxdoy/image/upload/v1655419483/aboutus-gif_q7ipo4.gif' alt="logo" className="hay-about-img" />
                </div>
                <div className="line2"></div>
                <br />

                <div className='about-top'>
                    <h1>Admittance by Application Only</h1>

                    <br />
                    <p>Event options are available only to approved applicants. To gain entry into Atmosphere, one must apply. An application is required for any single or a couple that wants to attend an event.</p>

                    <p>Applications are a way for us to get to know our guests, and also to ensure every Atmosphere event is a well-crafted evening with a meticulously curated guest list. One of the most important things our community has to offer is the contribution of our members. We screen for aesthetics, profession, status, and education. </p>
                </div>
                <br />

                <div className='about-bottom'>
                    <p>Atmosphere is always supportive of adventurous and intriguing men and women — they can attend without purchase if they are accepted to our limited guest list. To be added to our guest list, <a style={{ color: 'goldenrod' }} href="mailto:victor@atmoshperecorp.com">Contact us </a> and tell us why.</p>
                    <p>We encourage all who seek admittance to explore the <Link to='/gallery' style={{ color: 'goldenrod' }}>Gallery</Link> section.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsComp