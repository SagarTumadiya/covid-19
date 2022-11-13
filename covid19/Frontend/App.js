import logo from "./logo.svg";
import "./App.css";
import NavComponent from "./Components/NavComponent";
import AdminLogin from "./Components/AdminLogin";
import BookTesting from "./Components/BookTesting";
import BookVaccination from "./Components/BookVaccination";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import NotFound from "./Components/NotFound";
import Vaccine from "./Components/Vaccine";
import EditVaccineDetails from "./Components/EditVaccineDetails";
import Testing from "./Components/Testing";
import TestingList from "./Components/TestingList"
import EditTestingDetails from "./Components/EditTestingDetails"
import SearchRecordTesting from "./Components/SearchRecordTesting"
import SearchRecordVaccination from "./Components/SearchRecordVaccination"
import VaccineType from "./Components/VaccineType"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import { AdminHome } from "./Components/AdminHome";
import AddPatient from "./Components/AddPatient";
import VaccineList from "./Components/VaccineList";
import PatientsList from "./Components/PatientsList";

import EditPatient from "./Components/EditPatient";
import Patient from "./Components/Patient";
import DoctorAvailability from "./Components/DoctorAvailability";
import { ResourceAvailability } from "./Components/ResourceAvailability";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const ProtectedRoute = ({
  component: Component,
  authstate: state,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        console.log(localStorage.getItem("user"));
        if (!localStorage.getItem("user")) return <Redirect to="/" />;
        else return <Component />;
        console.log("Hello2");
      }}
    />
  );
};
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    const token = JSON.parse(localStorage.getItem("token") || null);

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token,
        },
      });
    }
  }, []);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        
        <NavComponent />
        <Switch>
          <Route path="/login" exact component={AdminLogin} />
          <Route path="/testing" exact component={BookTesting} />
          <Route path="/vaccination" exact component={BookVaccination} />
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/vaccinestatus"  component={SearchRecordVaccination}/>
          <Route path="/testingstatus"  component={SearchRecordTesting}/>
          <Route path="/doctoravl" component={DoctorAvailability}/>
          <Route path="/typeofvaccine" component={VaccineType}/>

          <ProtectedRoute
            path="/adminhome"
            authstate={state}
            component={AdminHome}
          />

          <ProtectedRoute
            path="/patient"
            authstate={state}
            component={AddPatient}
          />
           <ProtectedRoute
            path="/vaccinedetails"
            authstate={state}
            component={VaccineList}
          />
          <ProtectedRoute
            path="/testingdetails"
            authstate={state}
            component={TestingList}
          />
          
            <ProtectedRoute
            path="/list"
            authstate={state}
            component={PatientsList}
          />
           <ProtectedRoute
            path="/patients/:id" 
            authstate={state}
            component={Patient}
          />
          <ProtectedRoute
            path="/vaccine/:id" 
            authstate={state}
            component={Vaccine}
          />
          <ProtectedRoute
            path="/testing/:id" 
            authstate={state}
            component={Testing}
          />
           
           
          <ProtectedRoute
            path="/updatePatient/:id" 
            authstate={state}
            component={EditPatient}
          />
            
            <ProtectedRoute
            path="/updateVaccine/:id" 
            authstate={state}
            component={EditVaccineDetails}
          />
          <ProtectedRoute
            path="/resource" 
            authstate={state}
            component={ResourceAvailability}
          />
           <ProtectedRoute
            path="/updateTesting/:id" 
            authstate={state}
            component={EditTestingDetails}
          />
          <Route path="/*" exact component={NotFound}></Route>
        
        </Switch>

      </AuthContext.Provider>
    </Router>
  );
}

export default App;
