import React from "react";
import {Link} from 'react-router-dom';
export class AdminHome extends React.Component{
    render(){
        return(
            <div className="container-fluid ml-auto mt-5 mb-3">
            <center>
                    <h1 style={{color:"black"}}>WELCOME ADMIN !!!</h1>
 
                    <Link to="/list"><button className="btn btn-outline-danger">Access Patient Details</button></Link>
                    </center>
            </div>
        )
    }
}