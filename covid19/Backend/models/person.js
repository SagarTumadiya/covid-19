const { text } = require('body-parser');

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    age:{
        type: Number
    },
    location: {
        type: String
    },
    reportstatus: {
        type: String
    },
    bloodgroup:{
        type: String
    },
    contactno: {
        type: Number
    },
    gender:{
        type: String
    }

});

module.exports = mongoose.model('person', personSchema);