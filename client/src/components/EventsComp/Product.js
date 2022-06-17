import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
// import Logo from '../HomeComp/gold-logo.png'
import EventsGif from './giphy.gif'

function addToCart(e) {

  let clicked = {
    id: uuidv4(),
    name: e.target.getAttribute('data-title'),
    price: e.target.id,
    quantity: 1
  }

  let cart = JSON.parse(localStorage.getItem('theAtmoshereCart'))

  if (cart === null) {
    cart = []
  }

  cart.push(clicked)
  localStorage.setItem('theAtmoshereCart', JSON.stringify(cart))
}



const ProductDisplay = () => (
  <div className="event-container">

    <section style={{ background: 'black', width: '50%', minWidth: '290px', maxWidth: '1200px', margin: '0 auto', padding: '50px', borderLeft: '10px solid goldenrod', borderRight: '10px solid goldenrod' }}>

      {/* <div className="event-logo-container">
        <img className="event-logo-img" src={Logo} alt="logo" />
      </div>
      <br />
      <br /> */}

      <div style={{ textAlign: 'center' }}>
        <h1 className="product-title"><span>ATMOSPHERE: SUMMER BLISS</span></h1>
        <br />

        <div style={{ width: '100%' }}>
          <img style={{ width: '100%' }} src={EventsGif} alt="event-gif" />
        </div>

        <br />
        <h5 className='product-info'>Saturday June 25th</h5>
        <h5 className='product-info'>10PM-3AM</h5>
        <h5 className='product-info'>SOHO NYC</h5>
        <br />
        <h4 className='product-info'>You open our doors and find yourself on enticingly unfamiliar terrain. Striking strangers float by as a drink slips into your hand and you wander from the familiarity of the outside world. Erotic wonders dot every corner and premium libations flow with ease. This new cosmos beckons with possibility. Could one night chart a new course? Could one chance encounter shoot you to the stars? You're pleasantly unsure but eager to find out. You're in our orbit, you breathe in our atmosphere.</h4>
      </div>
      <br />
      <br />

      <div style={{ textAlign: 'right' }}>
        <button className="add-to-cart-btn" onClick={() => window.location.href = '/cart'}>Go To Cart</button>
      </div>
      <br />
      <br />

      <h1 className="product-title"><span>Tickets</span></h1>
      <br />
      <div>
        <div>
          <h3 className='product-info'>Single Women: $300</h3>
        </div>
        <button data-title="Single Women" className="add-to-cart-btn" id="price_1LBlFDH2pf8AJYNf9YXpS5Pz" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Couples: $800</h3>
        </div>
        <button data-title="Couples" className="add-to-cart-btn" id="price_1LBlG6H2pf8AJYNfqlGeJBWt" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Single Men: $1,000</h3>
        </div>
        <button data-title="Single Men" className="add-to-cart-btn" id="price_1LBlH8H2pf8AJYNfKd35uxIz" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Group Of Three: $2,000</h3>
        </div>
        <button data-title="Group Of Three" className="add-to-cart-btn" id="price_1LBlHjH2pf8AJYNfEtS460AT" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />
      <br />

      <h1 className="product-title"><span>VIP Tables</span></h1>
      <br />
      <div>
        <div>
          <h3 className='product-info'>Table For 2: $3,000</h3>
        </div>
        <button data-title="Table For 2" className="add-to-cart-btn" id="price_1LBlIlH2pf8AJYNfovHWi1SJ" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Table For 3: $4,000</h3>
        </div>
        <button data-title="Table For 3" className="add-to-cart-btn" id="price_1LBlJZH2pf8AJYNf0cN1VEza" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Table For 4: $5,000</h3>
        </div>
        <button data-title="Table For 4" className="add-to-cart-btn" id="price_1LBlKZH2pf8AJYNfUiF8Y2ut" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />
      <br />

      <h1 className="product-title"><span>Special Guest & Performances</span></h1>
      <br />
      <h4 className='product-info'>- Top Shelf Open Bar</h4>
      <h4 className='product-info'>- Special fire performances</h4>
      <h4 className='product-info'>- Shibari play all night long</h4>
      <h4 className='product-info'>- Live sex shows & erotic performances</h4>
      <h4 className='product-info'>- Adult award winning male star Mick Blue XXX</h4>
      <br />

      {/* <h1 className="product-title"><span>Special Guest & Performances</span></h1> */}
    </section>
  </div>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>

);

export default function Product() {
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