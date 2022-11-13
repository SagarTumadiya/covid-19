import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PatientList(props) {
    const [testingList, setTestingList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5040/testing')
         .then(response => {
             setTestingList(response.data)
         })
    },[])

 
    const deletePatient = (id) => {
        axios.delete(`http://localhost:5040/testing/${id}`)
        .then(res => {
            console.log("Data Deleted")
            toast.error('Patient Record Added Successfully',{position:"bottom-left"});
            window.location.href = "http://localhost:3000/testingdetails"
            props.history.push('/testingdetails')
        })
        .catch(err => console.log(err))
    }
    return (
        
        <div className="container  mt-5 mb-5 ">
            <center><div><h3>Testing Details</h3></div></center>
            <Table className="table table-light table-bordered" hover size="sm">
             
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
                    <th scope="col">Age</th>
                    <th scope="col">Time of Testing</th>
                    <th scope="col">Contact number</th>
                    <th scope="col">Blood group</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                    <th scope="col">View</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                   
                </thead>
                <tbody>
                    {testingList.map(testing => (
                        <tr key={testing.vaccineId}>
                           <td>{testing.firstName}</td>
                            <td>{testing.lastName}</td>
                            <td>{testing.adhaarNumber} </td>
                            <td>{testing.addressLine1} </td>
                            <td>{testing.addressLine2} </td>
                            <td>{testing.city} </td>
                            <td>{testing.state} </td>
                            <td>{testing.dateOfBirth} </td>
                            <td>{testing.dateOfTesting} </td>
                            <td>{testing.age} </td>
                            <td>{testing.timeOfTesting} </td>
                            <td>{testing.contactNumber} </td>
                            <td>{testing.bloodGroup} </td>
                            <td>{testing.gender} </td>
                            <td>{testing.status} </td>
                            
                            <td>
                            <Link to={"/testing/"+testing._id}>
                                    <button className="btn-warning">View</button>
                                    </Link>  
                        
                            </td>
                            
                            <td>
                            <Link to={"/updateTesting/"+testing._id}>
                                    <button className="btn-success">Edit</button>
                                </Link>
                            </td>
                            <td>
                            <Link to={"/testingdetails/"}>
                                    <button className="btn-danger" onClick={() => deletePatient(testing._id)}>Delete</button>
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
