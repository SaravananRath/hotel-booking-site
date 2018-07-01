// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "../common/common.css";
import GBLogo from "../common/GBLogo";
import { AppHeader, HomeFooter } from "../common/header_footer";

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={section}>
          <GBLogo />
          {/*<div>
            <p>
              <a href="http://globalbeds.com/sites/all/themes/bootstrap/images/GB_Privacy_Policy.pdf" target="_blank">
              <i style={download}></i>Download Pdf</a>  
              <a href="javascript: w=window.open('http://globalbeds.com/sites/all/themes/bootstrap/images/GB_Privacy_Policy.pdf'); w.print();  ">
              <i style={print}>
              </i>​​​​​​​​​​​​​​​​​Print pdf</a>
            </p>
          </div>*/}
          <div>
            <h1 class="page-header">Privacy Policy</h1>
          </div>
          <p>
            Thank you for visiting{" "}
            <a href="http://globalbeds.com/" style={orange}>
              www.globalbeds.com
            </a>{" "}
            website. Your privacy is very important to us, and we provide this
            privacy policy statement to explain our online information practices
            and the choices you can make about the way your personal information
            is collected and used.
          </p>

          <p>
            For your convenience, this website contains links to a number of
            other websites, both inside and outside{" "}
            <a href="http://globalbeds.com/" style={orange}>
              www.globalbeds.com
            </a>. The privacy policies and procedures here do not apply to those
            sites.
          </p>

          <p>
            The purpose of this privacy policy is to set out the principles
            governing our use of personal information that we may obtain about
            you. By using the websites, or by registering as a user of the
            services that we provide, you agree to this use. We ask you to read
            this privacy policy carefully. Any dispute which may arise over
            privacy will be subject to this policy, the data protection notice
            (if any) incorporated into this website and the provisions of
            Turkish Law.
          </p>

          <p>
            We may change our privacy policy from time to time. We therefore ask
            you to check it occasionally to ensure that you are aware of the
            most recent version that will apply each time you access this
            website.
          </p>

          <h3>
            <span style={bold}>Personal information collection and use </span>
          </h3>

          <p>
            We may use the information you provide about yourself to fulfil your
            requests for our products, programmes, and services, to respond to
            your inquiries about our offerings, and to offer you other products,
            programmes or services that we believe may be of interest to you.
            Sometimes, we also use this information to communicate with you,
            such as when we make changes to our subscriber agreements.
          </p>

          <p>
            Although we take appropriate measures to safeguard against
            unauthorised disclosures of information, we cannot assure you that
            personally identifiable information that we collect will never be
            disclosed in a manner that is inconsistent with this Privacy
            Statement.
          </p>

          <p>
            E-mail addresses may be used to inform clients of services and
            offers which are most likely to be of interest to them. With respect
            to this use of personal information, customers may at any time
            indicate their preference not to receive such information by
            changing their account settings. Or may click on a link named{" "}
            <em>“Unsubscribe”</em>which is embedded with every email sent by{" "}
            <a href="http://globalbeds.com/" style={orange}>
              www.globalbeds.com
            </a>{" "}
            in order not to receive future messages.
          </p>

          <h3>
            <span style={bold}>Use of cookies</span>
          </h3>

          <p>
            To enhance your experience with our sites, many of our web pages use
            `cookies.` Cookies are text files we place in your computer`s
            browser to store your preferences. Cookies, by themselves, do not
            tell us your e-mail address or other personally identifiable
            information unless you choose to provide this information to us by,
            for example, registering at one of our sites.
          </p>

          <p>
            We use cookies to understand site usage and to improve the content
            and offerings on our sites. They cannot be used to identify you. You
            may set your web browser to notify you of cookie placement requests
            or to decline cookies completely. You can delete the files that
            contain cookies; those files are stored as part of your internet
            browser.
          </p>

          <h4>
            <span style={bold}>Contacting Us </span>
          </h4>

          <p>
            If you have any questions about this privacy statement, the
            practices of this site, or your dealings with this website, you can
            contact us:
          </p>

          <p>
            <a href="mailto:global@globalbeds.com" style={orange}>
              global@globalbeds.com
            </a>
          </p>

          <p>Phone: +90 212 231 66 93</p>

          <p>
            <strong>
              Global Beds/ Tan Turizm Havayolu Tasimacilik Bilgisayar Elektronik
              San. ve Dis Tic. A.S{" "}
            </strong>
          </p>

          <p>
            <strong>Company Address:</strong> Bab-i Ali Cad. No:3 Kat:4,
            Cagaloglu / Istanbul, Turkey
          </p>
        </div>

        <div style={footer}>
          <HomeFooter />
        </div>
      </div>
    );
  }
}

const section = {
  fontSize: "14px",
  marginLeft: "130px",
  marginRight: "130px",
  display: "block"
};

const footer = {
  marginTop: "40px",
  position: "relative",
  borderTop: "1px solid #ddd",
  backgroundColor: "#ededed"
};

const body = {
  position: "relative",
  top: "-100px",
  float: "right",
  right: "10px"
};

const download = {
  color: "black"
};

const print = {
  color: "blue"
};

const orange = {
  color: "#ff6600"
};

const bold = {
  color: "#404040",
  fontSize: "18px"
};

export default PrivacyPolicy;
