const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://RentCarsToday:TodayCarsRent@rentcars.zbpvinh.mongodb.net/",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Connected to MongoDB successfully");
  });

  connection.on("error", (err) => {
    console.error("Connection to MongoDB failed", err);
  });
}

// Call the connectDB function to establish the connection
connectDB();

// Export the mongoose instance
module.exports = mongoose;
