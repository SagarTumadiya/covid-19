//Ramyashri Ravindran 901488
import React from "react";

import ReactTable from "react-table";
class DoctorAvailability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var msg = {
      textAlign: "center",
      fontFamily: "Nunito Sans",
      fontSize: "1.6rem",
    };
    return (
      <div style={msg}>
        <table style={{ width: "100%" }}>
          <tr>
            
            <th style={{ color: "#404d61" }}>Doctor Name</th>
            <th style={{ color: "#404d61" }}>Specialization</th>
            <th style={{ color: "#404d61" }}>In Time</th>
            <th style={{ color: "#404d61" }}>Out Time</th>
          </tr>
          <tr>
            
            <td>Dr. William A. Abdu</td>
            <td>Orthopedics</td>
            <td>9:00</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td>Dr. Myles. B. Abbott</td>
            <td>Pediatrician</td>
            <td>12:00</td>
            <td>15:00</td>
          </tr>
          <tr>
            <td>Dr. Fouad. M. Abbas</td>
            <td>Oncologist</td>
            <td>10:00</td>
            <td>18:00</td>
          </tr>
          <tr>
            <td>Dr. Khalid Abbed</td>
            <td>Neurosurgery</td>
            <td>9:00</td>
            <td>21:00</td>
          </tr>
          <tr>
            <td>Dr. Naresh Trehan</td>
            <td>Cardiologist</td>
            <td>10:00</td>
            <td>22:00</td>
          </tr>
          <tr>
            <td>Dr. Arthur Reese Abright</td>
            <td>Psychiatry</td>
            <td>23:00</td>
            <td>9:00</td>
          </tr>
          <tr>
            <td>Dr. Corrie T.M Anderson</td>
            <td>Pediatric Anesthesiologist</td>
            <td>21:00</td>
            <td>6:00</td>
          </tr>
          <tr>
            <td>Dr. Mark. F. Aaron</td>
            <td>cardiologist</td>
            <td>18:00</td>
            <td>3:00</td>
          </tr>
          <tr>
            <td>Dr. Sudhansu Bhattacharyya</td>
            <td>Pulmonologist</td>
            <td>10:00</td>
            <td>15:00</td>
          </tr>
          <tr>
            <td>Dr.Mona.M.Abaza</td>
            <td>Oncologist</td>
            <td>10:00</td>
            <td>22:00</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DoctorAvailability;