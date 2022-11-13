import React,{useState, useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

export default function AddPatient(props) {
    const [personId, setPersonId] = useState('')
    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const[location, setLocation] = useState('')
    const[reportstatus, setReportstatus] = useState('')
    const[bloodgroup, setBloodgroup] = useState('')
    const[contactno, setContactno] = useState('')
    const[gender, setGender] = useState('')
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5040/person/${id}`)
         .then(response => {
             
            setPersonId(response.data.id)
            setName(response.data.name)
            setEmail(response.data.email)
            setAge(response.data.age)
            setLocation(response.data.location)
            setReportstatus(response.data.reportstatus)
            setBloodgroup(response.data.bloodgroup)
            setContactno(response.data.contactno)
            setGender(response.data.gender)
         })
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:5040/person/${id}`,{
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
            console.log("Data updated")
            toast.warning('Patient Record Added Successfully',{position:"bottom-left"});
            window.location.href = "http://localhost:3000/list";
             props.history.push('/list')
             
        })
        .catch(err => console.log(err))
    }


    return (
        <div class="img">
              <div className="container  mt-7 mb-3 ">
            <form style={{marginLeft:"1020px"}}>
            <div><h3>Patient Details</h3></div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name </label>
                    <input type="text" class="form-control-sm" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email </label>
                    <input type="text" class="form-control-sm" name="location" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Age </label>
                    <input type="text" class="form-control-sm" name="age" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Location </label>
                    <input type="text" class="form-control-sm" name="location" value={location} onChange={e => setLocation(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label class="col-sm-5 col-form-label">Report Status </label><br></br>
                    <input type="radio" class="form-check-input" value="Positive" name="reportstatus" onChange={e => setReportstatus(e.target.value)}/>Positive
                     <input type="radio" class="form-check-input" value="Negative" name="reportstatus" onChange={e => setReportstatus(e.target.value)}/> Negative                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Blood Group </label>
                    <input type="text" class="form-control-sm" name="bloodgroup" value={bloodgroup} onChange={e => setBloodgroup(e.target.value)}/>
                </div>
                <div class="form-group row">
                    <label class="col-sm-6 col-form-label">Contact Number </label>
                    <input type="text" class="form-control-sm" name="contactno" value={contactno} onChange={e => setContactno(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 col-form-label">Gender </label><br></br>
                    <input type="radio" class="form-check-input" value="Male" name="gender" onChange={e => setGender(e.target.value)}/>Male
                     <input type="radio" class="form-check-input" value="Female" name="gender" onChange={e => setGender(e.target.value)}/> Female
                    <input type="radio" class="form-check-input" value="Other" name="gender" onChange={e => setGender(e.target.value)}/> Other</div><br></br>
                <button class="btn btn-outline-primary" onClick={handleSubmit}>Update</button>
                <ToastContainer />
                <Link to="/list" className="btn btn-outline-primary"> Back</Link>

                <div>
            </div>
            </form>
           
        </div>
        </div>
    )
}
