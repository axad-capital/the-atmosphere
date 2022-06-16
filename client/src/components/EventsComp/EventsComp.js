import React, { useState } from "react"
import './eventsComp.css'
import Product from "./Product"

const EventsComp = () => {

    // secret key - sk_test_51L7jtaH2pf8AJYNfhVyMXLGXwzy8dAYknfjGtoFsgA5S9oRpUwug3yAXhGFmppJLRiVqbdVABRWizHXzsivAXjcW00OJuoynZx

    const [pwCode, setPwCode] = useState(false)

    let code = process.env.REACT_APP_CODE_PW

    function handlePasswordSubmit(e) {
        if (e.key === 'Enter') {
            let pw = document.getElementById('pw').value
            if (pw === code) {
                setPwCode(true)
            }
        }
    }


    return (
        <div>
            {!pwCode ?
                <div style={{ backgroundImage: "url('https://res.cloudinary.com/dtodsxdoy/image/upload/v1655418356/lips_ntbf9g.gif')", backgroundSize: 'cover', height: '80vh', borderBottom: '2px solid goldenrod' }}>
                    <div className="pw-form" data-aos="flip-up">
                        <label className="pw-form-label" htmlFor="password">Please Type Secert Password</label>
                        <br />
                        <br />
                        <input onKeyDown={(e) => handlePasswordSubmit(e)} className="pw-form-input" id='pw' type="password" placeholder="Password" />
                        <br />
                        <br />
                        {/* <button className="pw-form-btn" onClick={handlePasswordSubmit}>SUBMIT</button> */}
                    </div>
                </div>
                :
                <div>
                    <Product />
                </div>}
        </div>
    )
}

export default EventsComp