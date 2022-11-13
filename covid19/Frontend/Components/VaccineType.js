// Sathish Kumar K 901036
import React from "react";
import covaxin from "../Components/Images/Covaxin.jpeg";
import sput from "../Components/Images/SputnikV.jpeg";
import cs from "../Components/Images/Covishe.jpeg";
class VaccinesList extends React.Component {
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
            Vaccines List
          </h3>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={covaxin} height="350px;" width="550;" />
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#404d61" }}>Covaxin</h3>
            <p style={{ fontSize: "25px" }}>
              {" "}
              COVAXIN®, India's indigenous COVID-19 vaccine by Bharat Biotech is
              developed in collaboration with the Indian Council of Medical
              Research (ICMR) - National Institute of Virology (NIV).The vaccine
              is developed using Whole-Virion Inactivated Vero Cell derived
              platform technology. Inactivated vaccines do not replicate and are
              therefore unlikely to revert and cause pathological effects.
            </p>
            <h4 style={{ color: "#404d61" }}>Key Attributes:</h4>
            <ul style={{ fontSize: "25px" }}>
              <li>It is a 2-dose vaccination regimen given 28 days apart.</li>
              <li>
                The vaccine received DCGI approval for Phase I & II Human
                Clinical Trials in July, 2020.
              </li>
              <li>
                COVAXIN® is included along with immune-potentiators, also known
                as vaccine adjuvants, which are added to the vaccine to increase
                and boost its immunogenicity.
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={cs} height="550;" width="550;" />
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#404d61" }}>Covishield</h3>
            <p style={{ fontSize: "25px" }}>
              {" "}
              The AstraZeneca COVID-19 vaccine, now called Vaxzevria, is a viral
              vector vaccine, just like the vaccine from Johnson & Johnson. The
              vaccine uses a chimpanzee adenovirus to carry spike proteins from
              the coronavirus into your body to create an immune response. It
              can be produced on a large scale and inexpensively, which is
              crucial during a pandemic. It can also be kept in a regular
              refrigerator, unlike the vaccines from Pfizer and Moderna.
            </p>
            <h4 style={{ color: "#404d61" }}>Most common sympotoms include:</h4>
            <ul style={{ fontSize: "25px" }}>
              <li>Pain or tenderness at the injection site</li>
              <li>Headache</li>
              <li>Tiredness</li>
              <li>Muscle or joint aches</li>
              <li>Fever</li>
              <li>Chills</li>
              <li>Nausea</li>
            </ul>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <img src={sput} height="250;" width="550;" />
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#404d61" }}>Sputnik-V</h3>
            <p style={{ fontSize: "25px" }}>
              {" "}
              The Russian COVID-19 vaccine Sputnik V (Gam-COVID-Vac) is an
              adenoviral-based, two-part vaccine against the SARS-CoV-2
              coronavirus. Initially produced in Russia, Sputnik V uses a
              weakened virus to deliver small parts of a pathogen and stimulate
              an immune response. The imported vaccine has been priced at Rs 948
              per dose. However, including 5 per cent Goods and Services Tax,
              the price of this vaccine goes up to Rs 995.40 per dose.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VaccinesList;