const mongoose = require("mongoose");


var mongoURL = `mongodb+srv://manan-abdul:mananabdul123@cluster0.inj5eog.mongodb.net/mern-hotel-rooms`;

mongoose.connect(mongoURL, {useUnifiedTopology: true , useNewUrlParser: true}); 

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('MongoDb Connection Failed')
})

connection.on('connected', ()=>{
    console.log("MongoDb Connection Success")
})

module.exports = mongoose