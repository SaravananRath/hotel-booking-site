import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./style.css";
import { UserRegistrationForm } from "../common/forms";
import { HomeHeader, HomeFooter } from "../common/header_footer";
import Packages from "../packages/packages";
import * as GBLogo from "../common/images/global-beds-logo.png";
import * as Country from "../common/images/country.png";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SecondaryMenu from "../common/SecondaryMenu";

import { Route, NavLink, Link, HashRouter } from "react-router-dom";

class Overview extends React.Component {
  render() {
    return (
      <div className="visa-content visa-overview">
        <div className="visa-desc">
          <h5>Short Term Visit Single Entry – Tourist:</h5>
          <p>
            This visa is non-extend able, Valid for 30 days stay, Visa is valid
            for 58 days from the date of issue.
          </p>
        </div>
        <div className="visa-desc">
          <h5>Kindly Note:</h5>
          <ul className="list-unstyled">
            <li>
              {" "}
              The above visa is valid for a period of 58 days from the date of
              issue.
            </li>
            <li>
              {" "}
              You should file your application not later than 1 week prior to
              your travel date.
            </li>
          </ul>
        </div>
        <div className="visa-desc">
          <h5>Please Note:</h5>
          <ul className="list-unstyled">
            <li>The cancellation charge per visa is 35 USD.</li>
          </ul>
        </div>
        <div className="visa-notes">
          <p>*Visa fee once paid is not refundable under any circumstances.</p>
        </div>
      </div>
    );
  }
}

class ProcessingTime extends React.Component {
  render() {
    return (
      <div className="visa-content visa-processing ">
        <div className="visa-desc">
          <p>
            3 – 4 working days from the date of submission (except Friday,
            Saturday and UAE Holiday, please note that Sunday is a half day.)
          </p>
        </div>
        <div className="visa-desc">
          <h5>Note:</h5>
          <p>
            Please note that most applications get approved within the time
            mentioned in the table but some may require supporting documents
            therefore those applications may take longer time. In addition to
            the application fee, we may require a refundable deposit of Dhs.
            5,000 (1 500 USD) to some applicants, to insure that they do not
            stay after their visa is expired. The deposit will be refunded, once
            we get confirmation that the applicant has left the country. We can
            also arrange hotel accommodation on your preference or you can book
            directly to our website along with your visa application. The full
            payment of all fees is required before we will process an
            applicant’s visa.
          </p>
        </div>
      </div>
    );
  }
}

class SupportingDocument extends React.Component {
  render() {
    return (
      <div className="visa-content visa-supporting ">
        <div className="visa-desc">
          <h5>Supporting Documents</h5>
          <ul className="list-unstyled">
            <li>
              ID card photocopies of both sides for each of the applicants**
            </li>
            <li>
              1 passport sized coloured photograph with light colour
              background**
            </li>
          </ul>
        </div>
        <div className="visa-notes">
          <p>** Mandatory Documents</p>
        </div>
        <div className="visa-desc">
          <h5>Required documents for self-employed and employed applicants:</h5>
          <ul className="list-unstyled">
            <li>Completed Visa Application Form</li>
            <li>Flight reservation number or copy of the ticket</li>
            <li>
              Clear coloured photocopy of the passport. (2nd and 3rd pages,
              pages that show validation dates of the passport, 60th page, 5th
              page which shows children who are travelling with and endorsed in
              that passport) If using e-passport, photocopy of the single page
              having picture
            </li>
            <li>
              Photocopy of the ID card’s of the children who are endorsed in the
              passport (both sides)
            </li>
            <li>
              ID card photocopies of both sides for each of the applicants
            </li>
            <li>
              1 passport sized coloured photograph with light colour background
            </li>
            <li>Visa fee</li>
            <li>
              A petition written and stamped on company letterhead indicating
              the dates and reason of visit
            </li>
            <li>
              Letter of Invitation from friend or relatives, along with their
              UAE resident visa copy or hotel confirmation voucher if travelling
              alone
            </li>
          </ul>
        </div>
        <div className="visa-desc">
          <h5>Required documents for retired applicants:</h5>
          <ul className="list-unstyled">
            <li>Completed Visa Application Form</li>
            <li>Flight reservation number or copy of the ticket</li>
            <li>
              Clear coloured photocopy of the passport. (2nd and 3rd pages,
              pages that show validation dates of the passport, 60th page, 5th
              page which shows children who are travelling with and endorsed in
              that passport) If using e-passport, photocopy of the single page
              having picture
            </li>
            <li>
              Photocopy of the ID card’s of the children who are endorsed in the
              passport (both sides)
            </li>
            <li>
              ID card photocopies of both sides for each of the applicants
            </li>
            <li>
              1 passport sized coloured photograph with light colour background
            </li>
            <li>Visa fee</li>
            <li>
              Letter of Invitation from friend or relatives, along with their
              UAE resident visa copy or hotel confirmation voucher if travelling
              alone
            </li>
          </ul>
        </div>
        <div className="visa-desc">
          <h5>Required documents for un-employed applicants:</h5>
          <ul className="list-unstyled">
            <li>Completed Visa Application Form</li>
            <li>Flight reservation number or copy of the ticket</li>
            <li>
              Clear coloured photocopy of the passport. (2nd and 3rd pages,
              pages that show validation dates of the passport, 60th page, 5th
              page which shows children who are travelling with and endorsed in
              that passport) If using e-passport, photocopy of the single page
              having picture
            </li>
            <li>
              Photocopy of the ID card’s of the children who are endorsed in the
              passport (both sides)
            </li>
            <li>
              ID card photocopies of both sides for each of the applicants
            </li>
            <li>
              1 passport sized coloured photograph with light colour background
            </li>
            <li>Visa fee</li>
            <li>
              Letter of Invitation from friend or relatives, along with their
              UAE resident visa copy or hotel confirmation voucher if travelling
              alone
            </li>
          </ul>
        </div>
        <div className="visa-desc">
          <h5>Required documents for student applicants:</h5>
          <ul className="list-unstyled">
            <li>Completed Visa Application Form</li>
            <li>Flight reservation number or copy of the ticket</li>
            <li>
              Clear coloured photocopy of the passport. (2nd and 3rd pages,
              pages that show validation dates of the passport, 60th page, 5th
              page which shows children who are travelling with and endorsed in
              that passport) If using e-passport, photocopy of the single page
              having picture
            </li>
            <li>
              Photocopy of the ID card’s of the children who are endorsed in the
              passport (both sides)
            </li>
            <li>
              ID card photocopies of both sides for each of the applicants
            </li>
            <li>
              1 passport sized coloured photograph with light colour background
            </li>
            <li>Visa fee</li>
            <li>
              Letter of Invitation from friend or relatives, along with their
              UAE resident visa copy or hotel confirmation voucher if travelling
              alone
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class Faqs extends React.Component {
  render() {
    return (
      <div className="visa-content visa-faq ">
        <div className="visa-desc">
          <h5>1. Who can apply for a UAE visa?</h5>
          <p>Any Passengers holding international passport.</p>
        </div>
        <div className="visa-desc">
          <h5>
            2. What are the advantages of applying for a visa through Global
            Beds?
          </h5>
          <p>
            On applying for a visa through Global Beds, it eliminates the
            process of finding a local sponsor in UAE and it is convenient and
            cost effective. You can book your hotel stay together with visa.
          </p>
        </div>
        <div className="visa-desc">
          <h5>3. What is the procedure for applying for a visa to UAE?</h5>
          <p>
            If an Individual is qualifying as per the eligibility criteria,
            he/she can download the application form from the website fill it up
            &amp; send it online across to Visa Support, along with all the
            required documents.
          </p>
        </div>
        <div className="visa-desc">
          <h5>
            4. How many days prior to the date of Travel can an Individual apply
            or process the visa application?
          </h5>
          <p>
            A passenger can apply for his/ her visa a maximum of 2 months prior
            to the date of travel. As the validity of the visa is 58 days from
            the date of issue.
          </p>
        </div>
        <div className="visa-desc">
          <h5>
            5. Is the Visa fees inclusive of all charges or any additional
            service charges are charged?
          </h5>
          <p>
            The Visa fees are inclusive of all charges, and there are no
            additional charges for the same in case of Credit Card payment.
            Payment by bank is possible by transferring the final amount we
            specify to our bank account, whose details will be emailed to you on
            receipt of your request. An additional Dhs. 100 (19 Euro/ 21 USD)
            will be added to the final amount for covering bank charges.
          </p>
        </div>
        <div className="visa-desc">
          <h5>6. What type of visa is it?</h5>
          <p>
            The visa is an electronic visa which is updated directly on your
            PNR.
          </p>
        </div>
        <div className="visa-desc">
          <h5>7. Are the visa fees same for infants?</h5>
          <p>
            Yes, The visa fees are same for an infant or an adult passenger.
          </p>
        </div>
        <div className="visa-desc">
          <h5>8. Is it a single or a multi entry visa?</h5>
          <p>It is a single entry visa.</p>
        </div>
        <div className="visa-desc">
          <h5>9. Can the entry &amp; exit, be from any airport of UAE?</h5>
          <p>
            The entry and exit of the passenger has to be from the Dubai Airport
            only. But he / she is permitted to go to any part of UAE by any
            other mode of transportation.
          </p>
        </div>
        <div className="visa-desc">
          <h5>10. Does Global Beds process work permit / residence visa?</h5>
          <p>
            We do not process work permit / residence visa, we process Single
            Entry Short Term Visit 30 Days Visa only.
          </p>
        </div>
        <div className="visa-desc">
          <h5>11. Is the visa fee refundable?</h5>
          <p>
            The Visa fees as levied to the applicants are non-refundable under
            any circumstances whatsoever.
          </p>
        </div>
      </div>
    );
  }
}

class visa extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {/* secondary menu */}
        <SecondaryMenu />
        {/* search wrapper */}
        <div className="row search-wrapper">
          {/* visa heading */}
          <div className="col-md-12">
            <div className="visa-heading">
              <h5>Visa</h5>
              <a href className="btn btn-orange">
                APPLY FOR E-VISA
              </a>
            </div>
          </div>
          <HashRouter>
            <div className="col-md-3">
              <div className="visa-tabs">
                <ul className="list-unstyled">
                  <li data-menu="visa-overview">
                    <NavLink
                      exact
                      to="/visa/"
                      activeStyle={{ color: "white", background: "#2f90d3" }}
                    >
                      Overview
                    </NavLink>
                  </li>
                  <li data-menu="visa-processing">
                    <NavLink
                      to="/visa/processing_time"
                      activeStyle={{ color: "white", background: "#2f90d3" }}
                    >
                      Processing Time
                    </NavLink>
                  </li>
                  <li data-menu="visa-supporting">
                    <NavLink
                      to="/visa/supporting_document"
                      activeStyle={{ color: "white", background: "#2f90d3" }}
                    >
                      Supporting Document
                    </NavLink>
                  </li>
                  <li data-menu="visa-faq">
                    <NavLink
                      to="/visa/faqs"
                      activeStyle={{ color: "white", background: "#2f90d3" }}
                    >
                      FAQ's
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </HashRouter>
          <div className="col-md-9">
            <div className="visa-description-wrapper">
              <Route exact path="/visa/" component={Overview} />
              <Route path="/visa/processing_time" component={ProcessingTime} />
              <Route
                path="/visa/supporting_document"
                component={SupportingDocument}
              />
              <Route path="/visa/faqs" component={Faqs} />
            </div>
          </div>
        </div>
        {/* Js */}
      </div>
    );
  }
}

export default visa;
