import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../common/style.css";
import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import * as OceanLogo from "../common/images/logo.png";

class SecondaryMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row secondary-menu">
          <div className="col-md-6">
            <div className="secondary-menu-icon">
              <label>
                <i className="mdi mdi-menu" />
                MENU
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="secondary-menu-list">
              <ul className="list-unstyled">
                <li>
                  <a href="./#/hotelSearch">HOTEL</a>
                </li>
                <li>
                  <a href="./#/activitySearch">ACTIVITY</a>
                </li>
                <li>
                  <a href="./#/visa">VISA</a>
                </li>
                <li>
                  <a href="./#/packageSearch">PACKAGE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SecondaryMenu;
