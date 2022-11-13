//Ramyashri Ravindran 901488
import React,{useState, useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'

import axios from 'axios'

export default function AddPatient(props) {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [adhaarNumber, setAdhaarNumber] = useState('')
    const[addressLine1, setAddressLine1] = useState('')
    const[addressLine2, setAddressLine2] = useState('')
    const [age, setAge] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState('')
    const[bloodGroup, setBloodGroup] = useState('')
    const[dateOfBirth, setDateOfBirth] = useState('')
    const[contactNumber, setContactNumber] = useState('')
    const[gender, setGender] = useState('')
    const[dateOfTesting, setDateOfTesting] = useState('') 
    const[timeOfTesting, setTimeOfTesting] = useState('')
    const[status, setStatus]=useState('')
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/testing/${id}`)
         .then(response => {
            
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setAdhaarNumber(response.data.adhaarNumber)
            setAddressLine1(response.data.addressLine1)
            setAddressLine2(response.data.addressLine2)
            setAge(response.data.age)
            setCity(response.data.city)
            setState(response.data.state)
            setBloodGroup(response.data.bloodGroup)
            setDateOfBirth(response.data.dateOfBirth)
            setContactNumber(response.data.contactNumber)
            setGender(response.data.gender)
            setDateOfTesting(response.data.dateOfTesting)
            setTimeOfTesting(response.data.timeOfTesting)
            setStatus(response.data.status)
         })
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8080/testing/${id}`,{
            firstName:firstName,
            lastName:lastName,
            adhaarNumber:adhaarNumber,
            addressLine1:addressLine1,
            addressLine2:addressLine2,
           age:age,
           city:city,
           state:state,
           bloodGroup:bloodGroup,
           dateOfBirth:dateOfBirth,
           contactNumber:contactNumber,
           gender:gender,
           dateOfTesting:dateOfTesting,
           timeOfTesting:timeOfTesting,
           status:status


        })
        .then(res => {
            console.log("Data updated")
            alert("Data Updated")
             props.history.push('/testingdetails')
             
        })
        .catch(err => console.log(err))
    }


    return (
        <div class="img1">
              <div className="container  mt-7 mb-3 ">
            <form style={{marginLeft:"1020px"}}>
            <h3>TESTING RECORDS</h3>

                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">First Name </label>
                    <input type="text" class="form-control-sm" style={{backgroundColor: 'white',opacity: 0.7}} name="firstName" readOnly value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">LastName </label>
                    <input type="text" class="form-control-sm" style={{backgroundColor: 'white',opacity: 0.7}} name="lastName" value={lastName} readOnly onChange={e => setLastName(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">adhaarNumber</label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="adhaarNumber" value={adhaarNumber} readOnly onChange={e => setAdhaarNumber(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">AddressLine1</label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="addressLine1" value={addressLine1} readOnly onChange={e => setAddressLine1(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">AddressLine2</label>
                    <input type="text" class="form-control-sm" style={{backgroundColor: 'white',opacity: 0.7}}  name="addressLine2" value={addressLine2} readOnly onChange={e => setAddressLine2(e.target.value)}/>

                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Age</label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="age" value={age} readOnly onChange={e => setAge(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">City </label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="city" value={city} readOnly onChange={e => setCity(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">State </label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="state" value={state} readOnly onChange={e => setState(e.target.value)}/></div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Blood Group</label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="bloodGroup" value={bloodGroup} readOnly onChange={e => setBloodGroup(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Date of Birth</label>
                    <input type="text" class="form-control-sm" style={{backgroundColor: 'white',opacity: 0.7}}   name="dateOfBirth" value={dateOfBirth} readOnly onChange={e => setDateOfBirth(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Contact Number </label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="contactNumber" value={contactNumber} readOnly onChange={e => setContactNumber(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Gender </label>
                    <input type="text" class="form-control-sm"  style={{backgroundColor: 'white',opacity: 0.7}}   name="gender" value={gender} readOnly onChange={e => setGender(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-7 col-form-label">Date Of Testing </label>
                    <input type="text" class="form-control-sm" name="dateofTesting" value={dateOfTesting} onChange={e => setDateOfTesting(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-7 col-form-label">Time Of Testing </label>
                    <input type="text" class="form-control-sm" name="timeOfTesting" value={timeOfTesting} onChange={e => setTimeOfTesting(e.target.value)}/>
                </div>
                
                <div class="form-group">
                    <label class="col-sm-6 col-form-label">Status </label><br></br>
                    <input type="radio" class="form-check-input" value="Confirmed" name="status" onChange={e => setStatus(e.target.value)}/>Confirm
                     <input type="radio" class="form-check-input" value="Rejected" name="status" onChange={e => setStatus(e.target.value)}/> Reject                </div>
                <br></br>
                <button class="btn btn-outline-primary" onClick={handleSubmit}>Update</button>
                <Link to="/testingdetails" className="btn btn-outline-primary"> Back</Link>
                
           
            </form>
           
        </div>
        </div>
    )
}
