import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../Stylesheets/mystyle.css";
import { NavLink,Link } from "react-router-dom";
import {NavDropdown} from 'react-bootstrap';

import React, { useState } from "react";
import { AuthContext } from "../App";

function NavComponent() {
  const { state, dispatch } = React.useContext(AuthContext);
  let menulist;
  if (!state.isAuthenticated)
    menulist = (
      <>
         <li className="nav-item ">
          <NavLink className="nav-link " exact to="/">
          Home
          </NavLink>
        </li>
               
        
        <li className="nav-item ml-auto" >
        <NavDropdown title="Vaccination" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link class="text-decoration-none" to="/vaccination">Book Appointment</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link class="text-decoration-none" to="/vaccinestatus">Check Appointment Status</Link></NavDropdown.Item>
        
       
      </NavDropdown>
        </li>
        <li className="nav-item ml-auto" >
        <NavDropdown title="Testing" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link class="text-decoration-none" to="/testing">Book Appointment</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link class="text-decoration-none" to="/testingstatus">Check Appointment Status</Link></NavDropdown.Item>
        
       
      </NavDropdown>
        </li>
      
        
        <li className="nav-item ">
          <NavLink className="nav-link " exact to="/doctoravl">
            Doctor's Availability
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link " exact to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link " exact to="/login">
            Admin
          </NavLink>
        </li>
        
      
      </>
    );
  else
    menulist = (
      <>
        <li className="nav-item ml-auto">
          <NavLink className="nav-link " to="/adminhome">
            Home
          </NavLink>
        </li>
        
        <li className="nav-item ml-auto" >
        <NavDropdown title="Patient" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link class="text-decoration-none" to="/patient">Add Patient Details</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link class="text-decoration-none" to="/list">Access Patient Details</Link></NavDropdown.Item>
        
       
      </NavDropdown>
        </li>
        
        <li className="nav-item ml-auto">
          <NavLink className="nav-link " to="/testingdetails">
            Testing details
          </NavLink>
        </li>
        <li className="nav-item ml-auto">
          <NavLink className="nav-link " to="/vaccinedetails">
            Vaccination details
          </NavLink>
        </li>
      
        <li className="nav-item ml-auto">
          <NavLink
            className="nav-link"
             exact
            to="/"
            onClick={() => {
              dispatch({
                type: "LOGOUT",
              });
            }}
          >
            Logout
          </NavLink>
        </li>
      </>
    );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
        <a className="navbar-brand" href="/adminhome">
          COVID 19 TRACKER
        </a>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ml-auto">{menulist}</ul>
        </div>
      </nav>
    </>
  );
}

export default NavComponent;
