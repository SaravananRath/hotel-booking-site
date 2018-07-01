// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

import * as DorakLogo from "../images/doraklogo.png";
import * as GlobalBedsLogo from "../images/globalbedslogo.png";

import * as USDCurrency from "../images/currencyandflag/USD_currency.png";
import * as USDFlag from "../images/currencyandflag/USD_flag.png";
import * as Cart from "../images/common/cart.png";
import * as User from "../images/user/user.png";
import * as UserIcon from "../images/user/user_icon.png";
import axios from 'axios'
import "./header_footer.css";

export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fields: {
        email: '',
        password: ''
      },
      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "E-Mail is required!";
      alert(errors["email"]);
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Please enter a valid E-Mail";
        alert(errors["email"]);
      }
    }


    if (!fields["password"]) {
      formIsValid = false;
      errors["name"] = "Password is required!";
      alert(errors["password"]);
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  login = (e) => {
    let fields = this.state.fields;
    e.preventDefault();
    if (this.handleValidation()) {

      axios.post('http://localhost:3000/users/sign_in',
        {
          user:
          {
            email: this.state.fields["email"],
            password: this.state.fields["password"]
          }

        })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {
            alert("Logged in successfully");
          }
        })
        .catch(function (error) {
          alert("Invalid Email or Password.");
        });

      return true;
    }
  }

  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="global-logo">
                <div className="global-logo-inner">
                  <a href="" className="dorak-header">
                    <img alt="globalbeds_logo" src={GlobalBedsLogo} />
                    <small>By</small>
                    <img alt="dorak_logo" className="dorak-nav-img" src={DorakLogo} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="Gbeds-login">
                <form onSubmit={this.login} method="post" id="user-login" acceptCharset="UTF-8">
                  <div>
                    <div className="form-item form-item-name form-type-textfield form-group">
                      <label className="control-label" htmlFor="edit-name">
                        Username
    <span className="form-required" title="This field is required.">*</span>
                      </label>
                      <input placeholder="Enter Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} className="form-control form-text required" title="Enter your Global Beds username." data-toggle="tooltip" type="text" id="edit-name" name="email" size="60" maxLength="60" required />
                    </div>
                    <div className="form-item form-item-pass form-type-password form-group">
                      <label className="control-label" htmlFor="edit-pass">
                        Password
    <span className="form-required" title="This field is required.">*</span>
                      </label>
                      <input placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} className="form-control form-text required" title="Enter the password that accompanies your username." data-toggle="tooltip" type="password" id="edit-pass" name="password" size="60" maxLength="128" required />
                    </div>
                    <input type="hidden" name="url" value="" />
                    <input type="hidden" name="form_build_id" value="form-vKXua094lqksC_VkpX_prpuJyuBooo7VSzPFBB74whw" />
                    <input type="hidden" name="form_id" value="user_login" />
                    <div className="form-actions form-wrapper form-group" id="edit-actions">
                      <button type="submit" id="edit-submit" name="op" value="Log in" className="btn btn-default form-submit" >Log in</button>
                    </div>
                  </div>
                </form>
                <a className="forgot_password" href="user/password.html">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class HomeFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 text-left">
                <div className="footer-br">
                  <div className="MT10">
                    <Link to="terms_and_conditions" target="_blank">Terms and Conditions</Link> /
      <Link to="privacy_policy" target="_blank" >Privacy Policy</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1 text-left">
                <div className="footer-br">
                  <div className="MT10">
                    <a href="http://dorakholding.com.tr/en/sectors-tourism.html" target="_blank">About Us</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                <div className="footer-br">
                  <div className="MT10">
                    <i className="fa fa-envelope" />
                    <a href="mailto:global@globalbeds.com">global@globalbeds.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 text-center">
                <div className="footer-br">
                  <div className="MT10">
                    <i className="fa fa-phone" />
                    <span>+90 212 231 6693</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 pad-t10">
                <div className="footer-br no-bor social">
                  <a className="linkdin" title="" href="https://www.linkedin.com/company/global-beds" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="twitter" title="" href="https://twitter.com/Global_Beds" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="facebook" title="" href="https://www.facebook.com/GlobalBedsTravelWholesaler" target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                  <a className="instagram" title="" href="https://www.instagram.com/globalbeds" target="_blank">
                    <i className="fa fa-instagram" />
                  </a>
                  <a className="pinteres" title="" href="https://www.pinterest.com/globalbeds" target="_blank">
                    <i className="fa fa-pinterest-p" />
                  </a>
                  <a className="youtube" title="" href="https://www.youtube.com/channel/UCHi_9dg0KvBrHqHEOeJzODQ"
                    target="_blank">
                    <i className="fa fa-youtube-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copy_right">
            <div className="container text-center">
              <span>Copyright © 2017 Global Beds</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="navbar" role="banner" class="navbar container navbar-default">
        <div class="row">
          <div class="col-lg-3 col-sm-3 col-md-3">
            <div class="navbar-header">
              <a class="logo navbar-btn pull-left dorak-header" href="http://104.236.94.145/globalbeds/hotelsearch" title="">
                <img alt="globalbeds_logo" src={GlobalBedsLogo} />
                <small>By</small>
                <img alt="dorak_logo" className="dorak-nav-img" src={DorakLogo} />
              </a>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-5">
            <div id="login_details" class="nowrap MT35" style={{ fontSize: "11px" }}></div>
          </div>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="col-lg-4 col-sm-4 col-md-4 pull-right">
            <div class="pull-right notify-header MT10">
              <ul class="right_header">
                <li class="list_item selected_curr_item PD5">
                  <div class="input-group-btn select" id="select1">
                    <button type="button" class="btn currency_button  dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span class="selected">
                        <a class="mrR5">USD</a>
                        <img class="mrR5" alt="currency_img" src={USDCurrency} />
                        <img class="mrR5" alt="flag_img" src={USDFlag} />
                      </span>
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu option" role="menu">
                    </ul>
                  </div>
                </li>
                <li class="list_item shop-cart">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="badge">0</span>
                  </a>
                  <a href="http://104.236.94.145/globalbeds/checkout">
                    <img alt="" class="cart" src={Cart} />
                    <span>Shopping Cart</span>
                  </a>
                </li>
                <li class="list_item dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown">
                    <div class="my_account_image">
                      <img alt="" class="user_account" src={User} />
                    </div>
                    <i class="fa fa-angle-down pull-left"></i>
                    <div title="aravind@codingmart.com" class="username">User ..</div>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="user_email">
                      <a>
                        <img alt="" src={UserIcon} />
                        <span>user@globalbeds.com</span>
                      </a>
                    </li>
                    <li class="">
                      <a href="http://104.236.94.145/globalbeds/admins/gb_user/details/">My Profile</a>
                    </li>
                    <li class="">
                      <a href="http://104.236.94.145/globalbeds/change-password">Change Password</a>
                    </li>
                    <li>
                      <a href="http://104.236.94.145/globalbeds/user/logout">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export class AppFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 text-left">
                <div className="footer-br">
                  <div className="MT10">
                    <a href="terms-and-conditions.html" target="_blank">Terms and Conditions</a> /
      <a href="privacy-policy.html" target="_blank">Privacy Policy</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1 text-left">
                <div className="footer-br">
                  <div className="MT10">
                    <a href="http://dorakholding.com.tr/en/sectors-tourism.html" target="_blank">About Us</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                <div className="footer-br">
                  <div className="MT10">
                    <i className="fa fa-envelope" />
                    <a href="mailto:global@globalbeds.com">global@globalbeds.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 text-center">
                <div className="footer-br">
                  <div className="MT10">
                    <i className="fa fa-phone" />
                    <span>+90 212 231 6693</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 pad-t10">
                <div className="footer-br no-bor social">
                  <a className="linkdin" title="" href="https://www.linkedin.com/company/global-beds" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="twitter" title="" href="https://twitter.com/Global_Beds" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="facebook" title="" href="https://www.facebook.com/GlobalBedsTravelWholesaler" target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                  <a className="instagram" title="" href="https://www.instagram.com/globalbeds" target="_blank">
                    <i className="fa fa-instagram" />
                  </a>
                  <a className="pinteres" title="" href="https://www.pinterest.com/globalbeds" target="_blank">
                    <i className="fa fa-pinterest-p" />
                  </a>
                  <a className="youtube" title="" href="https://www.youtube.com/channel/UCHi_9dg0KvBrHqHEOeJzODQ"
                    target="_blank">
                    <i className="fa fa-youtube-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copy_right">
            <div className="container text-center">
              <span>Copyright © 2017 Global Beds</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
