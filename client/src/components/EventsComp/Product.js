// import React from 'react'

// const Product = () => {

//     function handleCheckout() {
//         fetch('/create-checkout-session', {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body : JSON.stringify({
//                 items : [
//                     {id: 1, quantity: 1}
//                 ]
//             })
//         }).then(res => {
//             if (res.ok) return res.json()
//             return res.json().then(json => Promise.reject(json))
//         }).then(({url}) => {
//             window.location = url
//         }).catch(e => {
//             console.error(e.error)
//         })
//     }

//   return (
//     <div>
//         <button onClick={handleCheckout}>checkout</button>
//     </div>
//   )
// }

// export default Product

import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}