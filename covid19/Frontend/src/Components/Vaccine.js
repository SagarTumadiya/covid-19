import React, { Component } from 'react'
import { withRouter } from "react-router";
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Table} from 'react-bootstrap';


class Vaccine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vaccine:{}
        }
    }

    componentDidMount() {
        console.log({props:this.props})
        const id = this.props.match.params.id
        axios.get(`http://localhost:5040/vaccine/${id}`)
         .then(response => {
             console.log(response.data)
             this.setState({vaccine: response.data})
         })
    }
    
    render() {
        const vaccine = this.state.vaccine
        return (
            <div align="center">
                    <div className="container  mt-5 mb-3 bg-light">
                        <form>
                            <h1>Vaccine Details</h1>
                    <Table bordered hover size="sm">
                    <thead>
                        
                        
                    </thead>
                        <tbody>
                        <tr>
                     <td>Vaccine Booking Id</td>
                        <td>{vaccine.vaccineId} <br/></td></tr>
                     <tr>
                     <td>First Name</td>
                        <td>{vaccine.firstName} <br/></td></tr>
                        
                      <tr> 
                      <td>Last Name</td>
                      <td>  {vaccine.lastName} <br/></td>
                      </tr>
                          <tr>

                          <td>Adhaar Number</td>
                       
                       <td>    {vaccine.adhaarNumber}</td>
                       </tr>
                       <tr>
                        <td>Address Line 1</td>

                       <td>   {vaccine.addressLine1}</td>
                       </tr>
                       <tr>
                        <td>Address Line 2</td>

                       <td>   {vaccine.addressLine2}</td>
                       </tr>
                       <tr>
                        <td>City</td>

                       <td>   {vaccine.city}</td>
                       </tr>
                       <tr>
                        <td>State</td>

                       <td>   {vaccine.state}</td>
                       </tr>
                       <tr>
                        <td>Date Of Birth</td>

                       <td>   {vaccine.dateOfBirth}</td>
                       </tr>
                       <tr>
                        <td>Date Of Vaccination</td>

                       <td>   {vaccine.dateOfVaccination}</td>
                       </tr>
                       <tr>
                        <td>Vaccination Type </td>

                       <td>   {vaccine.vaccineType}</td>
                       </tr>
                       <tr>
                        <td>Age</td>

                       <td>   {vaccine.age}</td>
                       </tr>
                       <tr>
                        <td>Time Of Vaccination</td>

                       <td>   {vaccine.timeOfVaccination}</td>
                       </tr>
                       <tr>
                        <td>Contact Number</td>

                       <td>   {vaccine.contactNumber}</td>
                       </tr>
                       <tr>
                        <td>Blood Group</td>

                       <td>   {vaccine.bloodGroup}</td>
                       </tr>
                       <tr>
                        <td>Gender</td>

                       <td>   {vaccine.gender}</td>
                       </tr>
                       <tr>
                        <td>Status</td>

                       <td>   {vaccine.status}</td>
                       </tr>
                        </tbody>
                        </Table>
                        </form>
                        
                    </div>
                    <Link to="/vaccinedetails" className="btn btn-outline-primary">Back</Link>
            </div>
        )
    }
}

export default withRouter(Vaccine);