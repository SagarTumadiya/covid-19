//Pratyush P Menon 901337
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function MenuComponent() {
  return (
    <>
      <section className="top">
        <Navbar style={{ height: "75px" }} bg="light" expand="lg">
          <Navbar.Brand
            href=""
            style={{ fontSize: "25px", margin: "25px", color: "#404d61" }}
          >
            {" "}
            Medico
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <NavLink
                    style={{ fontSize: "20px" }}
                    className="nav-link "
                    exact
                    to="/Home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{ fontSize: "20px" }}
                    className="nav-link "
                    to="/Testing"
                  >
                    Testing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{ fontSize: "20px" }}
                    className="nav-link"
                    to="/Vaccination"
                  >
                    Vaccination
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{ fontSize: "20px" }}
                    className="nav-link"
                    to="/Availability"
                  >
                    Availability
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{ fontSize: "20px" }}
                    className="nav-link"
                    to="/ContactUs"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={{ fontSize: "20px" }}
                    className="nav-link"
                    to="/"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
}

export default MenuComponent;