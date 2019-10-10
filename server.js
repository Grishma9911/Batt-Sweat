const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");


require('dotenv').config()

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;


const stripe = require("stripe")(keySecret);

app.set("view engine", "ejs");
app.use(require("body-parser").urlencoded({extended: false}));
app.use(express.static("views"));

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
    }))
  .then(charge => res.render("charge"));
});


// Routes





// module.exports = app;
app.listen(3000, () => console.log("Server is running on"+" "+ PORT));