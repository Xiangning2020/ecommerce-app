const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HooH8CgqcxbueJ5nmgIgXCqrHu9v6tlGahf4Ei3iNKWFoAgdWYh0zfXJLXzwOHsFIazR8rcXzANo58S31H5DhP200lcmkYXCC"
);

// App config
const app = express();

// API
app.use(cors({ origin: true }));
app.use(express.json());
// Middlewares

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/ecommerce-clone-xiangning/us-central1/api
