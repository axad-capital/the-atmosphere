const express = require('express');
require('dotenv').config()
// const db = require('./config/connection');
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors())

// start of stripe

const stripe = require('stripe')(process.env.KEY);
const YOUR_DOMAIN = 'http://localhost:3000'
// const YOUR_DOMAIN = 'https://theatmosphere.netlify.app/'

app.post('/create-checkout-session', async (req, res) => {

  let items = []
  for (let i = 0; i < req.body.length; i++) {
    let obj = {
      price: req.body[i].price,
      quantity: 1
    }

    items.push(obj)
  }

  console.log(items)
  const session = await stripe.checkout.sessions.create({
    line_items: items,
    // [
    //   {
    //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    //     price: 'price_1L7libH2pf8AJYNfaiaMjpKR',
    //     quantity: 1,
    //   },
    // ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  // sending url back to the front end
  res.json({ url: session.url })
  // res.redirect(303, session.url);
});

// end stripe

// db.once('open', () => {
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
// });