// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

import * as BallonIstanbulPackage from "../images/packages/baloon-istanbul-package.jpeg";
import * as IstanbulBridge from "../images/packages/istanbul-bridge.jpg";
import * as IstanbulTour from "../images/packages/istanbul-tour.jpg";

import "./package.css";

class PackagesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <div className="thumbnail fixed-img">
            <a href="redirect-destination=packages%7Cview_id=5a561cf3f4b2e28e71e0782d.html">
              <img src={BallonIstanbulPackage} alt="6N7D CAP - ISTAN" />
              <div className="caption image-overflow">
                <button type="submit" className="btn btn-orange">
                  6N7D CAP - ISTAN
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="thumbnail fixed-img">
            <a href="redirect-destination=packages%7Cview_id=5a56194ff4b2e2587ae0782d.html">
              <img src={IstanbulBridge} alt="7N8D ISTANBUL" />
              <div className="caption image-overflow">
                <button type="submit" className="btn btn-orange">
                  7N8D ISTANBUL
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="thumbnail fixed-img">
            <a href="redirect-destination=packages%7Cview_id=5a561398f4b2e25177e0782d.html">
              <img src={IstanbulTour} alt="9N10D ISTAN -  BUR" />
              <div className="caption image-overflow">
                <button type="submit" className="btn btn-orange">
                  9N10D ISTAN - BUR
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Packages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="text-center pad20">
          <h1 className="text-center">Our Special Packages</h1>
          <small>
            <a href="packagecheck.html">click here to see more</a>
          </small>
        </div>
        <PackagesList />
      </div>
    );
  }
}

export default Packages;
