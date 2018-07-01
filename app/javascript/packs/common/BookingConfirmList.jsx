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
import * as Booking from "../common/images/booking.png";
import * as Refund from "../common/images/refund.png";
import * as CheckIn from "../common/images/check-in.png";
import * as PendingPayments from "../common/images/pending-payments.png";
import * as CancellationCharges from "../common/images/cancellation-charges.png";
import * as CancellationConfrimed from "../common/images/cancellation-confrimed.png";

class BookingConfirmList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
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
        );
    }
}
export default BookingConfirmList;