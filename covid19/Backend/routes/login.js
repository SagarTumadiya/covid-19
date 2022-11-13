const express = require('express');
const router = express.Router();


const User = require('../models/login');

router.route('/')
.post((req,res)=>{
  const user=new User({
    email:req.body.email,
    password:req.body.password
  });
  user.save().then(data=>res.send(data)).catch(err=>console.log(err));
});

module.exports = router;