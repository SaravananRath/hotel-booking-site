import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../common/style.css"
import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import * as GBLogo from "../common/images/global-beds-logo.png";
import Footer from "../common/Footer";
import Header from "../common/Header"
import SecondaryMenu from "../common/SecondaryMenu";
import BookingConfirmList from "../common/BookingConfirmList";
import RecentBooking from "../common/RecentBooking";

class activitySearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        {/* page load effect */}

        {/* header section */}
        <Header />
        {/* secondary menu */}
        <SecondaryMenu />
        {/* search wrapper */}
        <div className="row search-wrapper">
          <div className="col-md-8">
            <div className="col-md-12 search-card">
              <div className="col-md-12">
                <h5>SEARCH FOR ACTIVITIES</h5>
                <p>
                  Choose wide range of activities around the world
                </p>
              </div>
              <div className="col-md-12 common-form">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Country</label>
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Destination</label>
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 common-btn">
                  <a href="" className="btn btn-orange">
                    SEARCH
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-12 banner-carousel">
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                {/* carousel indicator */}
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                  <li data-target="#carousel-example-generic" data-slide-to={1} />
                  <li data-target="#carousel-example-generic" data-slide-to={2} />
                </ol>
                {/* carousel items */}
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src="assets/images/unwanted/advertisement_img.jpg" />
                    <div className="carousel-caption">
                      <h5>Summer Sale</h5>
                    </div>
                  </div>
                  <div className="item">
                    <img src="assets/images/unwanted/las-vegas.jpg" />
                    <div className="carousel-caption">
                      <h5>Las Vegas</h5>
                    </div>
                  </div>
                  <div className="item">
                    <img src="assets/images/unwanted/layiotis.jpg" />
                    <div className="carousel-caption">
                      <h5>Layiotis</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* booking confirm list */}
        <BookingConfirmList />
        {/* recent booking */}
        <RecentBooking />
        {/* footer */}
        <Footer />
        {/* Js */}
      </div>
    );
  }
}

export default activitySearch;