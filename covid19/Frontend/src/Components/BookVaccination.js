import React,{useState} from "react";
import axios from 'axios'


export default function BookVaccination (props) {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [adhaarNumber, setAdhaarNumber] = useState('')
    const[addressLine1, setAddressLine1] = useState('')
    const[addressLine2, setAddressLine2] = useState('')
    const [age, setAge] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState('')
    const[bloodGroup, setBloodGroup] = useState('')
    const[dateOfBirth, setDateOfBirth] = useState('')
    const[contactNumber, setContactNumber] = useState('')
    const[gender, setGender] = useState('')
    const[dateOfVaccination, setDateOfVaccination] = useState('') 
    const[vaccineType, setVaccineType] = useState('')
    const[timeOfVaccination, setTimeOfVaccination] = useState('')



    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5040/vaccine',{
            
            firstName: firstName,
            lastName: lastName,
            adhaarNumber: adhaarNumber,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            age: age,
            city: city,
            state: state,
            bloodGroup: bloodGroup,
            dateOfBirth: dateOfBirth,
            contactNumber: contactNumber,
            gender: gender,
            dateOfVaccination: dateOfVaccination,
            vaccineType: vaccineType,
            timeOfVaccination: timeOfVaccination

        }
        

        )
        .then(res => {
            console.log("Data added")
            alert("Your appointment has been booked successfully.")
            props.history.push("/")
        })
        .catch(err => console.log(err))
    }

    return (
      <div class="container-fluid">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js"
          type="text/javascript"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{Typekit.load({ async: true });}catch(e){}",
          }}
        ></script>
        

        <br></br>
        <h4 style={{ textAlign: "center", color: "#404d61" }}>
          Appointment For Vaccination
        </h4>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="fname" style={{ fontSize: "20px" }}>
                First Name:
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                pattern="[A-Za-z]+"
                minLength="3"
                maxLength="20"
                title="Input should be alphabets only"
                required
                onChange={e => setFirstName(e.target.value)}
               
              />
            </div>
            <br></br>
            <div class="form-group col-md-4">
              <label for="mname" style={{ fontSize: "20px" }}>
                Last Name:
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                pattern="[A-Za-z]+"
                title="Input should be alphabets only"
                required
                onChange={e => setLastName(e.target.value)}
                
                
              />
            </div>
            <br></br>
            <div class="form-group col-md-4">
              <label for="mname" style={{ fontSize: "20px" }}>
                Adhaar Number :
              </label>
              <input
                type="number"
                class="form-control"
                id="adhaarNumber"
                name="adhaarNumber"
                value={adhaarNumber}
                placeholder="XXXX-XXXX-XXXX"
                pattern="[0-9]{12}"
                title="Input should be numericals and 12 digits only"
                required
                onChange={e => setAdhaarNumber(e.target.value)}
              
                
              />
            </div>
          </div>
          <br></br>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="add1" style={{ fontSize: "20px" }}>
                Address Line 1:
              </label>
              <input
                type="text"
                class="form-control"
                id="addressLine1"
                name="addressLine1"
                value={addressLine1}
                placeholder="Address"
                pattern="[A-Za-z0-9,. ]+"
                title="Input should be alphabets only"
                required
                onChange={e => setAddressLine1(e.target.value)}
               
               
              />
            </div>
            <br></br>
            <div class="col-md-6">
              <label for="add2" style={{ fontSize: "20px" }}>
                Address Line 2:
              </label>
              <input
                type="text"
                class="form-control"
                id="addressLine2"
                name="addressLine2"
                value={addressLine2}
                placeholder="Address"
                pattern="[A-Za-z0-9,. ]+"
                title="Input should be alphabets only"
                required
                onChange={e => setAddressLine2(e.target.value)}
               
                
              />
            </div>
          </div>
          <br></br>
          <div class="form-row">
            <div class="col-md-4">
              <label for="city" style={{ fontSize: "20px" }}>
                City:
              </label>
              <input
                type="text"
                class="form-control"
                id="city"
                name="city"
                value={city}
                placeholder="City"
                pattern="[A-Za-z]+"
                title="Input should be alphabets only"
                required
                onChange={e => setCity(e.target.value)}
               
                
              />
            </div>
            <div class="col-md-4">
              <label for="state" style={{ fontSize: "20px" }}>
                State:
              </label>
              <input
                type="text"
                class="form-control"
                id="state"
                name="state"
                value={state}
                placeholder="State"
                pattern="[A-Za-z ]+"
                title="Input should be alphabets only"
                required
                onChange={e => setState(e.target.value)}
              
                
              />
            </div>
            <br></br>

            <div class="col-md-4">
              <label for="Dob" style={{ fontSize: "20px" }}>
                Date Of Birth:
              </label>
              <input
                type="date"
                class="form-control"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
                required
                onChange={e => setDateOfBirth(e.target.value)}
                
               
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="dept" style={{ fontSize: "20px" }}>
                Select Vaccine:
                </label><br></br>
                <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="vaccineType"
                  id="vaccineType"
                  value="Covaxin"
                  onChange={e => setVaccineType(e.target.value)}
                />
                <label
                  class="form-check-label"
                  for="inlineRadio1"
                  style={{ fontSize: "20px" }}
                >
                  Covaxin
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="vaccineType"
                  id="vaccineType"
                  value="Covishield"
                  onChange={e => setVaccineType(e.target.value)}
                />
                <label
                  class="form-check-label"
                  for="inlineRadio2"
                  style={{ fontSize: "20px" }}
                >
                  Covishield
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="vaccineType"
                  id="vaccineType"
                  value="SputnikV"
                  onChange={e => setVaccineType(e.target.value)}
                />
                <label
                  class="form-check-label"
                  for="inlineRadio2"
                  style={{ fontSize: "20px" }}
                >
                  SputnikV
                </label>
              </div>
            
             
            </div>
            <div class="form-group col-md-4">
              <label for="mname" style={{ fontSize: "20px" }}>
                Age:
              </label>
              <input
                type="number"
                class="form-control"
                id="age"
                name="age"
                value={age}
                placeholder="Age"
                pattern="[1-9]{2}"
                title="Input should be numericals and 2 digits only"
                required
                onChange={e => setAge(e.target.value)}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inlineRadio1" style={{ fontSize: "20px" }}>
                Gender:
              </label>
              <br></br>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  value="male"
                  onChange={e => setGender(e.target.value)}
                />
                <label
                  class="form-check-label"
                  for="inlineRadio1"
                  style={{ fontSize: "20px" }}
                >
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender"
                  value="female"
                  onChange={e => setGender(e.target.value)}
                />
                <label
                  class="form-check-label"
                  for="inlineRadio2"
                  style={{ fontSize: "20px" }}
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          <br></br>

          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="Dob" style={{ fontSize: "20px" }}>
                Date Of Vaccination:
              </label>
              <input
                type="date"
                class="form-control"
                id="dateOfVaccination"
                name="dateOfVaccination"
                value={dateOfVaccination}
                placeholder="DD-MM-YYYY"
                required
                onChange={e => setDateOfVaccination(e.target.value)}
                
                
              />
            </div>
            <div class="form-group col-md-3">
              <label for="Dob" style={{ fontSize: "20px" }}>
                Time Of Vaccination:
              </label>
              <input
                type="time"
                class="form-control"
                id="timeOfVaccination"
                name="timeOfVaccination"
                value={timeOfVaccination}
                placeholder="HH-MM-(24hr)"
                required
                onChange={e => setTimeOfVaccination(e.target.value)}
               
                
              />
            </div>
            <div class="form-group col-md-3">
              <label for="Dob" style={{ fontSize: "20px" }}>
                Contact Number:
              </label>
              <input
                type="number"
                class="form-control"
                id="contactNumber"
                name="contactNumber"
                value={contactNumber}
                placeholder="Contact"
                pattern="[0-9]{10}"
                title="Input should be numericals and 10 digits only"
                required
                onChange={e => setContactNumber(e.target.value)}
                
                
              />
            </div>
            <div class="form-group col-md-3">
              <label for="Dob" style={{ fontSize: "20px" }}>
                Blood Group:
              </label>
              <input
                type="text"
                class="form-control"
                id="bloodGroup"
                name="bloodGroup"
                value={bloodGroup}
                placeholder="Blood Group"
                required
                onChange={e => setBloodGroup(e.target.value)}
                
                
                
              />
            </div>
          </div>

          <br></br>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          
        </form>
      </div>
    )
  }


// export default VaccinationReg;