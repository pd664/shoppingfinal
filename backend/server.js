require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const Razorpay = require("razorpay");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("./frontend"));

app.use(bodyParser.urlencoded({ extended: false }));

var instance = new Razorpay({
  key_id: 'rzp_live_Z4F87shT2a3elH',
  key_secret: 'jM4KRf6kEAP9rIWqi4eEjWAR',
});

app.post("/create/orderId/razorpay", (req, res) => {
  let amt = req.body.amount + "00";
  var options = {
    amount: amt,
    currency: "INR",
    receipt: "rcp1",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({
      orderId: order.id,
    });
  });
});

app.post("/api/payment/verify", (req, res) => {
  console.log("verify api");
  let body =
    req.body.response.razorpay_order_id +
    "|" +
    req.body.response.razorpay_payment_id;

  var crypto = require("crypto");
  var expectedSignature = crypto
    .createHmac("sha256", "Wok5mJv2F0pa5HKLeXZfUr9r")
    .update(body.toString())
    .digest("hex");
  var response = { signatureIsValid: "false" };
  if (expectedSignature === req.body.response.razorpay_signature)
    response = { signatureIsValid: "true" };
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
