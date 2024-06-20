// Import dependencies
const express = require("express");
const { config } = require("dotenv");
const Razorpay = require("razorpay");

// Load environment variables
config({ path: "./config/config.env" });

// Create express app
const app = express();

// Main server port configuration
const mainPort = process.env.PORT || 5000;

// Testing main port route
app.get("/", (req, res) => res.send("Hello World!"));

// Starting the main server
app.listen(mainPort, () =>
  console.log(`Main server is running at port ${mainPort}`)
);

// Import and configure PayApp (assuming PayApp is configured as an express app)
const { PayApp } = require("./routes/app");

// Pay server port configuration
const payPort = process.env.PAY_PORT || 6000;

// Use PayApp for pay server
PayApp.listen(payPort, () => {
  console.log(`Pay server is running at port ${payPort}`);
});
