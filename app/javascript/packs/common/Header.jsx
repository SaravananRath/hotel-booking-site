import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../common/style.css";
import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import * as OceanLogo from "../common/images/logo.png";
import * as Country from "../common/images/country.png";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
              <img src={OceanLogo} />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="country-dropdown dropdown">
                  <button
                    className="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <label className="p-name">
                      <h5>
                        <img src={Country} />
                        country
                      </h5>
                    </label>
                    <i className="mdi mdi-chevron-down" />
                  </button>
                  <div className="dropdown-menu">
                    <ul className="list-unstyled">
                      <li>
                        <img src={Country} />
                        India
                      </li>
                      <li>
                        <img src={Country} />
                        Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile-section">
                  <div className="dropdown">
                    <button
                      className="btn btn-default dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      <label className="p-name">
                        <h5>BALASUBRAMANI V</h5>
                      </label>
                      <i className="mdi mdi-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="">Change Password</a>
                        </li>
                        <li>
                          <a href="">Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
