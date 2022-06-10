import React, { useState } from "react"
import './eventsComp.css'
import Product from "./Product"

const EventsComp = () => {

    // secret key - sk_test_51L7jtaH2pf8AJYNfhVyMXLGXwzy8dAYknfjGtoFsgA5S9oRpUwug3yAXhGFmppJLRiVqbdVABRWizHXzsivAXjcW00OJuoynZx

    const [pwCode, setPwCode] = useState(true)

    let code = process.env.REACT_APP_CODE_PW

    function handlePasswordSubmit() {
        let pw = document.getElementById('pw').value
        if (pw === code) {
            setPwCode(true)
        }
    }


    return (
        <div style={{ minHeight: '75.5vh' }}>
            {!pwCode ?
                <div className="pw-form" data-aos="flip-up">
                    <label className="pw-form-label" htmlFor="password">Please Type Secert Password</label>
                    <br />
                    <br />
                    <input className="pw-form-input" id='pw' type="password" placeholder="Password" />
                    <br />
                    <br />
                    <button className="pw-form-btn" onClick={handlePasswordSubmit}>SUBMIT</button>
                </div>
                :
                <div>
                    <Product />
                </div>}
        </div>
    )
}

export default EventsComp