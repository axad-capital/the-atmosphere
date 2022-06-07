const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use(routes);


const stripe = require('stripe')('sk_test_51L7jtaH2pf8AJYNfhVyMXLGXwzy8dAYknfjGtoFsgA5S9oRpUwug3yAXhGFmppJLRiVqbdVABRWizHXzsivAXjcW00OJuoynZx');
const YOUR_DOMAIN = 'http://localhost:3000'

// stripe
// app.post('/create-checkout-session', (req, res) => {
//   console.log(req.test)
// });

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1L7libH2pf8AJYNfaiaMjpKR',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

// end stripe

// db.once('open', () => {
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
// });