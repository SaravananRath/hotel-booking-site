// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import jsxToString from "jsx-to-string";

import "./forms.jsx";
import "./forms.css";

export class UserRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      score: "null",
      fields: {
        name: "",
        company_type: "",
        region: "",
        country: "",
        state_city_country: "",
        city_district: "",
        salutation: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        currency: "",
        password: ""
      },
      errors: {},
      countries: [],
      states: [],
      cities: []
    };
    this.showHide = this.showHide.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Company Type
    if (!fields["company_type"]) {
      formIsValid = false;
      errors["company_type"] = "Company Type is required!";
    }

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Company Name is required!";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters and numbers";
      }
    }

    //Region
    if (!fields["region"]) {
      formIsValid = false;
      errors["region"] = "Region is required!";
    }

    //Country
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Country is required!";
    }

    //State City Country
    if (!fields["state_city_country"]) {
      formIsValid = false;
      errors["state_city_country"] = "State is required!";
    }

    //City District
    if (!fields["city_district"]) {
      formIsValid = false;
      errors["city_district"] = "City is required!";
    }

    //Salutation First !ame
    if (!fields["salutation"] && !fields["first_name"]) {
      formIsValid = false;
      errors["salutation_fname"] = "Salutation and First Name is required!";
    } else if (!fields["salutation"] && fields["first_name"]) {
      formIsValid = false;
      errors["salutation_fname"] = "Salutation is required!";
    } else if (fields["salutation"] && !fields["first_name"]) {
      formIsValid = false;
      errors["salutation_fname"] = "First Name is required!";
    }

    //Last Name
    if (!fields["last_name"]) {
      formIsValid = false;
      errors["last_name"] = "Last Name is required!";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "E-Mail is required!";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Please enter a valid E-Mail";
      }
    }

    //Phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Phone is required!";
    }

    //Currency
    if (!fields["currency"]) {
      formIsValid = false;
      errors["currency"] = "Currency is required!";
    }

    //Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password is required!";
    }

    if (fields["password"].search(/[0-9]/) < 0) {
      errors["password"] = "Your password must contain at least one digit.";
    }
    if (fields["password"].search(/(?=.*[!#$%&? "])/) < 0) {
      errors["password"] =
        "Your password must contain at least one special character.";
    }
    if (fields["password"].search(/[a-z]/) < 0) {
      errors["password"] =
        "Your password must contain at least one lower case.";
    }
    if (fields["password"].search(/[A-Z]/) < 0) {
      errors["password"] =
        "Your password must contain at least one upper case.";
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

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    console.log(this.props.modal);
    let fields = this.state.fields;
    let errors = {};
    let response = "";
    if (this.handleValidation()) {
      axios
        .post("http://localhost:3000/users", {
          user: {
            type_of_company: this.state.fields["company_type"],
            company_name: this.state.fields["name"],
            region: this.state.fields["region"],
            country: this.state.fields["country"],
            state_city_country: this.state.fields["state_city_country"],
            city_district: this.state.fields["city_district"],
            title: this.state.fields["salutation"],
            first_name: this.state.fields["first_name"],
            last_name: this.state.fields["last_name"],
            email: this.state.fields["email"],
            phone_no: this.state.fields["phone"],
            currency: this.state.fields["currency"],
            password: this.state.fields["password"]
          }
        })
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            alert("Registered successfully.");
            window.location.reload();
          }
        })
        .catch(function(error) {});

      return true;
    } else {
      console.log("Form has errors.");
      return false;
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  getCountry(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });

    let value = e.target.value;
    var region = value.substring(
      value.lastIndexOf("(") + 1,
      value.lastIndexOf(")")
    );

    axios
      .get("http://localhost:3000/region/country", {
        params: {
          region: region
        }
      })
      .then(
        function(response) {
          this.setState({
            countries: response.data.countries,
            states: [],
            cities: []
          });
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  getState(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });

    axios
      .get("http://localhost:3000/region/country/state", {
        params: {
          country_code: "state_" + e.target.value
        }
      })
      .then(
        function(response) {
          this.setState({
            states: response.data.states,
            cities: []
          });
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  getCity(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });

    axios
      .get("http://localhost:3000/region/country/state/city", {
        params: {
          state_code: "city_" + e.target.value
        }
      })
      .then(
        function(response) {
          this.setState({ cities: response.data.cities });
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form
        action="/users"
        method="post"
        id="gb-user-register"
        acceptCharset="UTF-8"
        onSubmit={this.contactSubmit.bind(this)}
      >
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-item form-item-type-company form-type-select form-group">
                <label className="control-label" htmlFor="edit-type-company">
                  Type of Company
                  <span className="form-required"> *</span>
                </label>
                <select
                  className="form-control form-select"
                  id="edit-type-company"
                  name="type_company"
                  onChange={this.handleChange.bind(this, "company_type")}
                  value={this.state.fields["company_type"]}
                >
                  <option value="">Select</option>
                  <option value="75008">GSA</option>
                  <option value="75007">Hotel</option>
                  <option value="75005">Online Travel Agency</option>
                  <option value="75010">Other Travel Company</option>
                  <option value="75009">Partner</option>
                  <option value="75003">Tour Operator</option>
                  <option value="75004">Travel Agency</option>
                  <option value="75006">Wholesaler</option>
                </select>
                <span style={{ color: "red" }}>
                  {this.state.errors["company_type"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item form-item-company-name form-type-textfield form-group">
                {" "}
                <label className="control-label" htmlFor="edit-company-name">
                  Company Name <span className="form-required">*</span>{" "}
                </label>
                <input
                  className="form-control form-text"
                  type="text"
                  id="edit-company-name"
                  name="company_name"
                  size="30"
                  maxLength="1024"
                  onChange={this.handleChange.bind(this, "name")}
                  value={this.state.fields["name"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["name"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item form-item-from-region form-type-select form-group">
                <label className="control-label" htmlFor="edit-from-region">
                  Region <span className="form-required">*</span>{" "}
                </label>
                <select
                  className="form-control form-select"
                  id="edit-from-region"
                  name="region"
                  onChange={this.getCountry.bind(this, "region")}
                  value={this.state.fields["region"]}
                >
                  <option value="" defaultValue="selected">
                    Select
                  </option>
                  <option value="Asia Pacific (APAC)">
                    Asia Pacific (APAC)
                  </option>
                  <option value="Azerbaijan(AZE)">Azerbaijan(AZE)</option>
                  <option value="Europe Middle East Africa (EMEA)">
                    Europe Middle East Africa (EMEA)
                  </option>
                  <option value="Latin America (LATAM)">
                    Latin America (LATAM)
                  </option>
                  <option value="North America (NAFTA)">
                    North America (NAFTA)
                  </option>
                  <option value="Russia(RU)">Russia(RU)</option>
                </select>
                <span style={{ color: "red" }}>
                  {this.state.errors["region"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item form-item-country form-type-select form-group">
                <label className="control-label" htmlFor="edit-country">
                  Country <span className="form-required">*</span>{" "}
                </label>
                <select
                  className="form-control form-select"
                  id="edit-country"
                  name="country"
                  onChange={this.getState.bind(this, "country")}
                  value={this.state.fields["country"]}
                >
                  <option value="" defaultValue="selected">
                    Select
                  </option>
                  {this.state.countries.map((c, i) => (
                    <option key={i} value={c}>
                      {" "}
                      {c}{" "}
                    </option>
                  ))}
                </select>
                <span style={{ color: "red" }}>
                  {this.state.errors["country"]}
                </span>
              </div>
            </div>
            <div id="reg_child_state">
              <div className="col-md-6">
                <div className="form-item form-item-state form-type-select form-group">
                  <label className="control-label" htmlFor="edit-state">
                    State/City/County <span className="form-required">*</span>{" "}
                  </label>
                  <select
                    className="form-control form-select"
                    id="edit-state"
                    name="state"
                    onChange={this.getCity.bind(this, "state_city_country")}
                    value={this.state.fields["state_city_country"]}
                  >
                    <option value="" defaultValue="selected">
                      Select
                    </option>
                    {this.state.states.map((s, i) => (
                      <option key={i} value={s}>
                        {" "}
                        {s}{" "}
                      </option>
                    ))}
                  </select>
                  <span style={{ color: "red" }}>
                    {this.state.errors["state_city_country"]}
                  </span>
                </div>
              </div>
            </div>
            <div id="reg_child">
              <div className="col-md-6">
                <div className="form-item form-item-city form-type-select form-group">
                  <label className="control-label" htmlFor="edit-city">
                    City/District{" "}
                  </label>
                  <select
                    className="form-control form-select"
                    id="edit-city"
                    name="city"
                    onChange={this.handleChange.bind(this, "city_district")}
                    value={this.state.fields["city_district"]}
                  >
                    <option value="" defaultValue="selected">
                      Select
                    </option>
                    {this.state.cities.map((c, i) => (
                      <option key={i} value={c}>
                        {" "}
                        {c}{" "}
                      </option>
                    ))}
                  </select>
                  <span style={{ color: "red" }}>
                    {this.state.errors["city_district"]}
                  </span>
                </div>
              </div>
            </div>
            <div className="clearfix" />

            <div className="title-wrapper">
              <div className="col-md-6">
                <div className="form-item form-item-salutation form-type-select form-group">
                  <div className="row ">
                    <label
                      className="control-label fname"
                      htmlFor="edit-salutation"
                    >
                      First Name <span className="form-required">*</span>{" "}
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-md-4" style={display}>
                      <select
                        className="form-control form-select"
                        id="edit-salutation"
                        style={pad}
                        name="salutation"
                        onChange={this.handleChange.bind(this, "salutation")}
                        value={this.state.fields["salutation"]}
                      >
                        <option value="" defaultValue="selected">
                          Title
                        </option>
                        <option value="1">Mr</option>
                        <option value="2">Ms</option>
                        <option value="3">Mrs</option>
                      </select>
                    </div>
                    <div className="col-md-8">
                      <input
                        maxLength="128"
                        className="form-control form-text"
                        type="text"
                        id="edit-fname"
                        name="first_name"
                        size="30"
                        onChange={this.handleChange.bind(this, "first_name")}
                        value={this.state.fields["first_name"]}
                      />
                    </div>
                  </div>
                </div>
                <span style={{ color: "red" }}>
                  {this.state.errors["salutation_fname"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item form-item-lname form-type-textfield form-group">
                {" "}
                <label className="control-label" htmlFor="edit-lname">
                  Last Name <span className="form-required">*</span>{" "}
                </label>
                <input
                  maxLength="128"
                  className="form-control form-text"
                  type="text"
                  id="edit-lname"
                  name="last_name"
                  size="30"
                  onChange={this.handleChange.bind(this, "last_name")}
                  value={this.state.fields["last_name"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["last_name"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item form-item-email form-type-textfield form-group">
                {" "}
                <label className="control-label" htmlFor="edit-email">
                  Email <span className="form-required">*</span>{" "}
                </label>
                <input
                  className="form-control form-text"
                  type="text"
                  id="edit-email"
                  name="email"
                  size="30"
                  maxLength="128"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["email"]}
                </span>
              </div>
            </div>
            <div className="col-md-6 MT5">
              <div className="form-item form-item-phone form-type-textfield form-group">
                {" "}
                <label className="control-label" htmlFor="edit-phone">
                  Phone No.{" "}
                </label>
                <input
                  className="form-control form-text"
                  type="number"
                  id="edit-phone"
                  name="phone"
                  size="16"
                  maxLength="16"
                  onChange={this.handleChange.bind(this, "phone")}
                  value={this.state.fields["phone"]}
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["phone"]}
                </span>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-6">
              <div className="form-item form-item-currency form-type-select form-group">
                <label className="control-label" htmlFor="edit-currency">
                  Currency <span className="form-required">*</span>{" "}
                </label>
                <select
                  className="form-control form-select"
                  id="edit-currency"
                  name="currency"
                  onChange={this.handleChange.bind(this, "currency")}
                  value={this.state.fields["currency"]}
                >
                  <option value="" defaultValue="selected">
                    Select
                  </option>
                  <option value="75011">USD</option>
                </select>
                <span style={{ color: "red" }}>
                  {this.state.errors["currency"]}
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item form-item-password form-type-password form-group">
                {" "}
                <label className="control-label" htmlFor="edit-password">
                  Password <span className="form-required">*</span>{" "}
                </label>
                <input
                  className="form-control form-text"
                  type={this.state.type}
                  id="edit-password"
                  name="password"
                  size="30"
                  maxLength="128"
                  onChange={this.handleChange.bind(this, "password")}
                  value={this.state.fields["password"]}
                />
                <span className="showhide" onClick={this.showHide}>
                  {this.state.type === "input" ? "HIDE" : "SHOW"}
                </span>
                <span style={{ color: "red" }}>
                  {this.state.errors["password"]}
                </span>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="text-center">
            <button
              name="op"
              value="Join Now"
              className="form-control"
              style={submitButton}
            >
              JOIN NOW
            </button>
          </div>
          <input
            type="hidden"
            name="form_build_id"
            value="form-v0X4iLhC8drGjFi2UQSvB4FuLnrINY4atKYUSO65VYo"
          />
          <input type="hidden" name="form_id" value="gb_user_register" />
        </div>
      </form>
    );
  }
}

const display = {
  paddingRight: "0"
};

const pad = {
  padding: "0"
};

const submitButton = {
  backgroundColor: "#ff6600",
  width: "100%",
  color: "white"
};
