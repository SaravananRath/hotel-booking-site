// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
// rgba(22, 27, 31, 0.57)
import React from "react";
import ReactDOM from "react-dom";

import axios from 'axios';
import Modal from 'react-modal';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../common/style.css"

import * as GlobalBedsLogo from '../common/images/global-beds-logo.png';
import * as Banner from '../common/images/banner-two.png';
import * as BannerTwo from '../common/images/banner.png';
import * as BannerThree from '../common/images/banner-three.png';
import * as BannerFour from '../common/images/banner-four.png';
import * as Bridge from '../common/images/unwanted/bridge.jpg';
import * as Island from '../common/images/unwanted/island.jpg';
import * as Logo from '../common/images/logo.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      type: 'password',
      score: 'null',
      fields: {
        name:'', 
        company_type:'', 
        region:'',
        country:'',
        state_city_country:'',
        city_district:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        currency:'',
        password:''
      },
      errors: {},
      countries: [],
      states: [],
      cities: []
    };

    this.showHide = this.showHide.bind(this);   
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }

  handleOpenModal () {
    this.setState({ showModal: true });
    document.body.style.overflow = 'hidden';
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    document.body.style.overflow = 'scroll';
  }

  handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
 
        //Company Type
        if(!fields["company_type"]){
           formIsValid = false;
           errors["company_type"] = "Company Type is required!";
        }

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Company Name is required!";
        }

        if(typeof fields["name"] !== "undefined"){
             if(!fields["name"].match(/^[a-zA-Z]+$/)){
                 formIsValid = false;
                 errors["name"] = "Only letters and numbers";
             }          
        }

        //Region
        if(!fields["region"]){
           formIsValid = false;
           errors["region"] = "Region is required!";
        }

        //Country
        if(!fields["country"]){
           formIsValid = false;
           errors["country"] = "Country is required!";
        }

        //State City Country
        if(!fields["state_city_country"]){
           formIsValid = false;
           errors["state_city_country"] = "State is required!";
        }

        //City District
        if(!fields["city_district"]){
           formIsValid = false;
           errors["city_district"] = "City is required!";
        }

        //Salutation First !ame
        if(!fields["first_name"]){
          formIsValid = false;
          errors["first_name"] =  "First Name is required!";
        }

        //Last Name
        if( !fields["last_name"]){
           formIsValid = false;
           errors["last_name"] = "Last Name is required!";
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "E-Mail is required!";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Please enter a valid E-Mail";
            }
       }

       //Phone
       if(!fields["phone"]){
           formIsValid = false;
           errors["phone"] = "Phone is required!";
        } 

       //Currency
       if(!fields["currency"]){
           formIsValid = false;
           errors["currency"] = "Currency is required!";
        }

        //Password
        if(!fields["password"]){
           formIsValid = false;
           errors["password"] = "Password is required!";
        }
      
        if (fields["password"].search(/[0-9]/) < 0) {
            errors["password"] = "Your password must contain at least one digit.";
        }
        if (fields["password"].search(/(?=.*[!#$%&? "])/) < 0) {
            errors["password"] = "Your password must contain at least one special character.";
        }
        if (fields["password"].search(/[a-z]/) < 0) {
            errors["password"] = "Your password must contain at least one lower case."; 
        }
        if (fields["password"].search(/[A-Z]/) < 0) {
            errors["password"] = "Your password must contain at least one upper case.";
        }
        if (fields["password"].length < 8) {
           errors["password"] = "Your password must be at least 8 characters.";
        }
        
        // axios.get('http://localhost:3000/registrations/check_email', {
        //   params: {
        //     email: fields["email"]
        //   }
        // })
        // .then(function (response) {
        //   console.log(response.data);
        //   if(response.data == 1)
        //   {
        //       errors["email"] = "Email is already taken.";
        //       formIsValid = false; 
        //       this.setState({errors: errors});
        //       return formIsValid;
        //   }
        // }.bind(this))
        // .catch(function (error) {
        //  this.setState({errors: errors});
        //  return formIsValid;
        // }.bind(this));

       this.setState({errors: errors});
              return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault  ();
        console.log(this.props.modal);
        let fields = this.state.fields;
        let errors = {};
        let response = "";
        if(this.handleValidation()){

          axios.post('http://localhost:3000/users', 
          {
            user: {
              type_of_company: this.state.fields["company_type"],
              company_name: this.state.fields["name"],
              region: this.state.fields["region"],
              country: this.state.fields["country"],
              state_city_country: this.state.fields["state_city_country"],
              city_district: this.state.fields["city_district"],
              first_name: this.state.fields["first_name"],
              last_name: this.state.fields["last_name"],
              email: this.state.fields["email"],
              phone_no: this.state.fields["phone"],
              currency: this.state.fields["currency"],
              password: this.state.fields["password"]
            }
          })
          .then(function (response) {
            console.log(response);
            if(response.status == 200)
            {
                
                alert("Registered successfully.");
                window.location.reload();

            }
          })
          .catch(function (error) {
              
          });
          
          return true;  

        }else{
           console.log("Form has errors.");
            return false;
        }
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
        
    }

    getCountry(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});

      let value = e.target.value;
      var region = value.substring(
          value.lastIndexOf("(") + 1, 
          value.lastIndexOf(")")
      );

       axios.get('http://localhost:3000/region/country', {
          params: {
            region: region
          }
        })
        .then(function (response) {
          this.setState({
            countries: response.data.countries,
            states: [],
            cities: []
          });
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }

    getState(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
      
      axios.get('http://localhost:3000/region/country/state', {
        params: {
          country_code: "state_"+e.target.value
        }
      })
      .then(function (response) {
        this.setState({
          states: response.data.states,
          cities: []
        });
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    }

    getCity(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
      
      axios.get('http://localhost:3000/region/country/state/city', {
        params: {
          state_code: "city_"+e.target.value
        }
      })
      .then(function (response) {
        this.setState({cities: response.data.cities});
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    }
    handleLoginValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
 
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "E-Mail is required!";
           alert(errors["email"]);
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Please enter a valid E-Mail";
               alert(errors["email"]);
            }
       }

       
        if(!fields["password"]){
           formIsValid = false;
           errors["name"] = "Password is required!";
            alert(errors["password"]);
        }

        this.setState({errors: errors});
              return formIsValid;
      }

      login = (e)=> {
       let fields = this.state.fields;
       e.preventDefault();
       if(this.handleLoginValidation()){

        axios.post('http://localhost:3000/users/sign_in',{ 
          user:{
            email: this.state.fields["email"],
            password: this.state.fields["password"] 
          }
        })
        .then(function (response) {
          console.log(response.status);
          if(response.status == 200)
          {
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
      <div>
        {/* page load effect */}
        
        {/* header section */}
        <nav className="navbar navbar-default before-login-header">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img src={GlobalBedsLogo} />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="common-form signin-form">
                  <div className="form-group">
                    <input placeholder="Enter Email Id" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} className="form-control" title="Enter your Global Beds username." data-toggle="tooltip" type="text" name="email" required />

                  </div>
                  <div className="form-group">
                    <input placeholder="Enter Password"  onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} className="form-control" title="Enter the password that accompanies your username." data-toggle="tooltip" type="password" name="password" required />

                    <label className="forget-password">
                      <a href="#" >
                        Forget Password ?
                      </a>
                    </label>
                  </div>
                  <a href="#" className="btn btn-orange" onClick={this.login}>
                    SIGN IN
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* banner */}
        <div className="homepage-banner">
          {/* banner overlay */}
          <div className="banner-overlay" />
          <div className="homepage-banner-carousel">
            {/* carousel images */}
            <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src={Banner} />
                </div>
                <div className="item">
                  <img src={BannerTwo} />
                </div>
                <div className="item">
                  <img src={BannerThree} />
                </div>
                <div className="item">
                  <img src={BannerFour} />
                </div>
              </div>
            </div>
          </div>
          {/* banner description */}
          <div className="homepage-banner-desc">
            <h1> World's Largest HOTEL NETWORK </h1>
            <label> Become a Partner </label>

            <button className="btn btn-orange" type="button" data-toggle="modal"
                  data-target="#my_register_form" onClick={this.handleOpenModal} >Register</button>
           
            <div className="modal fade" id="my_register_form" role="dialog"
                  data-backdrop="static" data-keyboard="false">
                <Modal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" className ="modal-dialog" ariaHideApp={false}>
                     
                     <div className="modal-content">

                        <div className="modal-header">
                        <button type="submit" className="close" data-dismiss="modal"
                          onClick={this.handleCloseModal}>&times;</button> 
                           <h2 className="register_now_text">Register Now</h2>    
                        </div>
                        <div className="modal-body">
                          <form action="/users" method="post" id="gb-user-register" acceptCharset="UTF-8" onSubmit={this.contactSubmit.bind(this)}>
                              <div className="row register-form common-form">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Type of Company </label>
                                        <select className="form-control" id="edit-type-company" name="type_company" onChange={this.handleChange.bind(this, "company_type")} value={this.state.fields["company_type"]}>
                                           <option value="">Select</option>
                                           <option value="75008">GSA</option>
                                           <option value="75007">Hotel</option>
                                           <option value="75005">Online Travel Agency</option>
                                           <option value="75010">Other Travel  Company</option>
                                           <option value="75009">Partner</option>
                                           <option value="75003">Tour Operator</option>
                                           <option value="75004">Travel Agency</option>
                                           <option value="75006">Wholesaler</option>
                                        </select>
                                        <span style={{color: "red"}}>{this.state.errors["company_type"]}</span>

                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Company Name </label>
                                        <input className="form-control" type="text" id="edit-company-name" name="company_name"  size="30" maxLength="1024" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Region </label>
                                        <select className="form-control" id="edit-from-region" name="region" onChange={this.getCountry.bind(this, "region")} value={this.state.fields["region"]}>
                                           <option value="" defaultValue="selected">Select</option>
                                           <option value="Asia Pacific (APAC)">Asia Pacific (APAC)</option>
                                           <option value="Azerbaijan(AZE)">Azerbaijan(AZE)</option>
                                           <option value="Europe Middle East Africa (EMEA)">Europe Middle East Africa (EMEA)</option>
                                           <option value="Latin America (LATAM)">Latin America (LATAM)</option>
                                           <option value="North America (NAFTA)">North America (NAFTA)</option>
                                           <option value="Russia(RU)">Russia(RU)</option>
                                        </select>
                                        <span style={{color: "red"}}>{this.state.errors["region"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Country </label>
                                        <select className="form-control" id="edit-country" name="country" onChange={this.getState.bind(this, "country")} value={this.state.fields["country"]}>
                                          <option value="" defaultValue="selected">Select</option>
                                           {
                                            this.state.countries.map((c, i) => 
                                              <option key = {i} value={c} > {c} </option>
                                            )
                                           }
                                        </select>
                                        <span style={{color: "red"}}>{this.state.errors["country"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> State/City/Country </label>
                                        <select className="form-control" id="edit-state" name="state" onChange={this.getCity.bind(this, "state_city_country")} value={this.state.fields["state_city_country"]}>
                                          <option value="" defaultValue="selected">Select</option>
                                          {
                                            this.state.states.map((s, i) => 
                                              <option key = {i} value={s} > {s} </option>
                                            )
                                           }
                                         </select>
                                         <span style={{color: "red"}}>{this.state.errors["state_city_country"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> City/District </label>
                                        <select className="form-control" id="edit-city" name="city" onChange={this.handleChange.bind(this, "city_district")} value={this.state.fields["city_district"]}>
                                            <option value="" defaultValue="selected">Select</option>
                                            {
                                              this.state.cities.map((c, i) => 
                                                <option key = {i} value={c} > {c} </option>
                                              )
                                             }
                                         </select>
                                         <span style={{color: "red"}}>{this.state.errors["city_district"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> First Name </label>
                                        <input maxLength="128" className="form-control" type="text" id="edit-fname" name="first_name"  size="30" onChange={this.handleChange.bind(this, "first_name")} value={this.state.fields["first_name"]} />
                                        <span style={{color: "red"}}>{this.state.errors["first_name"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Last Name </label>
                                        <input maxLength="128" className="form-control" type="text" id="edit-lname" name="last_name"  size="30" onChange={this.handleChange.bind(this, "last_name")} value={this.state.fields["last_name"]} />
                                        <span style={{color: "red"}}>{this.state.errors["last_name"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Email </label>
                                        <input className="form-control form-text" type="text" id="edit-email" name="email"  size="30" maxLength="128" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Phone No </label>
                                        <input className="form-control form-text" type="number" id="edit-phone" name="phone"  size="16" maxLength="16" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
                                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label> Currency </label>
                                        <select className="form-control form-select" id="edit-currency" name="currency" onChange={this.handleChange.bind(this, "currency")} value={this.state.fields["currency"]}>
                                           <option value="" defaultValue="selected">Select</option>
                                           <option value="75011">USD</option>
                                        </select>
                                        <span style={{color: "red"}}>{this.state.errors["currency"]}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group"> <label className="control-label" htmlFor="edit-password">Password <span className="form-required">*</span> </label>
                                          <input className="form-control" type={this.state.type} id="edit-password" name="password" size="30" maxLength="128" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                                          <span className="showhide" onClick={this.showHide}>{this.state.type === 'input' ? 'HIDE' : 'SHOW'}</span>
                                          <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                        </div>
                                      </div>
                                      <div className="col-md-12 register-btn text-center">
                                      <button className="btn btn-orange">
                                        REGISTER AS PARTNER
                                      </button>
                                    </div>                              
                              </div>
                          </form>      
                        </div>
                     </div>
                  
                  </Modal>
               </div>
          </div>
        </div>
        {/* our package */}
        <div className="row our-package-container common-padding">
          <div className="common-heading">
            <h5>Our Special Packages</h5>
            <label />
          </div>
          <div className="col-md-12 package-wrapper">
            <div className="col-md-3">
              <div className="package-card">
                <a href="#">
                  <div className="package-image">
                    <img src={Bridge} />
                  </div>
                  <div className="package-name">
                    <h5>Turquia Classica</h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="package-card">
                <a href="#">
                  <div className="package-image">
                    <img src={Island} />
                  </div>
                  <div className="package-name">
                    <h5>Turquia Classica</h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="package-card">
                <a href="#">
                  <div className="package-image">
                    <img src={Bridge} />
                  </div>
                  <div className="package-name">
                    <h5>Turquia Classica</h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="package-card">
                <a href="#">
                  <div className="package-image">
                    <img src={Island} />
                  </div>
                  <div className="package-name">
                    <h5>Turquia Classica</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <a href="#" className="btn btn-orange">
              MORE PACKAGES
            </a>
          </div>
        </div>
        {/* footer */}
        <div className="row footer-section">
          <div className="col-md-3">
            <div className="footer-links">
              <div className="footer-logo">
                <img src={Logo} />
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:global@globalbeds.com">
                    global@globalbeds.com
                  </a>
                </li>
                <li>
                  +90 212 231 6693
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h5>Site Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="./#/terms_and_conditions">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="./#/privacy_policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    About Us
                  </a>
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
                    <a href="#">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="#">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="#">
                      <i className="mdi mdi-linkedin" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="#">
                      <i className="mdi mdi-pinterest" />
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    <a href="#">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <label>
            Copyright © 2018 Global Beds
          </label>
        </div>
        {/* register modal */}

        


   
        {/* Js */}
      </div>
    );
  }
}

export default Home;