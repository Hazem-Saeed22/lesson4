const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const articleSchema = new Schema({
 userNameee : String
});

// create the model based on the Schema and export it to use it in the app.js file               
const Mydata = mongoose.model('Mydataa', articleSchema);

// export the model
module.exports = Mydata;