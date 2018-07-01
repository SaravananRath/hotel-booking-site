import React from "react";
import ReactDOM from "react-dom";

class GBLogo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 col-sm-3 col-md-3">
          <div className="navbar-header">
            <a className="logo navbar-btn pull-left" href="/" title> <img src="https://www.globalbeds.com/sites/all/themes/bootstrap/images/Dorak-logo.png" alt />
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5">
        </div>
        {/* <a class="name navbar-brand" href="/" title="Home">Global Beds</a> */}
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" autoComplete="off">
          <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" />
        </button>
      </div>
    );
  }

}
export default GBLogo;