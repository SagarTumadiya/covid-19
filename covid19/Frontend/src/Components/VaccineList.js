import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PatientList(props) {
    const [vaccineList, setVaccineList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5040/vaccine')
        .then(response => {
            console.log(response.data);
             setVaccineList(response.data)
         })
    },[])

    const deletePatient = (id) => {
        axios.delete(`http://localhost:5040/vaccine/${id}`)
        .then(res => {
            console.log("Data Deleted")
            toast.error('Patient Record Added Successfully',{position:"bottom-left"});
            window.location.href = "http://localhost:3000/vaccinedetails"
            props.history.push('/vaccinedetails')
        })
        .catch(err => console.log(err))
    }


    return (
        <div style={{marginRight:"450px"}} className="container mt-5 mb-3">
            <center><div><h3>Vaccine Details</h3></div></center>

            <Table className="table  table-light table-bordered" hover size="sm">
             
                <thead class="bg-light">
                    <th scope="col">FirstName </th>
                    <th scope="col">LastName</th>
                    <th scope="col">Aadhar Number</th>
                    <th scope="col">Address Line 1 </th>
                    <th scope="col">Address Line 2 </th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Date of Birth </th>
                    <th scope="col">Date of Vaccination</th>
                    <th scope="col">Vacination Type</th>
                    <th scope="col">Age</th>
                    <th scope="col">Time of vaccination</th>
                    <th scope="col">Contact number</th>
                    <th scope="col">Blood group</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                    <th scope="col">View</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                   
                </thead>
                <tbody>
                    {vaccineList.map(vaccine => (
                        <tr key={vaccine.vaccineId}>
                           <td>{vaccine.firstName}</td>
                            <td>{vaccine.lastName}</td>
                            <td>{vaccine.adhaarNumber} </td>
                            <td>{vaccine.addressLine1} </td>
                            <td>{vaccine.addressLine2} </td>
                            <td>{vaccine.city} </td>
                            <td>{vaccine.state} </td>
                            <td>{vaccine.dateOfBirth} </td>
                            <td>{vaccine.dateOfVaccination} </td>
                            <td>{vaccine.vaccineType} </td>
                            <td>{vaccine.age} </td>
                            <td>{vaccine.timeOfVaccination} </td>
                            <td>{vaccine.contactNumber} </td>
                            <td>{vaccine.bloodGroup} </td>
                            <td>{vaccine.gender} </td>
                            <td>{vaccine.status} </td>
                            
                            <td>
                            <Link to={"/vaccine/"+vaccine._id}>
                                    <button className="btn-warning">View</button>
                                    </Link>
                               
                        
                            </td>
                           
                            <td>
                            <Link to={"/updateVaccine/"+vaccine._id}>
                                    <button className="btn-success">Edit</button>
                                </Link>
                            </td>
                            <td>
                            <Link to={"/vaccinedetails/"}>
                                    <button className="btn-danger" onClick={() => deletePatient(vaccine._id)}>Delete</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
           </Table>
            <br/>
            
        </div>
    )
}
