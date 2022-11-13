const express = require('express');
const router = express.Router();
const flatted=require('flatted');


const Vaccine = require('../models/vaccine');

  router.route('/')
  .post((req,res) => {
    console.log(req.body);
    
      const newPerson = new Vaccine({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      adhaarNumber:req.body.adhaarNumber,
      addressLine1:req.body.addressLine1,
      addressLine2:req.body.addressLine2,
      city:req.body.city,
      state: req.body.state,
      dateOfBirth:req.body.dateOfBirth,
      vaccineType:req.body.vaccineType,
      age:req.body.age,
      gender:req.body.gender,
      dateOfVaccination: req.body.dateOfVaccination,
      timeOfVaccination:req.body.timeOfVaccination,
      contactNumber:req.body.contactNumber,
      bloodGroup:req.body.bloodGroup,
      status:""}
    );
    newPerson.save().then(data=>res.send(data)).catch(err=>console.log(err));
   
  })
  .get((req,res)=>{
    Vaccine.find().then(data=>res.send(data)).catch(err=>console.log(err));
   
 });
 router.route('/:id')
 .get((req,res)=>{
  Vaccine.findOne({_id: req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err));
 })
 .delete((req,res)=>{
  Vaccine.findOneAndRemove({_id:req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err));
})
.put((req,res)=>{
  
  Vaccine.findOneAndUpdate({_id:req.params.id},req.body).then(data=>res.send(data)).catch(err=>console.log(err));
});
router.route('/adhaar/:adhaarno')
.get((req,res)=>{
  Vaccine.findOne({adhaarNumber:req.params.adhaarno}).then(data=>res.send(data)).catch(err=>console.log(err));
});
 

module.exports = router;