const express = require('express');
const router = express.Router();


const Testing = require('../models/testing');


  router.route('/')
  .post((req,res) => {
    console.log(req.body);
    const newTest = new Testing({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      adhaarNumber:req.body.adhaarNumber,
      addressLine1:req.body.addressLine1,
      addressLine2:req.body.addressLine2,
      city:req.body.city,
      state: req.body.state,
      dateOfBirth:req.body.dateOfBirth,
      dateOfTesting:req.body.dateOfTesting,
      timeOfTesting:req.body.timeOfTesting,
      contactNumber:req.body.contactNumber,
      bloodGroup:req.body.bloodGroup,
      age:req.body.age,
      gender:req.body.gender,
      status:""
      }
    );
    newTest.save().then(data=>res.send(data)).catch(err=>console.log(err));
      
   
  })
  .get((req,res)=>{
    Testing.find().then(data=>res.send(data)).catch(err=>console.log(err));
   
 });
 router.route('/:id')
 .get((req,res)=>{
  Testing.findOne({_id: req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err));
 })
 .delete((req,res)=>{
  Testing.findOneAndRemove({_id:req.params.id}).then(data=>res.send(data)).catch(err=>console.log(err));
})
.put((req,res)=>{
  Testing.findOneAndUpdate({_id:req.params.id},req.body).then(data=>res.send(data)).catch(err=>console.log(err));
});
router.route('/adhaar/:adhaarno')
.get((req,res)=>{
  Testing.findOne({adhaarNumber:req.params.adhaarno}).then(data=>res.send(data)).catch(err=>console.log(err));
});

module.exports = router;