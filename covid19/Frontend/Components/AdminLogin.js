// Manikandan M 901363
import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../Stylesheets/mystyle.css";
import { AuthContext } from "../App";
import axios from "axios";

export const AdminLogin = (props) => {
  const { dispatch } = React.useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    errors: {
      email: "",
      pass: "",
    },
    invalidLogin: "",
  };

  const [state, setState] = useState(initialState);

  let passError, emailError;
  const validateForm = () => {
    let emailError = "";
    let passwordError = "";
    console.log(state.email);
    if (state.email === "") emailError = "Email Is Required";
    if (state.password === "") passwordError = "Password Is Required";
    if (emailError === "" && passwordError === "") {
      return true;
    } else {
      let err = {
        email: emailError,
        pass: passwordError,
      };

      setState({
        ...state,
        errors: err,
        invalidLogin: "",
      });
    }
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    let val = validateForm();
    console.log(val);
    console.log(state.errors);
    if (val) {
      let user = {
        email: state.email,
        password: state.password,
      };

      axios
        .post("http://localhost:8080/login", user)
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: "LOGIN",
            payload: {
              user: state.email,
              token: "token",
            },
          });
          props.history.push("/adminhome");
        })
        .catch((err) => {
          setState({
            ...state,
            errors: {
              email: "",
              pass: "",
            },
            invalidLogin: "Invalid Email/Password",
          });
        });
    }
  }

  return (
    <div class="img">
    <div align="right" style={{marginRight:"200px"}}>
      <div className="container  mt-7 mb-3">
        <div className=" login">
          <h1 align="center">Welcome,Please Login. </h1>
          <div className="container">
            
            <form onSubmit={handleSubmit}>
              <div className="form-row mb-2 mt-2">
                <div align="left" className="form-group col-12">
                <label htmlFor="inputEmail Address">
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="form-row mb-2 ">
                <div align="left" className="form-group col-12 ">
                  <label htmlFor="inputPassword">
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />

                  <div id="id2" className="text-danger"></div>
                </div>
              </div>
              <div align="left" style={{ color: "#ff0000" }} className="mt-3">
              <ul>
                {state.errors.email !== "" ? <li>{state.errors.email}</li> : ""}
                {state.errors.pass !== "" ? <li>{state.errors.pass}</li> : ""}
                {state.invalidLogin !== "" ? <li>{state.invalidLogin}</li> : ""}
              </ul>
            </div>
              <div  className="d-flex  flex-row">
                <button type="submit" className="btn btn-outline-primary mb-4 mx-auto">
                  {" "}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;