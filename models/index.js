const mongoose = require('mongoose');

const dbName = 'ConstellationsAPI'

const uri = `mongodb://localhost:27017/${dbName}`

mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`Connected to MongoDB at ${db.host}:${db.port}`))
db.on('error', (error) => console.log(`Database error\n${error}`))

module.exports = {
    Constellation: require('./constellation')
}