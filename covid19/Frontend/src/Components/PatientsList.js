import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PatientList(props) {
    const [personList, setPersonList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5040/person')
         .then(response => {
             setPersonList(response.data)
         })
    },[])

    const deletePatient = (id) => {
        axios.delete(`http://localhost:5040/person/${id}`)
        .then(res => {
            console.log("Data Deleted")
            toast.error('Patient Record Added Successfully',{position:"bottom-left"});
            window.location.href = "http://localhost:3000/list"
            props.history.push('/list')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="container  mt-5 mb-5 ">
           <center> <div><h3>Patient Details</h3></div></center>
            <Table className="table table-light table-bordered" hover size="sm">
             
                <thead class="bg-light">
                    <th scope="col">Name </th>
                    <th scope="col">Email </th>
                    <th scope="col">Age </th>
                    <th scope="col">Location </th>
                    <th scope="col">ReportStatus </th>
                    <th scope="col">Blood Group </th>
                    <th scope="col">Contact Number </th>
                    <th scope="col">Gender </th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                   
                </thead>
                <tbody>
                    {personList.map(person => (
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>{person.age} </td>
                            <td>{person.location} </td>
                            <td>{person.reportstatus} </td>
                            <td>{person.bloodgroup} </td>
                            <td>{person.contactno} </td>
                            <td>{person.gender} </td>
                            <td>
                                <Link to={"/patients/"+person._id}>
                                    <button className="btn-warning">View</button>
                                </Link>
                        
                            </td>
                            <td>
                              
                              <Link to={"/list/"}>
                              <button className="btn-danger" onClick={() => deletePatient(person._id)} >Delete</button> 
                              <ToastContainer />
                                </Link>
                            </td>
                            <td>
                                <Link to={"/updatePatient/"+person._id}>
                                    <button className="btn-success">Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
           </Table>
            <br/>
            <div align="center">
            <Link to="patient">
                <button className="btn btn-outline-primary">Add New Patient</button>
            </Link>
            </div>
        </div>
    )
}
