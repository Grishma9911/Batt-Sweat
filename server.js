const express = require('express');
const session = require('express-session');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();


require('dotenv').config()

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;


const stripe = require("stripe")(keySecret);







// for body parser. to collect data that sent from the client.
app.use(require("body-parser").urlencoded({extended: false}));


// Serve static files. CSS, Images, JS files ... etc
app.use(express.static(path.join(__dirname, 'views')));


// Template engine. PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session
app.use(session({
    secret:'Bet-Sweat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


//------------------------------------------------- Routers

app.use('/', pageRouter );


//---------------------------------STRIPE
app.get("/", (req, res) =>
  res.render("index", {keyPublishable}));


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/../Bet-Sweat/views/home.html"));
});


app.post("/charge", (req, res) => {
  let amount = 500;
//creates new stripe customer 
  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }));res.sendFile(path.join(__dirname, "/../Bet-Sweat/views/home.html"));
  
});





app.use((req, res, next)=>{

})









// Errors => page not found 404
app.use((req, res, next) =>  {
  var err = new Error('Page not found');
  err.status = 404;
  next(err);
   
})

// Handling errors (send them to the client)
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});






// Setting up the server
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

module.exports = app;