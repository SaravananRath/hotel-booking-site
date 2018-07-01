import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../common/style.css";
import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import * as OceanLogo from "../common/images/logo.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row footer-section">
          <div className="col-md-3">
            <div className="footer-links">
              <div className="footer-logo">
                <img src={OceanLogo} />
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:global@globalbeds.com">
                    global@globalbeds.com
                  </a>
                </li>
                <li>+90 212 231 6693</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h5>Site Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="./#/terms_and_conditions">Terms and Conditions</a>
                </li>
                <li>
                  <a href="./#/privacy_policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h5>Customer Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="cutomer-support">
                    <i className="mdi mdi-account" />
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links social-links">
              <h5>Social</h5>
              <ul className="list-unstyled">
                <li>
                  <label>
                    <a href="">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="">
                      <i className="mdi mdi-pinterest" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <label>Copyright © 2018 Global Beds</label>
        </div>
      </div>
    );
  }
}

export default Footer;
