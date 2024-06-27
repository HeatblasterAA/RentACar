const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://aks5060708090100:eTMWRq1WgigFrqSN@rentacar.vwmtsql.mongodb.net/test/' , {useUnifiedTopology: true ,useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })
}

connectDB()

module.exports = mongoose


