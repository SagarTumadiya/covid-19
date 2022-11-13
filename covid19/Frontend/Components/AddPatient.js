//Sathish Kumar K 901036
import React,{useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddPatient(props) {
    
    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const[location, setLocation] = useState('')
    const[reportstatus, setReportstatus] = useState('')
    const[bloodgroup, setBloodgroup] = useState('')
    const[contactno, setContactno] = useState('')
    const[gender, setGender] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/person',{
            name: name,
            email: email,
            age: age,
            location: location,
            reportstatus: reportstatus,
            bloodgroup: bloodgroup,
            contactno: contactno,
            gender: gender
        })
        .then(res => {
            console.log("Data added")
            alert("Patient Details Added Successfully")            
            props.history.push("/")
        })
        .catch(err => console.log(err))
    }


    return (
        <div class="img">
        <div class="container mt-8 mb-7 ">
          
                  <form class="text-dark" style={{marginLeft:"1020px"}} onSubmit={handleSubmit}>
                  <div><h3>Patient Details</h3></div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Name </label>
                    <input type="text" class="form-control-sm" name="name" value={name}  pattern="[A-Za-z ]+"
                minLength="3"
                maxLength="25"
                title="Input should be alphabets only" required onChange={e => setName(e.target.value)} />
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Email </label>
                    <input type="text" class="form-control-sm" name="location" value={email} pattern="^[A-Za-z0-9.]+@[a-zA-Z0-9.]+\.[a-z]{2,4}$+"
                title="Enter valid Email" required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Age </label>
                    <input type="number" class="form-control-sm" name="age" value={age} pattern="[0-9]{2}"
                title="Input should be numericals and 2 digits only" required onChange={e => setAge(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Location </label>
                    <input type="text" class="form-control-sm" name="location" value={location} required onChange={e => setLocation(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label class="col-sm-5 col-form-label">Report Status </label><br></br>
                    <input type="radio" class="form-check-input" value="Positive" name="reportstatus" onChange={e => setReportstatus(e.target.value)}/>   Positive
                     <input type="radio" class="form-check-input" value="Negative" name="reportstatus" onChange={e => setReportstatus(e.target.value)}/>  Negative                </div>
                <div class="form-group row">
                    <label class="col-sm-5 col-form-label">Blood Group </label>
                    <input type="text" class="form-control-sm" name="bloodgroup" value={bloodgroup} required onChange={e => setBloodgroup(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Contact Number </label>
                    <input type="number" class="form-control-sm" name="contactno" value={contactno} pattern="[0-9]{10}"
                title="Input should be numericals and 10 digits only" required onChange={e => setContactno(e.target.value)} />
                </div>
                <div class="form-group">
                    <label class="col-sm-2 col-form-label">Gender </label><br></br>
                    <input type="radio" class="form-check-input" value="Male" name="gender" onChange={e => setGender(e.target.value)}/>  Male 
                       <input type="radio" class="form-check-input" value="Female" name="gender" onChange={e => setGender(e.target.value)}/>  Female
                       <input type="radio" class="form-check-input" value="Other" name="gender" onChange={e => setGender(e.target.value)}/>  Other</div><br></br>
                <div class="form-group row">
                <button  class="btn btn-outline-primary col-sm-2 col-form-label" >Add</button>
                <Link to="/list" className="btn btn-outline-primary col-sm-2 "> Back</Link>
                </div>
            </form>
            <br/>
            
            
        </div>
        </div>
    )
}
