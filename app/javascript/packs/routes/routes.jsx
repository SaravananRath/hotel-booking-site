import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Home from "../home/home";
import Dashboard from "../dashboard/dashboard";
import PrivacyPolicy from "../common/privacy_policy";
import TermsAndConditions from "../common/terms_and_conditions";
import ResetPassword from "../common/ResetPassword";
import visa from "../common/visa";
import packageSearch from "../packageSearch/packageSearch";
import HotelSearch from "../hotelSearch/HotelSearch";
import activitySearch from "../activitySearch/activitySearch";
import SearchResult from "../hotelSearch/SearchResult";
import HotelDetails from "../hotelSearch/HotelDetails";

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/privacy_policy" component={PrivacyPolicy} />
          <Route path="/terms_and_conditions" component={TermsAndConditions} />
          <Route path="/ResetPassword" component={ResetPassword} />
          <Route path="/visa" component={visa} />
          <Route path="/packageSearch" component={packageSearch} />
          <Route path="/HotelSearch" component={HotelSearch} />
          <Route path="/HotelDetails" component={HotelDetails} />
          <Route path="/SearchResult" component={SearchResult} />
          <Route path="/activitySearch" component={activitySearch} />
        </div>
      </HashRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Routes />, document.getElementById("react-root"));
});
