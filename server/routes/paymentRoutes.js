const express = require("express");
const router = express.Router();

const { checkout } = require("../controllers/paymentController.js");

router.route("/checkout").get(checkout).post(checkout); // Example assuming you want to handle both GET and POST requests

module.exports = router;
