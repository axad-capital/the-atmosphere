import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Logo from '../HomeComp/gold-logo.png'

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

    <section style={{ background: 'black', width: '50%', minWidth:'290px', maxWidth: '1200px', margin: '0 auto', padding: '50px', borderLeft: '10px solid goldenrod', borderRight: '10px solid goldenrod' }}>

      <div style={{ textAlign: 'right' }}>
        <button className="add-to-cart-btn" onClick={() => window.location.href = '/cart'}>Go To Cart</button>
      </div>
      <br />
      <br />

      <div className="event-logo-container">
        <img className="event-logo-img" src={Logo} alt="logo" />
      </div>
      <br />
      <br />

      <h1 className="product-title"><span>Tickets</span></h1>
      <br />
      <div>
        <div>
          <h3 className='product-info'>Single Women: $300</h3>
        </div>
        <button data-title="Single Women" className="add-to-cart-btn" id="price_1L8tE7H2pf8AJYNf1SvMUMd7" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Couples: $1,000</h3>
        </div>
        <button data-title="Couples" className="add-to-cart-btn" id="price_1L8tLTH2pf8AJYNfYrSmo6nv" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Single Men: $1,200</h3>
        </div>
        <button data-title="Single Men" className="add-to-cart-btn" id="price_1L8tOKH2pf8AJYNfp3C4tH4U" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Group Of Three: $2,700</h3>
        </div>
        <button data-title="Group Of Three" className="add-to-cart-btn" id="price_1L8uCeH2pf8AJYNflaW6Ci6H" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />
      <br />

      <h1 className="product-title"><span>VIP Tables</span></h1>
      <br />
      <div>
        <div>
          <h3 className='product-info'>Table For 2: $3,000</h3>
        </div>
        <button data-title="Table For 2" className="add-to-cart-btn" id="price_1L8u8fH2pf8AJYNfk9ZRguvp" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Table For 3: $4,000</h3>
        </div>
        <button data-title="Table For 3" className="add-to-cart-btn" id="price_1L8uA0H2pf8AJYNfmLjr7835" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />

      <div>
        <div>
          <h3 className='product-info'>Table For 4: $6,000</h3>
        </div>
        <button data-title="Table For 4" className="add-to-cart-btn" id="price_1L8uBAH2pf8AJYNfRSsq9W8p" onClick={addToCart}>Add to Cart</button>
      </div>
      <br />
      <br />

      <h1 className="product-title"><span>Special Guest & Performances</span></h1>
      <br />
      <h4 className='product-info'>- Adult star Mick Blue XXX</h4>
      <h4 className='product-info'>- Adult star Emily Wils XXX</h4>
      <h4 className='product-info'>- Special fire performances</h4>
      <h4 className='product-info'>- Shibari play all night long</h4>
      <h4 className='product-info'>- Live sex shows & erotic performances</h4>
      <br />
      <br />

      <h1 className="product-title"><span>Special Guest & Performances</span></h1>
      <br />
      <h2 className='product-info' style={{ margin: 0 }}>Top Shel Open Bar</h2>

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