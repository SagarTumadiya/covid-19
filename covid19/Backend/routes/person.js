const express = require('express');
const router = express.Router();


const Person = require('../models/person');

router.route('/')
.post((req,res)=>{
  console.log(req.body)
  const person=new Person({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    location: req.body.location,
    reportstatus: req.body.reportstatus,
    bloodgroup: req.body.bloodgroup,
    contactno: req.body.contactno,
    gender: req.body.gender
  });
  
   person.save().then(data=>res.send(data)).catch(err=>console.log(err));
  
})
.get((req,res)=>{
  Person.find().then(data=>res.send(data)).catch(err=>console.log(err));
 
});
router.route('/:id')
.get((req,res)=>{
  Person.findOne({_id: req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err));
})
.delete((req,res)=>{
  Person.findOneAndRemove({_id:req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err));
})
.put((req,res)=>{
  Person.findOneAndUpdate({_id:req.params.id},req.body).then(data=>res.send(data)).catch(err=>console.log(err));
})

module.exports = router;