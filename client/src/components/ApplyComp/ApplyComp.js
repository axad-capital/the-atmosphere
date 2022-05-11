import React from 'react'
import './applyComp.css'
import Troph from './apply-trophy.png'

const ApplyComp = () => {
    return (
        <div>
            <div className="header-cotnainer">
                <div className='title-container'>
                    <h1>Apply to Attend SNCTM</h1>
                    <h3>Admittance Is Granted Solely By Application.</h3>
                </div>
                <div className='title-img-container'>
                    <img className='title-img' src={Troph} alt="" />
                </div>
            </div>

            <div className="sub-text-container">
                <p>To attend SNCTM one must first apply. All submissions are confidential and reviewed solely by our Dominus Council for the purpose of maintaining the highest calibre of guests at our events. If an applicant meets Snctm's professional, reputational, and aesthetic criteria the applicant will be granted the status of Approved Non-Member and contacted directly.</p>
                <p>Such guests are permitted to purchase select Soirée tickets to coming events, as well as full Snctm Membership, which grants access to private events as well as privileges and perquisites not afforded to non-members.</p>
                <p><strong>An Aurum-level membership ($10,000 per annum) is required, at minimum, for any single gentleman to attend a Snctm event.</strong></p>
                <p>Snctm is always supportive of intelligent and intriguing women, they can attend without purchase if they are accepted to our lady's guest list.</p>
                <p>Clear, recent photos must be provided. Incomplete or inaccurate applications will not be considered.</p>
                <p>Applicant's requiring the greatest level of discretion may forego our application and be interviewed directly by Snctm, for a $500 fee. Please contact info@snctm.com to arrange.</p>
            </div>

            <div className="apply-form-container">
                <br />
                <h4>Applicant Information</h4>
                <br />
                <div className="name-email-container">
                    <div>
                        <label htmlFor="first">First Name</label>
                        <br />
                        <input type="text" name="first" id="first" placeholder='First Name' />
                        <br />
                        <br />

                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" name="email" id="email" placeholder='Email' />
                    </div>

                    <div>
                        <label htmlFor="last">Last Name</label>
                        <br />
                        <input type="text" name="last" id="last" placeholder='Last Name' />
                        <br />
                        <br />

                        <label htmlFor="phone">Mobile Phone</label>
                        <br />
                        <input type="number" name="number" id="number" placeholder='Mobile Number' />
                    </div>
                </div>
                <br />

                <div className='form-info'>
                    <div>
                        <label htmlFor="birth">Date Of Birth</label>
                        <br />
                        <input type="date" name="birth" id="birth" />
                        <br />
                        <br />

                        <label htmlFor="gender">Gender</label>
                        <br />
                        <select name="gender" id="gender">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="non-binary">Non-binary</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="employer">Employer/ Occupation</label>
                        <br />
                        <input type="text" name="employer" id="employer" placeholder='Employer/ Occupation' />
                        <br />
                        <br />

                        <label htmlFor="city">Which City Would You Attend?</label>
                        <br />
                        <select name="city" id="city">
                            <option value="anywhere">Anywhere In The World</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="new-york">New York</option>
                            <option value="miami">Miami</option>
                            <option value="san-francisco">San Francisco</option>
                            <option value="london">London</option>
                            <option value="moscow">Moscow</option>
                            <option value="kiev">Kiev</option>
                            <option value="paris">Paris</option>
                            <option value="amsterdam">Amstredam</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="attended">Have You Attended An Event With Us Before?</label>
                        <br />
                        <select name="attended" id="attended">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="fantasy">You See Your Fantasy Come To Life. What Does That Look Like?</label>
                        <br />
                        <textarea type="text" name="fantasy" id="fantasy" placeholder='My Fantasy' />
                        <br />
                        <br />

                        <label htmlFor="turn-on">What Turns You On The Most?</label>
                        <br />
                        <textarea type="text" name="turn-on" id="turn-on" placeholder='Turn-on' />
                        <br />
                        <br />

                        <label htmlFor="erotic-trait">If You Could Amplify An Erotic Trait Within Yourself, What Would It Be?</label>
                        <br />
                        <textarea type="text" name="erotic-trait" id="erotic-trait" placeholder='My Erotic-trait' />
                        <br />
                        <br />

                        <label htmlFor="contribute">What Will You Contribute To The Atmosphere?</label>
                        <br />
                        <textarea type="text" name="contribute" id="contribute" placeholder='My Contribution' />
                        <br />
                        <br />

                        <label htmlFor="other-clubs">Other Clubs or Affiliations</label>
                        <br />
                        <textarea type="text" name="other-clubs" id="other-clubs" placeholder='Clubs/Affiliations' />
                        <br />
                        <br />


                        <label htmlFor="member-ref">Member References</label>
                        <br />
                        <textarea type="text" name="member-ref" id="member-ref" placeholder='Member References' />
                        <br />
                        <br />


                        <label htmlFor="find-us">How Did You Find Us?</label>
                        <br />
                        <textarea type="text" name="find-us" id="find-us" placeholder='' />
                        <br />
                        <br />

                        <label htmlFor="comments">Comments Or Additional Information</label>
                        <br />
                        <textarea type="text" name="comments" id="comments" placeholder='' />
                        <br />
                        <br />

                        <p>Terms</p>
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">I Agree</label>

                        <div className="terms-container">
                            <div>
                                <p>The privacy and safety of The Atmosphere and our Guests is of paramount importance and confidentiality is required of all Members, Guests, Performers, Employees, and Officers.</p>
                                <p>To participate in any Snctm Event, you hereby agree as follows:</p>

                                <ul>
                                    <li>You will not disclose identifying information of any Snctm Member, Guest, Participant, Performer, Employee, or Officer to the media;</li>
                                    <li>You will not use or attempt to use photography or video recording at a Snctm Event;</li>
                                    <li>You will treat everyone with respect;</li>
                                    <li>You will ask before you touch;</li>
                                    <li>You will immediately notify Snctm Security or Staff if at any time you are aware or have reasonable cause to suspect that anyone's safety or ability to consent is at risk;</li>
                                    <li>You acknowledge that any violation of this agreement will result in immediate removal from the Event, without refund, and a permanent ban from all future Events.</li>
                                    <li>There are no refunds.</li>
                                </ul>

                            </div>
                        </div>
                        <button className="apply-form-btn">Submit</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ApplyComp