const mongoose = require("mongoose");
const DB_URI = 'mongodb+srv://gnoindeveloper:glofaa1234@cluster0.m55jsrs.mongodb.net/dataNeuron'

const databaseConnections = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`data base connected `)
    })
}

module.exports = databaseConnections