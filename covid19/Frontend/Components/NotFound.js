// Manikandan M 901363
import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    var background = {
      backgroundColor: "#e79898",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "1080px",
    };

    var mainbox = {
      backgroundColor: "#e79898",
      margin: "auto",
      height: "600px",
      width: "600px",
      position: "relative",
    };

    var err = {
      color: "#ffffff",
      fontFamily: "Nunito Sans",
      fontSize: "11rem",
      position: "absolute",
      left: "20%",
      top: "8%",
    };

    var far = {
      position: "absolute",
      fontSize: "10.3rem",
      left: "44%",
      top: "8%",
      color: "#ffffff",
    };

    var err2 = {
      color: "#ffffff",
      fontFamily: "Nunito Sans",
      fontSize: "11rem",
      position: "absolute",
      left: "68%",
      top: "8%",
    };

    var msg = {
      textAlign: "center",
      fontFamily: "Nunito Sans",
      fontSize: "1.6rem",
      position: "absolute",
      left: "16%",
      top: "45%",
      width: "75%",
    };

    var a = {
      textDecoration: "none",
      color: "white",
    };

    return (
      <div style={background}>
        <div style={mainbox}>
          <div style={err}>4</div>
          <div style={far}>0</div>
          <div style={err2}>4</div>
          <div style={msg}>
            Maybe this page moved, got deleted or never existed in the first
            place .
            <p>
              Let's go{" "}
              <a style={a} href="/">
                home
              </a>{" "}
              and try from there.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;