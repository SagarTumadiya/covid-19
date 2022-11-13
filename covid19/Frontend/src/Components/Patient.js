import React, { Component } from 'react'
import { withRouter } from "react-router";
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Table} from 'react-bootstrap';


class Patient extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             person:{}
        }
    }

    componentDidMount() {
        console.log({props:this.props})
        const id = this.props.match.params.id
        axios.get(`http://localhost:5040/person/${id}`)
         .then(response => {
             console.log(response.data)
             this.setState({person: response.data})
         })
    }
    
    render() {
        const person = this.state.person
        return (
            <div align="center">
                    <div className="container  mt-5 mb-3 bg-light">
                        <form>
                            <h1>Patient Details</h1>
                    <Table bordered hover size="sm">
                    <thead>
                        
                        
                    </thead>
                        <tbody>
                        <tr>
                     <td>Patient Id</td>
                        <td>{person.id} <br/></td></tr>
                     <tr>
                     <td>Patient Name</td>
                        <td>{person.name} <br/></td></tr>
                        
                      <tr> 
                      <td>Email</td>
                      <td>  {person.email} <br/></td>
                      </tr>
                          <tr>

                          <td>Age</td>
                       
                       <td>    {person.age}</td>
                       </tr>
                       <tr>
                        <td>Patient Location</td>

                       <td>   {person.location}</td>
                       </tr>
                       <tr>
                        <td>Report Status</td>

                       <td>   {person.reportstatus}</td>
                       </tr>
                       <tr>
                        <td>Blood Group</td>

                       <td>   {person.bloodgroup}</td>
                       </tr>
                       <tr>
                        <td>Contact Number</td>

                       <td>   {person.contactno}</td>
                       </tr>
                       <tr>
                        <td>Gender</td>

                       <td>   {person.gender}</td>
                       </tr>
                        </tbody>
                        </Table>
                        </form>
                        
                    </div>
                    <Link to="/list" className="btn btn-outline-primary">Back</Link>
            </div>
        )
    }
}

export default withRouter(Patient);