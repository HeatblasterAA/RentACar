// Use require syntax for importing modules
const { razorpayInstance } = require("../instance.js");

// Define the checkout function
exports.checkout = async (req, res) => {
  const options = {
    amount: 50000, // Amount in the smallest currency unit (e.g., paise for INR)
    currency: "INR", // Currency code
    receipt: "receipt#1", // Receipt number or identifier
  };

  // Create an order using Razorpay instance
  const order = await razorpayInstance.orders.create(options);
  console.log(order); // Log the order details to console (inside the function)
  res.status(200).json({
    success: true,
  }); // Send the order details as JSON
};
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).send("Failed to create order"); // Handle error in a real application
//   }
// };
