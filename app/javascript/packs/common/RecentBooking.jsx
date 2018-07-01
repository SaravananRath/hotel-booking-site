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


class RecentBooking extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
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
        );
    }
}
export default RecentBooking;