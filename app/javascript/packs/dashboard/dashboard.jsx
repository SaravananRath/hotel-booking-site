// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "../common/common.css";

import { AppHeader, AppFooter } from "../common/header_footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppHeader />
        <div className="text-center">
          <p>Home Page Children</p>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default Home;
