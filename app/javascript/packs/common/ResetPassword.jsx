import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./style.css";

import * as GBLogo from "../common/images/global-beds-logo.png";
import Header from "../common/Header";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* header section */}
        <nav className="navbar navbar-default header-section">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img src={GBLogo} />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse" />
        </nav>
        {/* resetpassword */}
        <div className="resetpassword-wrapper">
          <div className="reset-password-heading">
            <h5>Reset Password</h5>
          </div>
          <div className="reset-password-form common-form">

            { /*<div className="alert alert-success alert-dismissible" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <div className="alert alert-success alert-dismissible" role="alert">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              Well done! You successfully read this important alert message.
            </div>
            <div className="alert alert-danger alert-dismissible" role="alert">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              Oh snap! Change a few things up and try submitting again.
            </div> */}
            <div className="form-group">
              <label>Enter E-mail address</label>
              <input type="text" className="form-control" />
            </div>
            <a href className="btn btn-orange text-right">
              SUBMIT
            </a>
          </div>
        </div>
        {/* Js */}
      </div>
    );
  }
}

export default ResetPassword;
