
const express = require("express");
var cors = require('cors')
const path = require('path');

const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
require('./models/db');
app.use(cors());
app.use(require('helmet')());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(express.json()); 
app.use('/vaccine',require('./routes/vaccine'));
app.use('/login',require("./routes/login"));
app.use('/person',require("./routes/person"));
app.use('/testing',require("./routes/testing"));
const PORT = process.env.PORT || 5040;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));