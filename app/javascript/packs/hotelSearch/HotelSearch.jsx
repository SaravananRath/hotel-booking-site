import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../common/style.css";
import './hotel_search.css';
import axios from 'axios';

import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SecondaryMenu from "../common/SecondaryMenu";
import { Collapse, Button, CardBody, Card, CardDeck, CardHeader } from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import * as GBLogo from "../common/images/global-beds-logo.png";
import * as Booking from "../common/images/booking.png";
import * as Refund from "../common/images/refund.png";
import * as CheckIn from "../common/images/check-in.png";
import * as PendingPayments from "../common/images/pending-payments.png";
import * as CancellationCharges from "../common/images/cancellation-charges.png";
import * as CancellationConfrimed from "../common/images/cancellation-confrimed.png";
import * as Ad from "../common/images/unwanted/advertisement_img.jpg";
import * as LasVegas from "../common/images/unwanted/las-vegas.jpg";
import * as Layiotis from "../common/images/unwanted/layiotis.jpg";
import { basename } from "path";


class HotelSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      hotels: [],
      destinations: [],
      searchValue: '',
      room: [
        {
          id: 0,
          child: []
        }
      ],
      indents: [],
      startDate: moment(),
      endDate: moment().add(1, 'days'),
      nights:1
    };
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  handleSearch = (e) => {

    this.setState({ searchValue: e.target.value });

    if ((this.state.searchValue.length) - 1) {
      this.setState({ collapse: true });
      axios.get('http://localhost:3000/hotel-search/autocomplete', {
        params: {
          q: e.target.value
        }
      })
        .then(function (response) {
          this.setState({
            hotels: response.data.hotels,
            destinations: response.data.destinations
          });
          console.log(response.data.destinations);
          console.log(response.data.hotels);
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      this.setState({ collapse: false });
    }
  }

  closeSuggest = (e) => {
    this.setState({ collapse: false });
  }

  handleClick = (e) => {
    console.log(e.currentTarget.dataset.id);

    this.setState({
      searchValue: e.currentTarget.dataset.id,
      collapse: false
    });
  }

  addRooms = (e) => {
    var room = this.state.room;
    var roomCount = this.state.room.length;
    var value = e.target.value;
    var diff = Math.abs(roomCount - value);

    if (value < roomCount) {
      room.splice(value);
    }
    else {
      for (var i = roomCount; i <= ((diff) - 1 + roomCount); i++) {
        room.push(
          {
            id: i,
            child: []
          });
      }
    }
    this.setState({ room });
  }

  addChildrens = (e) => {
    var e_id = e.target.id;
    var value = e.target.value;
    var child = this.state.room[e_id].child;
    var childCount = this.state.room[e_id].child.length;
    var diff = Math.abs(childCount - value);

    if (value < childCount) {
      child.splice(value);
    }
    else {
      for (var i = childCount; i <= ((diff) - 1 + childCount); i++) {
        child.push(i);
      }
    }
    this.setState({ child });
  }


  handleStartDate(date) {
    var nextDate = moment(date).add(1, 'days')
    if (this.state.endDate < nextDate ){
    this.setState({
      startDate: date,
      endDate: nextDate
    },function(){this.getNights()});
    }
    else{
      this.setState({
        startDate: date
      },function(){this.getNights()});
    }
  }
  handleEndDate(date) {
    this.setState({
      endDate: date
    },function(){this.getNights()});
  }
  getNights(){
    var a = this.state.startDate
    var b = this.state.endDate
    console.log(a.format("MMM Do YY"))
    console.log(b.format("MMM Do YY"))
    var c = b.diff(a, 'days')
    this.setState({nights:c},function(){ console.log(this.state.nights);})
  }
  handleNights = (e)=>{
    this.setState({nights:e.target.value},function(){ console.log(this.state.nights)})
  }
  buildSelect() {
    var arr = [];
      for (let i = 1; i <= 30; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
        }
    return arr; 
    }

  render() {

    return (
      <div>

        {/* header section */}
        <Header />
        {/* secondary menu */}
        <SecondaryMenu />
        {/* search wrapper */}
        <div className="row search-wrapper">
          <div className="col-md-8">
            <div className="col-md-12 search-card">
              <div className="col-md-12">
                <h5>SEARCH FOR HOTELS</h5>
                <p>Find Best Deals over 1,73,000 hotels around the world</p>
              </div>
              <div className="col-md-12 common-form">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Destination, Hotel</label>
                    <input type="text" className="form-control" onBlur={this.closeSuggest} onChange={this.handleSearch} value={this.state.searchValue} />

                    <Collapse isOpen={this.state.collapse}>
                      <ul className="suggestions">
                        {this.state.hotels.length > 0 && <b>Hotels</b>}
                        {
                          this.state.hotels.slice(0, 10).map((hotels, index) =>
                            <li key={index} className="list" onClick={this.handleClick} data-id={hotels.name} >{hotels.name}</li>
                          )
                        }
                        {this.state.destinations.length > 0 && <b>Destinations</b>}
                        {
                          this.state.destinations.slice(0, 10).map((destinations, index) =>
                            <li key={index} className="list" onClick={this.handleClick} data-id={destinations.name} >{destinations.name}</li>
                          )
                        }
                      </ul>
                    </Collapse>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Check-in date</label>
                    <DatePicker
                        minDate={moment()}
                        selected={this.state.startDate}
                        onChange={this.handleStartDate}
                        className="form-control"
                    />
                    <div className="group-icon">
                      <i className="mdi mdi-calendar" />
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Check-out date</label>
                    <DatePicker
                        minDate={moment().add(1, 'days')}
                        selected={this.state.endDate}
                        onChange={this.handleEndDate}
                        className="form-control"
                    />
                    <div className="group-icon">
                      <i className="mdi mdi-calendar" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Night</label>
                    <select className="form-control" defaultValue='1' onChange={this.handleNights}>  
                    {this.buildSelect() }
                    </select>
                  </div>
                </div>



                <div className="col-md-2">
                  <div className="form-group">
                    <label>Room</label>
                    <select className="form-control" l={this.addRooms}>
                      <option value="1" >1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                      <option value="6" >6</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-10 padr0">
                  {
                    this.state.room.map(({ id, child }, index) =>
                      <div className="col-md-12 room-column" key={index} >
                        <div className="col-md-3">
                          <div className="room-label">
                            <label>Room {(id) + 1}</label>
                          </div>
                        </div>

                        <div className="col-md-2 padr0">
                          <div className="form-group">
                            <label>Adult</label>
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

                        <div className="col-md-2 padr0">
                          <div className="form-group">
                            <label>Children</label>
                            <select className="form-control" id={index} onChange={this.addChildrens}>
                              <option value="0" >0</option>
                              <option value="1" >1</option>
                              <option value="2" >2</option>
                              <option value="3" >3</option>
                              <option value="4" >4</option>
                            </select>
                          </div>
                        </div>

                        {
                          child.map((age, index) =>
                            <div className="col-md-2 padr0 child" key={index} >
                              <div className="form-group">
                                <label>Ages</label>
                                <select className="form-control">
                                  <option value="0" >0</option>
                                  <option value="1" >1</option>
                                  <option value="2" >2</option> 
                                  <option value="3" >3</option>
                                  <option value="4" >4</option>
                                </select>
                              </div>
                            </div>
                          )
                        }

                      </div>
                    )
                  }
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
              <div
                id="carousel-example-generic"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* carousel indicator */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={2}
                  />
                </ol>
                {/* carousel items */}
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src={Ad} />
                    <div className="carousel-caption">
                      <h5>Summer Sale</h5>
                    </div>
                  </div>
                  <div className="item">
                    <img src={LasVegas} />
                    <div className="carousel-caption">
                      <h5>Las Vegas</h5>
                    </div>
                  </div>
                  <div className="item">
                    <img src={Layiotis} />
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
        <div className="row booking-confirm-container">
          <div className="col-md-4">
            <div className="booking-count-list">
              <a href="">
                <div className="bc-img">
                  <img src={Booking} />
                </div>
                <div className="bc-desc">
                  <h5>Bookings Confirmed</h5>
                  <label>Last 30 days</label>
                  <span>0</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-count-list">
              <a href="">
                <div className="bc-img">
                  <img src={CancellationCharges} />
                </div>
                <div className="bc-desc">
                  <h5>Cancellation Charges</h5>
                  <label>Last 30 days</label>
                  <span>0</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-count-list">
              <a href="">
                <div className="bc-img">
                  <img src={PendingPayments} />
                </div>
                <div className="bc-desc">
                  <h5>Pending Payments</h5>
                  <label>Last 30 days</label>
                  <span>0</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-count-list">
              <a href="">
                <div className="bc-img">
                  <img src={CancellationConfrimed} />
                </div>
                <div className="bc-desc">
                  <h5>Cancellation-Confrimed</h5>
                  <label>Last 30 days</label>
                  <span>0</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-count-list">
              <a href="">
                <div className="bc-img">
                  <img src={Refund} />
                </div>
                <div className="bc-desc">
                  <h5>Refund</h5>
                  <label>Last 30 days</label>
                  <span>0</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-count-list">
              <a href="">
                <div className="bc-img">
                  <img src={CheckIn} />
                </div>
                <div className="bc-desc">
                  <h5>Check In Date</h5>
                  <label>Last 30 days</label>
                  <span>0</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* recent booking */}
        <div className="row recent-booking-wrapper">
          <div className="col-md-12 recent-booking-heading">
            <h5>Recent Booking</h5>
          </div>
          <div className="col-md-12 recent-booking-table">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Agent/GSA ID</th>
                  <th>Booking No</th>
                  <th>Suppl Ref</th>
                  <th>Supplier</th>
                  <th>Traveler</th>
                  <th>Nationality</th>
                  <th>Destination</th>
                  <th>Booking Date</th>
                  <th>Check-In Date</th>
                  <th>Net Price</th>
                  <th>Cancellation Charges*</th>
                  <th>Booking Status</th>
                  <th>Payment Status</th>
                  <th>Suppl Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hakan Renda (GB0000801IN)</td>
                  <td>
                    <label className="booking-no">
                      <a href="">GB-HO12000716</a>
                    </label>
                  </td>
                  <td>77-919859</td>
                  <td>Hotelbed</td>
                  <td>Deneme</td>
                  <td>Angola</td>
                  <td>Istanbul</td>
                  <td>
                    <div className="booking-date">
                      <label>
                        <i className="mdi mdi-calendar" />
                        21/04/2018
                      </label>
                      <span>
                        <i className="mdi mdi-clock" />
                        10:44 am
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="booking-date">
                      <label>
                        <i className="mdi mdi-calendar" />
                        21/04/2018
                      </label>
                    </div>
                  </td>
                  <td>49.31 USD</td>
                  <td>
                    <div className="booking-date">
                      <label>
                        <i className="mdi mdi-cash" />
                        49.31 USD
                      </label>
                      <label>
                        <i className="mdi mdi-calendar" />
                        21/04/2018
                      </label>
                      <span>
                        <i className="mdi mdi-clock" />
                        10:44 am
                      </span>
                    </div>
                  </td>
                  <td>
                    <label className="booing-status success">Confirmed</label>
                  </td>
                  <td>
                    <label className="booing-status failure">Refunded</label>
                  </td>
                  <td>
                    <label className="booing-status success">Paid</label>
                  </td>
                  <td>
                    <label className="collapse-icon">
                      <i className="mdi mdi-plus-circle-outline" />
                    </label>
                  </td>
                </tr>
                <tr className="booking-detail-collapse">
                  <td colSpan={15}>
                    <div className="col-md-12 booking-collaspe-wrapper">
                      <div className="col-md-9">
                        <div className="booking-detail">
                          <div className="booking-agent">
                            <label>Agent:</label>
                            <span>DORAK TOUR(GB0000801IN)</span>
                          </div>
                        </div>
                        <div className="booking-detail-list">
                          <ul className="list-unstyled">
                            <li>
                              <label>Name</label>
                              <span className="hotel-name">
                                Pullman Kuala Lumpur City Centre
                              </span>
                            </li>
                            <li>
                              <label>ROOM</label>
                              <span>
                                <a href="">DETAILS</a>
                              </span>
                            </li>
                            <li>
                              <label>BOARD TYPE</label>
                              <span>RO</span>
                            </li>
                            <li>
                              <label>Check-In</label>
                              <span>Thu 16 Aug</span>
                            </li>
                            <li>
                              <label>Check-Out</label>
                              <span>Fri 17 Aug</span>
                            </li>
                            <li>
                              <label>Night</label>
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                        <div className="booking-footer-list">
                          <ul className="list-unstyled">
                            <li>
                              <a href="">
                                <i className="mdi mdi-file-document" />
                                Voucher
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i className="mdi mdi-file-document" />
                                Invoice
                              </a>
                            </li>
                            <li>
                              <a href="">Manage Order</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="booking-payment-summary">
                          <h5>PAYMENT SUMMARY</h5>
                          <ul className="list-unstyled">
                            <li>
                              <label>Price</label>
                              <span>88.27 USD</span>
                            </li>
                            <li>
                              <label>Net amount paid</label>
                              <span>88.27 USD</span>
                            </li>
                            <li>
                              <label>Pending payment</label>
                              <span>88.27 USD</span>
                            </li>
                            <li>
                              <label>Payment Mode</label>
                              <span>Credit Line</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Hakan Renda (GB0000801IN)</td>
                  <td>
                    <label className="booking-no">
                      <a href="">GB-HO12000716</a>
                    </label>
                  </td>
                  <td>77-919859</td>
                  <td>Hotelbed</td>
                  <td>Deneme</td>
                  <td>Angola</td>
                  <td>Istanbul</td>
                  <td>
                    <div className="booking-date">
                      <label>
                        <i className="mdi mdi-calendar" />
                        21/04/2018
                      </label>
                      <span>
                        <i className="mdi mdi-clock" />
                        10:44 am
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="booking-date">
                      <label>
                        <i className="mdi mdi-calendar" />
                        21/04/2018
                      </label>
                    </div>
                  </td>
                  <td>49.31 USD</td>
                  <td>
                    <div className="booking-date">
                      <label>
                        <i className="mdi mdi-cash" />
                        49.31 USD
                      </label>
                      <label>
                        <i className="mdi mdi-calendar" />
                        21/04/2018
                      </label>
                      <span>
                        <i className="mdi mdi-clock" />
                        10:44 am
                      </span>
                    </div>
                  </td>
                  <td>
                    <label className="booing-status success">Confirmed</label>
                  </td>
                  <td>
                    <label className="booing-status failure">Refunded</label>
                  </td>
                  <td>
                    <label className="booing-status success">Paid</label>
                  </td>
                  <td>
                    <label className="collapse-icon">
                      <i className="mdi mdi-plus-circle-outline" />
                    </label>
                  </td>
                </tr>
                <tr className="booking-detail-collapse">
                  <td colSpan={15}>
                    <div className="col-md-12 booking-collaspe-wrapper">
                      <div className="col-md-9">
                        <div className="booking-detail">
                          <div className="booking-agent">
                            <label>Agent:</label>
                            <span>DORAK TOUR(GB0000801IN)</span>
                          </div>
                        </div>
                        <div className="booking-detail-list">
                          <ul className="list-unstyled">
                            <li>
                              <label>Name</label>
                              <span className="hotel-name">
                                Pullman Kuala Lumpur City Centre
                              </span>
                            </li>
                            <li>
                              <label>ROOM</label>
                              <span>
                                <a href="">DETAILS</a>
                              </span>
                            </li>
                            <li>
                              <label>BOARD TYPE</label>
                              <span>RO</span>
                            </li>
                            <li>
                              <label>Check-In</label>
                              <span>Thu 16 Aug</span>
                            </li>
                            <li>
                              <label>Check-Out</label>
                              <span>Fri 17 Aug</span>
                            </li>
                            <li>
                              <label>Night</label>
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                        <div className="booking-footer-list">
                          <ul className="list-unstyled">
                            <li>
                              <a href="">
                                <i className="mdi mdi-file-document" />
                                Voucher
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i className="mdi mdi-file-document" />
                                Invoice
                              </a>
                            </li>
                            <li>
                              <a href="">Manage Order</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="booking-payment-summary">
                          <h5>PAYMENT SUMMARY</h5>
                          <ul className="list-unstyled">
                            <li>
                              <label>Price</label>
                              <span>88.27 USD</span>
                            </li>
                            <li>
                              <label>Net amount paid</label>
                              <span>88.27 USD</span>
                            </li>
                            <li>
                              <label>Pending payment</label>
                              <span>88.27 USD</span>
                            </li>
                            <li>
                              <label>Payment Mode</label>
                              <span>Credit Line</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* footer */}
        <Footer />
        {/* Js */}
      </div>
    );
  }
}


const list = {

};



export default HotelSearch;
