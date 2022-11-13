import React, { Component } from 'react'
import { withRouter } from "react-router";
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Table} from 'react-bootstrap';


class Testing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             testing:{}
        }
    }

    componentDidMount() {
        console.log({props:this.props})
        const id = this.props.match.params.id
        axios.get(`http://localhost:5040/testing/${id}`)
         .then(response => {
             console.log(response.data)
             this.setState({testing: response.data})
         })
    }
    
    render() {
        const testing = this.state.testing
        return (
            <div align="center">
                    <div className="container  mt-5 mb-3 bg-light">
                        <form>
                            <h1>Testing Details</h1>
                    <Table bordered hover size="sm">
                    <thead>
                        
                        
                    </thead>
                        <tbody>
                        <tr>
                     <td>Testing Booking Id</td>
                        <td>{testing.testingId} <br/></td></tr>
                     <tr>
                     <td>First Name</td>
                        <td>{testing.firstName} <br/></td></tr>
                        
                      <tr> 
                      <td>Last Name</td>
                      <td>  {testing.lastName} <br/></td>
                      </tr>
                          <tr>

                          <td>Adhaar Number</td>
                       
                       <td>    {testing.adhaarNumber}</td>
                       </tr>
                       <tr>
                        <td>Address Line 1</td>

                       <td>   {testing.addressLine1}</td>
                       </tr>
                       <tr>
                        <td>Address Line 2</td>

                       <td>   {testing.addressLine2}</td>
                       </tr>
                       <tr>
                        <td>City</td>

                       <td>   {testing.city}</td>
                       </tr>
                       <tr>
                        <td>State</td>

                       <td>   {testing.state}</td>
                       </tr>
                       <tr>
                        <td>Date Of Birth</td>

                       <td>   {testing.dateOfBirth}</td>
                       </tr>
                       <tr>
                        <td>Date Of Testing</td>

                       <td>   {testing.dateOfTesting}</td>
                       </tr>
                       <tr>
                        <td>Age</td>

                       <td>   {testing.age}</td>
                       </tr>
                       <tr>
                        <td>Time Of Testing</td>

                       <td>   {testing.timeOfTesting}</td>
                       </tr>
                       <tr>
                        <td>Contact Number</td>

                       <td>   {testing.contactNumber}</td>
                       </tr>
                       <tr>
                        <td>Blood Group</td>

                       <td>   {testing.bloodGroup}</td>
                       </tr>
                       <tr>
                        <td>Gender</td>

                       <td>   {testing.gender}</td>
                       </tr>
                       <tr>
                        <td>Status</td>

                       <td>   {testing.status}</td>
                       </tr>
                        </tbody>
                        </Table>
                        </form>
                        
                    </div>
                    <Link to="/testingdetails" className="btn btn-outline-primary">Back</Link>
            </div>
        )
    }
}

export default withRouter(Testing);