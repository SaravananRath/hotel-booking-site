import React from "react";
import ReactDOM from "react-dom";

import { Collapse, Button, CardBody, Card, CardDeck, CardHeader } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "./search_result.css";
import "../common/materialdesignicons.min.css";
import Footer from "../common/Footer";
import Header from "../common/Header"
import SecondaryMenu from "../common/SecondaryMenu";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import * as GBLogo from "../common/images/global-beds-logo.png";
import * as Country from "../common/images/country.png";
import * as Hotel from "../common/images/unwanted/hotel.jpg";

const images = [
  GBLogo, Country, Hotel
];

import {
 Route,
 NavLink,
 Link,
 HashRouter
} from "react-router-dom";

let arr:number[] = new Array(100).fill(false);

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse: false,
      list: [1,2,3],
      photoIndex: 0,
      isOpen: false,
      };
  }

  toggle = (e) => {
    console.log(e.target);
    if(arr[e.target.id]==false)
    {
      arr.fill(false);
      arr[e.target.id]=true;
    }
    else
    {
      arr.fill(false);
    }
    this.forceUpdate(); 
  }

  render(){

     return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/* header section */}
        <nav className="navbar navbar-default header-section">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img src={GBLogo} />
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="country-dropdown dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <label className="p-name">
                      <h5>
                        <img src={Country} />
                        country
                      </h5>
                    </label>
                    <i className="mdi mdi-chevron-down" />
                  </button>
                  <div className="dropdown-menu">
                    <ul className="list-unstyled">
                      <li>
                        <img src={Country} />
                        India
                      </li>
                      <li>
                        <img src={Country} />
                        Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile-section">
                  <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <label className="p-name">
                        <h5>BALASUBRAMANI V</h5>
                      </label>
                      <i className="mdi mdi-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="">
                            Change Password
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* secondary menu */}
        <div className="row secondary-menu">
          <div className="col-md-6">
            <div className="secondary-menu-icon">
              <label>
                <i className="mdi mdi-menu" />
                MENU
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="secondary-menu-list">
              <ul className="list-unstyled">
                <li>
                  <a href="hotel-search.html">
                    HOTEL
                  </a>
                </li>
                <li>
                  <a href="activity-search.html">
                    ACTIVITY
                  </a>
                </li>
                <li>
                  <a href="visa.html">
                    VISA
                  </a>
                </li>
                <li>
                  <a href="package-search.html">
                    PACKAGE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* search list */}
        <div className="row container-wrapper">
          {/* search filter */}
          <div className="col-md-3">
            <div className="search-filter-sidebar">
              <div className="search-heading-sidebar">
                <h5>Filter</h5>
                <label className="close-sidebar">
                  <i className="mdi mdi-close" />
                </label>
                <label>ClearAll</label>
              </div>
              <div className="search-filter-list" data-open="false">
                <div className="d-filter-list active">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      Show only available hotels
                    </label>
                  </div>
                </div>
              </div>
              <div className="search-filter-list" data-open="false">
                <div className="search-filter-list-heading">
                  <h5>Amenities</h5>
                  <label>
                     {/*<i className="mdi mdi-minus" />
                    <i className="mdi mdi-plus" />*/}
                  </label>
                </div>
                <div className="d-filter-list active">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      24 Hour Check-in
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      SPA
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      Gym
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      Bar
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      Wi - Fi Access
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      Pool
                    </label>
                  </div>
                </div>
              </div>
              <div className="search-filter-list" data-open="false">
                <div className="search-filter-list-heading">
                  <h5>Star Rating</h5>
                  <label>
                    {/*<i className="mdi mdi-minus" />
                    <i className="mdi mdi-plus" />*/}
                  </label>
                </div>
                <div className="d-filter-list active">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      5 Star
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      4 Star
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      3 Star
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      2 Star
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> 
                      1 Star
                    </label>
                  </div>
                </div>
              </div>
              <div className="search-filter-list" data-open="false">
                <div className="search-filter-list-heading">
                  <h5>Pricing</h5>
                  <label>
                    {/*<i className="mdi mdi-minus" />
                    <i className="mdi mdi-plus" />*/}
                  </label>
                </div>
                <div className="d-filter-list active">
                  <label htmlFor="amount">Price range:</label>
                  <input type="text" id="amount" readOnly />
                  <div id="slider-range" />
                </div>
              </div>
            </div>
          </div>
          {/* search result */}
            <div className="col-md-9 pad0">
              {/* result count */}
              <div className="col-md-6">
                <div className="result-count">
                  <h5>
                    <span>
                      5,800
                    </span>
                      out of 5,800 hotels
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="common-form sort-by">
                  <div className="form-group">
                    <label>Sort By</label>
                    <select className="form-control">
                      <option>Our recommendations</option>
                      <option>Rating &amp; Recommended</option>
                      <option>Price &amp; Recommended</option>
                      <option>Distance &amp; Recommended</option>
                      <option>Rating only</option>
                      <option>Price only</option>
                    </select>
                  </div>
                </div>
              </div>
            {/* result card */}

            <div className="col-md-12">
            
            {
            this.state.list.map((list, index) =>
              
              <div  key={index} >
              <CardDeck>
                <Card className="search-result-card">
                  <CardHeader>
                    <div>
                      <div className="search-result-img">
                        <img src={Hotel} />
                      </div>
                        <div className="search-result-desc">
                        <div className="search-result-basic-detail">
                          <h5>
                            <a className="title_hover" id={index}  onClick={this.toggle}>
                              Springs Hotel and Spa
                            </a>
                          </h5>
                          <span>
                            JC Road map
                          </span>
                          <label>
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                          </label>
                          <div className="amenities-list">
                            <ul className="list-unstyled">
                              <li data-toggle="tooltip" data-placement="top" title="Free Wifi">
                                <i className="mdi mdi-wifi" />
                              </li>
                              <li data-toggle="tooltip" data-placement="top" title="Pool">
                                <i className="mdi mdi-pool" />
                              </li>
                              <li data-toggle="tooltip" data-placement="top" title="Car Parking">
                                <i className="mdi mdi-car" />
                              </li>
                              <li>
                                <i className="mdi mdi-pool" />
                              </li>
                              <li>
                                <i className="mdi mdi-parking" />
                              </li>
                              <li data-toggle="tooltip" data-placement="top" title="Restaurant">
                                <i className="mdi mdi-silverware" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="search-cost-deal">
                        <div className="search-result-cost">
                          <label>
                            <del> $450 </del>
                          </label>
                          <span>
                            $250
                          </span>
                        </div>
                        <div className="search-btn">
                          <ul className="list-unstyled">
                            <li>
                              <a href="" className="btn btn-orange">
                                Book Now
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>  
                  </CardHeader>
                  
                  <Collapse isOpen={arr[index]}>
                    <div>
                         {/* view details */}
                          <div className="view-other-details">
                            <div className="other-details-tab">

                              <HashRouter>
                                <ul className="list-unstyled">
                                  <li data-menu="search-photo-list">    
                                    <NavLink exact to="/SearchResult/" activeStyle={{color: "#f29161", borderBottom: "1px solid #f29161"}}>
                                       Photos
                                    </NavLink>
                                  </li>
                                  <li data-menu="search-hotel-desc" >
                                    <NavLink to="/SearchResult/info" activeStyle={{color: "#f29161", borderBottom: "1px solid #f29161"}} >
                                          Info 
                                    </NavLink>
                                  </li>
                                  <li data-menu="search-package-list">
                                    <NavLink to="/SearchResult/room_rates" activeStyle={{color: "#f29161", borderBottom: "1px solid #f29161"}} >
                                        Rooms &amp; Rates 
                                    </NavLink>
                                  </li>
                                </ul>
                                </HashRouter>

                              </div>

                              <div className="other-detail-desc">

                              {/* photo */}
                             
                              {/* result info */}                            

                              {/* package */} 

                                <div>
                                    <Route exact path="/SearchResult/" component={Photos}/>
                                    <Route path="/SearchResult/info" component={Info}/>
                                    <Route path="/SearchResult/room_rates" component={RoomRates}/>                              
                                </div>
                              </div>                           

                           
                          </div>
                      </div>
                  </Collapse>

              </Card>
              </CardDeck>
              </div>
            )
          }
           
          {/* PACKAGE 2 */}

      </div>
      

     

    </div>
  </div>
  {/* Js */}
</div>

    );
  }

}

class Photos extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false
      };
    }
  render(){
    const { photoIndex, isOpen } = this.state;
    return(
      <div>
       <div className="search-other-detail search-photo-list">
            <ul className="list-unstyled">
              <li>
                <img src={Hotel} onClick={() => this.setState({ isOpen: true })}/>
              </li>                              
            </ul>
       </div>

      <div>
      {this.state.isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
      )}
      </div>
      </div>


      );
  }
}

class Info extends React.Component{
 
  render(){
    return(

      <div className="search-other-detail search-hotel-desc">
        <h5>About FabHotel 29th Church Inn</h5>
        <p>
          FabHotel 29th Church Inn M.G. Road is an ideally located budget hotel in Bangalore offering affordable and relaxing accommodation to both leisure and business travelers. The hotel has an ideal location in the hub of the IT city and provides easy access to commercial and tourist destinations. The budget hotel in Bangalore has 40 well-appointed rooms.
        </p>
        <p>
          FabHotel 29th Church Inn M.G. Road is located on Church Street off Brigade and MG Road. It is just 0.6 km from the Chinnaswamy Stadium. Some of the main attractions near this budget hotel in Bangalore are St. Mark's Cathedral (400 m), Visvesvaraya Industrial &amp; Technological Museum (800 m), Bangalore Aquarium (600 m), Indira Gandhi Musical Fountain Park (1.8 km), and Bangalore Palace (3 km). The Canadian Consulate is just 600 meters away while the British Deputy High Commission and German Consulate are less than a kilometer away.
        </p>
        <div className="amenities-list">
          <h5>Amenities</h5>
          <ul className="list-unstyled">
            <li data-toggle="tooltip" data-placement="top"  data-original-title="Free Wifi">
              <i className="mdi mdi-wifi" />
            </li>
            <li data-toggle="tooltip" data-placement="top"  data-original-title="Pool">
              <i className="mdi mdi-pool" />
            </li>
            <li data-toggle="tooltip" data-placement="top"  data-original-title="Car Parking">
              <i className="mdi mdi-car" />
            </li>
            <li>
              <i className="mdi mdi-pool" />
            </li>
            <li>
              <i className="mdi mdi-parking" />
            </li>
            <li data-toggle="tooltip" data-placement="top"  data-original-title="Restaurant">
              <i className="mdi mdi-silverware" />
            </li>
          </ul>
        </div>
      </div>

      );
  }
}

class RoomRates extends React.Component{
  render(){
      return(

        <Card className="search-other-detail search-package-list">  
          <div className="package-column">
            <div className="package-main-heading">
              <h5>
                Double bed Room
              </h5>
            </div>
           
            <div className="package-hotel-amenties">
              <h5>
                Inclusions
              </h5>
              <ul className="list-unstyled">
                <li data-toggle="tooltip" data-placement="top"  data-original-title="Free Wifi">
                  <i className="mdi mdi-wifi" />
                </li>
                <li data-toggle="tooltip" data-placement="top"  data-original-title="Pool">
                  <i className="mdi mdi-pool" />
                </li>
                <li data-toggle="tooltip" data-placement="top"  data-original-title="Car Parking">
                  <i className="mdi mdi-car" />
                </li>
                <li>
                  <i className="mdi mdi-pool" />
                </li>
                <li>
                  <i className="mdi mdi-parking" />
                </li>
                <li data-toggle="tooltip" data-placement="top"  data-original-title="Restaurant">
                  <i className="mdi mdi-silverware" />
                </li>
              </ul>
            </div>
            <div className="package-hotel-price">
              <div className="del_price">
              
                <del>$ 46,559</del>
              
              </div>
              <div className="price">
              
                $ 40,592
              
              </div>
              per night
            </div>
            <div className="package-btn">
              <a href="" className="btn btn-orange">
                SELECT
              </a>
            </div>
          </div>
        </Card>

        );
    }
  }




export default SearchResult;