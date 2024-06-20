const Razorpay = require("razorpay");
const { config } = require("dotenv");

// Load environment variables
config({ path: "./config/config.env" });

// Create a Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = { razorpayInstance };
