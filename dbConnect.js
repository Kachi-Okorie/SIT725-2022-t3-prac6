require('dotenv').config() //it helps you work with all environments

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Kachi:prac5@cluster0.udrpgld.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true });

client.connect((err, db) => {
    
    if (!err) {
        console.log('MongoDB Connected Successfully')
    }

    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})



module.exports = client;