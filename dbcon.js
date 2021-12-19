const mongoose = require('mongoose');
const dotEnv = require('dotenv').config();

const uri = process.env.URI;

const connectionManager = async() => {

    await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true});
}

module.exports = connectionManager;