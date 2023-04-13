/*
Author: Jose Angel Garcia Gomez
Date: 13-04-2023
Description: Program that defines a sample model schema to be used in the Mongo Database 
*/
const mongoose = require("mongoose");

const SampleModel = mongoose.Schema({
    field: String,
    field2: String,
});

module.exports = mongoose.model("Sample", SampleModel);