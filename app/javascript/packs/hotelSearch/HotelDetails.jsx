import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./hotel_details.css"
import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import * as GBLogo from "../common/images/global-beds-logo.png";
import * as Bedroom from "../common/images/bedroom.jpg";
import Footer from "../common/Footer";
import Header from "../common/Header"
import SecondaryMenu from "../common/SecondaryMenu"

class HotelDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
        <Header />
        <SecondaryMenu />
        {/* search list */}
        <div className="row container-wrapper list-wrapper">
          {/* hotel deatils */}
          <div className="col-md-12 hotel-details-wrapper">
            <div className="hd-heading">
              <h5> Springs Hotel and Spa </h5>
              <span>
                <i className="mdi mdi-star" />
                <i className="mdi mdi-star" />
                <i className="mdi mdi-star" />
              </span>
              <label> JC Road, Bangalore </label>
            </div>
            <div className="hd-tabs">
              <ul className="list-unstyled">
                <li className="active">
                  Photos
                </li>
                <li>
                  Hotel Info
                </li>
                <li>
                  Rooms and Rates
                </li>
              </ul>
            </div>
          </div>
          {/* hotel all data */}
          <div className="col-md-12 hotel-benefits">
            <div className="col-md-9">
              {/* photo */}
              <div className="h-benefits-list hotel-album">
                <div className="hotel-album-img">
                      <img src={Bedroom} />
                </div>
                <div className="hotel-album-small-img">
                  <ul className="list-unstyled">
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <img src={Bedroom} />
                    </li>
                    <li>
                      <label>
                        30+
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* hotel-info */}
              <div className="h-benefits-list hotel-info">
                <div className="hotel-info-heading">
                  <h5>About Ginger Pondicherry</h5>
                  <label>
                    CHECK-IN 2 PM | CHECK-OUT 12 PM
                  </label>
                </div>
                <div className="hotel-info-description">
                  <p>
                    Location: Ginger Hotel Pondicherry is within 4 km from New Bus Stand, Puducherry Railway Station and Pondicherry Airport. Nearby attractions include ISKCON temple (1 km) and Sri Aurobindo Ashram (2 km).
                    Room Amenities: Categorized as Standard and Twin, the hotel offers 94 Smart Space rooms. All rooms are equipped with electronic door locks, Wi-Fi, in-room safe, work desk, LCD television, tea/coffee maker and ergonomically designed bed. The en suite bathrooms are fitted with hot/cold water supply and shower facility.
                    Hotel Facilities: Ginger Hotel Pondicherry has a well-equipped gym and provides 24-hour security, doctor-on-call, laundry service, special facility for differently abled guests and secured parking facility. For the convenience of business travelers, the hotel offers a net zone with high speed internet and conference room to host social meetings.
                  </p>
                  <p>
                    Dining: The property houses a multi-cuisine restaurant, The Zero-Hour The Bar offering a selection of beverages and snacks, and a Cafe Coffee Day outlet offering a choice of coffees. Guests can also avail in-room dining facility. There are also vending machines for hot/cold beverages. Nearby dining options include Hotel Satguru (2 km) and LE Club (4 km).
                  </p>
                  <div className="facility-offered">
                    <h5>Facilities offered here:</h5>
                    <ul className="list-unstyled">
                      <li>
                        <label>
                          <i className="mdi mdi-wifi" />
                        </label>
                        <span>
                          WIFI
                        </span>
                      </li>
                      <li>
                        <label>
                          <i className="mdi mdi-pool" />
                        </label>
                        <span>
                          Pool
                        </span>
                      </li>
                      <li>
                        <label>
                          <i className="mdi mdi-car" />
                        </label>
                        <span>
                          Car
                        </span>
                      </li>
                      <li>
                        <label>
                          <i className="mdi mdi-pool" />
                        </label>
                        <span>
                          Pool
                        </span>
                      </li>
                      <li>
                        <label>
                          <i className="mdi mdi-parking" />
                        </label>
                        <span>
                          Parking
                        </span>
                      </li>
                      <li>
                        <label>
                          <i className="mdi mdi-silverware" />
                        </label>
                        <span>
                          Silverware
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* hotel-room and rates */}
              <div className="h-benefits-list hotel-rates">
                <div className="hotel-info-heading">
                  <h5>Rooms &amp; rates</h5>
                </div>
                <div className="row hotel-list-wrapper">
                  <div className="col-md-12 hotel-list-card">
                    <div className="col-md-8">
                      <div className="hl-desc">
                        <h5>
                          Standard Double Room
                        </h5>
                        <label>
                          WiFi Internet,Refrigerator,Air Conditioned,Attached Bathroom,Television,24-hrs Hot &amp; Cold Water
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hl-price">
                        <ul className="list-unstyled">
                          <li>
                            <label>
                              <i className="mdi mdi-currency-usd" />
                              <span>
                                3500
                              </span>
                            </label>
                          </li>
                          <li>
                            <a href className="btn btn-orange">
                              Book Now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 hotel-list-card">
                    <div className="col-md-8">
                      <div className="hl-desc">
                        <h5>
                          Standard Double Room
                        </h5>
                        <label>
                          WiFi Internet,Refrigerator,Air Conditioned,Attached Bathroom,Television,24-hrs Hot &amp; Cold Water
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hl-price">
                        <ul className="list-unstyled">
                          <li>
                            <label>
                              <i className="mdi mdi-currency-usd" />
                              <span>
                                3500
                              </span>
                            </label>
                          </li>
                          <li>
                            <a href className="btn btn-orange">
                              Book Now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 hotel-list-card">
                    <div className="col-md-8">
                      <div className="hl-desc">
                        <h5>
                          Standard Double Room
                        </h5>
                        <label>
                          WiFi Internet,Refrigerator,Air Conditioned,Attached Bathroom,Television,24-hrs Hot &amp; Cold Water
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hl-price">
                        <ul className="list-unstyled">
                          <li>
                            <label>
                              <i className="mdi mdi-currency-usd" />
                              <span>
                                3500
                              </span>
                            </label>
                          </li>
                          <li>
                            <a href className="btn btn-orange">
                              Book Now
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="hotel-selected-price-detail">
                <h5>
                  Springs Hotel and Spa Springs Hotel and Spa
                </h5>
                <label>
                  Limited View . 290.sqft
                </label>
                <ul className="list-unstyled">
                  <li>
                    <label>
                      <i className="mdi mdi-check" />
                    </label>
                    <span>
                      Breakfast
                    </span>
                  </li>
                  <li>
                    <label>
                      <i className="mdi mdi-check" />
                    </label>
                    <span>
                      Free Wi-Fi
                    </span>
                  </li>
                  <li>
                    <label>
                      <i className="mdi mdi-check" />
                    </label>
                    <span>
                      Credit card required to guarantee booking
                    </span>
                  </li>
                </ul>
                <div className="hs-price-label">
                  <label>
                    <span>
                      <i className="mdi mdi-currency-usd" />
                    </span>
                    12,508
                  </label>
                  <span>
                    Total 1 room, 2 nights (All taxes included)
                  </span>
                </div>
                <a href className="btn btn-orange">
                  Book this hotel
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Js */}
      </div>
    );
   }
}
export default HotelDetails;