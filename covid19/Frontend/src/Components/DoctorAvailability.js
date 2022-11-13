import React from "react";;
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
        <table class="table table table-bordered" border="10" style={{width: "100%"}}>
          <tr bgcolor="black">
            <th scope="row" style={{ color: "white" }}>S.No</th>
            <th style={{ color: "white" }}>Doctor Name</th>
            <th style={{ color: "white" }}>Specialization</th>
            <th style={{ color: "white" }}>In Time</th>
            <th style={{ color: "white" }}>Out Time</th>
          </tr>
          <tr bgcolor="red">
            <th scope="row">01</th>
            <td>Dr. William A. Abdu</td>
            <td>Orthopedics</td>
            <td>9:00</td>
            <td>14:00</td>
          </tr>
          <tr bgcolor="cyan">
            <th scope="row">02</th>
            <td>Dr. Myles. B. Abbott</td>
            <td>Pediatrician</td>
            <td>12:00</td>
            <td>15:00</td>
          </tr>
          <tr bgcolor="orange">
            <th scope="row">03</th>
            <td>Dr. Fouad. M. Abbas</td>
            <td>Oncologist</td>
            <td>10:00</td>
            <td>18:00</td>
          </tr>
          <tr bgcolor="#ADD8E6">
            <th scope="row">04</th>
            <td>Dr. Khalid Abbed</td>
            <td>Neurosurgery</td>
            <td>9:00</td>
            <td>21:00</td>
          </tr>
          <tr bgcolor="Crimson">
            <th scope="row">05</th>
            <td>Dr. Naresh Trehan</td>
            <td>Cardiologist</td>
            <td>10:00</td>
            <td>22:00</td>
          </tr>
          <tr bgcolor="LightSalmon">
            <th scope="row">06</th>
            <td>Dr. Arthur Reese Abright</td>
            <td>Psychiatry</td>
            <td>23:00</td>
            <td>9:00</td>
          </tr>
          <tr bgcolor="LightCoral">
            <th scope="row">07</th>
            <td>Dr. Corrie T.M Anderson</td>
            <td>Pediatric Anesthesiologist</td>
            <td>21:00</td>
            <td>6:00</td>
          </tr>
          <tr bgcolor="Moccasin"> 
            <th scope="row">08</th>
            <td>Dr. Mark. F. Aaron</td>
            <td>cardiologist</td>
            <td>18:00</td>
            <td>3:00</td>
          </tr>
          <tr bgcolor="Plum">
            <th scope="row">09</th>
            <td>Dr. Sudhansu Bhattacharyya</td>
            <td>Pulmonologist</td>
            <td>10:00</td>
            <td>15:00</td>
          </tr>
          <tr>
            <th scope="row">10</th>
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