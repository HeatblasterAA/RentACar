const express = require("express");
const { config } = require("dotenv");

// Load environment variables from the specified path
config({ path: "./config/config.env" });

// Create an Express application
const PayApp = express();

// Import payment routes
const paymentRoute = require("./paymentRoutes");

// Use the payment routes under the '/api' prefix
PayApp.use("/api", paymentRoute);

// Export the Express application
module.exports = { PayApp };
