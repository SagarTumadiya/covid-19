// Manikandan M 901363
import React from "react";
import {Table} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class SearchRecordVaccination extends React.Component{
    constructor(){
        super();
        this.state={
            adhaarNumber:'',
           
            flag:false,
            data:[],
        }
    }
    aadhaarNumberHandler=(event)=>{
        this.setState({
            adhaarNumber:event.target.value
        })
    }
    
    async fetchData(){
      
        var id=this.state.adhaarNumber;
        const response=await axios.get(`http://localhost:8080/record/${id}`)
          if(response.data==='')
          {
            toast.error('Please enter valid adhaar number',{position:"top-center"});
          }
          else{
            this.setState({
              data:response.data,
              flag:true
            })
          }
     
    }
    
    render(){
      //console.log(new Date(), this.state.data.dateOfVaccination);
        return(
            <div className="container  mt-5 mb-3">
              {this.state.flag?'':
            <div className="row ">
                <div className="col-md-13">
              <center><h3>Check Vaccine Appointment Status</h3></center>
              <br/><br/>
              <center><label><h5>Kindly enter your Aadhaar Number:</h5></label></center>
              <center><input type="text" placeholder="xxxx-xxxx-xxxx" onChange={this.aadhaarNumberHandler}/></center>
              <br/><br/>
              <center><button class="btn btn-dark"  onClick={this.fetchData.bind(this)}>Verify</button><ToastContainer/></center>
              </div>
              <div className="col-md-4"></div>
              
            </div>}
          {this.state.flag?
          <div><center><h3>Vaccination Detail</h3><br/>
          <div class="box" style={this.state.data && new Date(this.state.data.dateOfVaccination) < new Date(new Date().setHours(0,0,0,0)) ? {borderColor: 'red'} : new Date(this.state.data.dateOfVaccination).setHours(0,0,0,0) === new Date().setHours(0,0,0,0) ? {borderColor: 'green'} : {}}> 
          <div><h4>Hi, {this.state.data.firstName} {this.state.data.lastName},</h4></div>
          <div style={this.state.data && new Date(this.state.data.dateOfVaccination) < new Date(new Date().setHours(0,0,0,0)) ? {color: 'red'} : new Date(this.state.data.dateOfVaccination).setHours(0,0,0,0) === new Date().setHours(0,0,0,0) ? {color: 'green'} : {color:'navy'}}><h7>Vaccination Appointment has been {this.state.data.status}</h7></div>
          </div>
          </center>
          <br></br>
          
    <Table striped bordered hover>
      
  <thead>
    <tr>
      
                    <th scope="col">Aadhar Number</th>
                    <th scope="col">Address Line 1 </th>
                    <th scope="col">Address Line 2 </th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Date of Birth </th>
                    <th scope="col">Vacination Type</th>
                    <th scope="col">Date of Vaccination</th>
                    <th scope="col">Time of Vaccination</th>
                    <th scope="col">Age</th>
                    <th scope="col">Contact number</th>
                    <th scope="col">Blood group</th>
                    <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
                            
                            <td>{this.state.data.adhaarNumber} </td>
                            <td>{this.state.data.addressLine1} </td>
                            <td>{this.state.data.addressLine2} </td>
                            <td>{this.state.data.city} </td>
                            <td>{this.state.data.state} </td>
                            <td>{this.state.data.dateOfBirth} </td>
                            <td>{this.state.data.vaccineType} </td>
                            <td>{this.state.data.dateOfVaccination}</td>
                            <td>{this.state.data.timeOfVaccination}</td>
                            <td>{this.state.data.age} </td>
                            <td>{this.state.data.contactNumber} </td>
                            <td>{this.state.data.bloodGroup} </td>
                            <td>{this.state.data.gender} </td>
                            
    </tr>
  </tbody>
</Table><center><Link to="/" className="btn btn-outline-primary">Back</Link></center>
</div>:''}

</div>
        );
    }
}
export default SearchRecordVaccination;