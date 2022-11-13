import React from "react";
import GeneralPractices from "../Components/Images/GeneralPractices.jpg";
import ddn from "../Components/Images/Do'sandDont's.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
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
        <div>
          <h3 style={{ textAlign: "center", color: "#404d61" }}>
            ‘We’re all in this together’  'Stay Home, Stay Safe'
          </h3>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={GeneralPractices} height="400px;" width="550;" />
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#404d61" }}>Prevention:</h3>
            <p style={{ fontSize: "25px" }}>
              {" "}
              The recomended preventive measures to reduce the chances of
              infection include getting vaccinated, staying at home, wearing a
              mask in public, avoiding crowded places, keeping distance from
              others, ventilating indoor spaces, managing potential exposure
              durations,washing hands with soap and water often and for at least
              twenty seconds, practising good respiratory hygiene, and avoiding
              touching the eyes, nose, or mouth with unwashed hands.
            </p>
            {/* <a href="/policies">
              <button class="btn btn-dark">Check our policies</button>
            </a> */}
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ color: "#404d61" }}>The general Do's and Dont's:</h3>
            <div style={{ fontSize: "25px" }}>
              <ul>
                <li>Wash hands with soap and water frequently.</li>
                <li>Use an alcohol-based hand sanitizer.</li>
                <li>
                  When coughing and sneezing, cover mouth and nose with
                  handkerchief or tissue. Dispose of the used tissue in a closed
                  bin.
                </li>
                <li>
                  Avoid close contact with anyone with cold, cough or ﬂu like
                  symptoms.
                </li>
                <li>Maintain safe distance of at least 1 meter from others.</li>
                <li>Avoid touching your eyes, nose, ears, and mouth.</li>
                <li>
                  Use a face mask:
                  <ol>
                    <li>
                      If you have symptoms (cough, fever or diﬃculty in
                      breathing).
                    </li>
                    <li>
                      You are caring for a COVID-19 suspect/conﬁrmed patient.
                    </li>
                    <li>You are a health worker.</li>
                    <li>
                      You have a job that entails public interaction such as
                      cashier/helper at a grocery store, security guards at a
                      housing society, etc.
                    </li>
                  </ol>
                </li>
                <li>
                  If you have cough, fever or diﬃculty in breathing, contact a
                  doctor immediately.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <img src={ddn} height="800px;" width="600px;" />

          </div>
        </div>
      </div>
    );
  }
}

export default Home;