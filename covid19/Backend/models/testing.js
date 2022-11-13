const { text } = require('body-parser');

const mongoose = require('mongoose');

const testingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  lastName:{
    type: String,
    required: true,
    trim: true
  },
  adhaarNumber: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 12
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required:true

  },
  dateOfTesting: {
    type: Date,
    required:true
  },
  timeOfTesting: {
    type: String,
    required:true
  },
  contactNumber: {
    type: Number,
    required: true,
    maxlength: 10
  },
  bloodGroup: {
    type: String,
    required:true,
    maxlength: 2

  },
  age: {
    type: Number,
    required: true,
    maxlength: 2
  },
  gender: {
    type: String,
    required: true
  },
  status: {
    type: String,
  }});

module.exports = mongoose.model('testing', testingSchema);