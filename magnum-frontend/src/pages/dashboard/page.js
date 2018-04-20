import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'

import {Link} from 'react-router-dom';
class Dashboard extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <Fragment>
                <Header />
                <div className="top-sub-bar">
                    <ul>
                        <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <h6>View Customer</h6></li>
                        <li>
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-8 nopadding">
                                        <div class="card-container">
                                            <div class="card-filer">
                                                <ul>
                                                    <li><a href="#" class="selected">All</a></li>
                                                    <li><a href="#">Read</a></li>
                                                    <li><a href="#">Unread</a></li>
                                                </ul>
                                            </div>
                                            <div class="card-light">
                                                <a href="#">
                                                    <div class="feed-unread"><i class="fa fa-bell"></i></div>
                                                    <h4>Nethan garments, Chennai is confirmed your design NBEY244 - utility shirt dress </h4>
                                                </a>
                                                <p>2 hours ago | for your order id : SR-064764 | Style No : 34452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light card-light-viewd">
                                                <a href="#">
                                                    <div class="feed-read"><i class="icons icon-bell"></i></div>
                                                    <h4>Matala Mainrange Papaya , Mumbai is confirmed your design SBEY254 - Men's shirt dress </h4>
                                                </a>
                                                <p>3 hours ago | for your order id : SR-065764 | Style No : 37452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light">
                                                <a href="#">
                                                    <div class="feed-unread"><i class="fa fa-bell"></i></div>
                                                    <h4>Best Seller India verdo moda, Delhi is requested new design - Initial Design </h4>
                                                </a>
                                                <p>2 hours ago | new order id : SR-064764 | Style No : 34452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light">
                                                <a href="#">
                                                    <div class="feed-unread"><i class="fa fa-bell"></i></div>
                                                    <h4>Next Ladies wears Casuals, Chennai is requested a new design ST55451 - VM Truper Ls shirt  </h4>
                                                </a>
                                                <p>10 hours ago | for your order id : NL-064764 | Style No : 454514</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light card-light-viewd">
                                                <a href="#">
                                                    <div class="feed-read"><i class="icons icon-bell"></i></div>
                                                    <h4>Nethan garments,Chennai is confirmed your design NBEY244 - utility shirt dress </h4>
                                                </a>
                                                <p>2 hours ago | for your order id : SR-064764 | Style No : 34452</p>
                                                <p>Confirmed </p>
                                            </div>


                                            <div class="card-light card-light-viewd">
                                                <a href="#">
                                                    <div class="feed-read"><i class="icons icon-bell"></i></div>
                                                    <h4>Nethan garments, Chennai is confirmed your design NBEY244 - utility shirt dress </h4>
                                                </a>
                                                <p>2 hours ago | for your order id : SR-064764 | Style No : 34452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light">
                                                <a href="#">
                                                    <div class="feed-unread"><i class="fa fa-bell"></i></div>
                                                    <h4>Matala Mainrange Papaya , Mumbai is confirmed your design SBEY254 - Men's shirt dress </h4>
                                                </a>
                                                <p>3 hours ago | for your order id : SR-065764 | Style No : 37452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light">
                                                <a href="#">
                                                    <div class="feed-unread"><i class="fa fa-bell"></i></div>
                                                    <h4>Best Seller India verdo moda, Delhi is requested new design - Initial Design </h4>
                                                </a>
                                                <p>2 hours ago | new order id : SR-064764 | Style No : 34452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light">
                                                <a href="#">
                                                    <div class="feed-unread"><i class="fa fa-bell"></i></div>
                                                    <h4>Next Ladies wears Casuals, Chennai is requested a new design ST55451 - VM Truper Ls shirt  </h4>
                                                </a>
                                                <p>10 hours ago | for your order id : NL-064764 | Style No : 454514</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="card-light card-light-viewd">
                                                <a href="#">
                                                    <div class="feed-read"><i class="icons icon-bell"></i></div>
                                                    <h4>Nethan garments,Chennai is confirmed your design NBEY244 - utility shirt dress </h4>
                                                </a>
                                                <p>2 hours ago | for your order id : SR-064764 | Style No : 34452</p>
                                                <p>Confirmed </p>
                                            </div>

                                            <div class="load-more">
                                                <ul>
                                                    <li class="next"><a href="#">Next</a></li>
                                                    <li class="prev"><a href="#" class="inactive">Prev</a></li>

                                                </ul>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="col-md-4 nopadding">
                                        <div class="right-section-more">
                                            <div class="activites-card text-center">
                                                <h1>Magnum Calendar</h1>
                                                <p><i class="icons icon-calendar"></i> 16 Sep, 2017</p>
                                                {/* <button class="calendarBtn btn">Create Event</button>  */}
                                                <Link  to="/calendar"><a href="#"  class="primary">Create Event</a></Link>
                                                {/* <div class="or">or</div>  */}
                                                {/* <div class="activites-filter">
                                                    <form>
                                                        <ul>
                                                            <li><input type="text" name="" placeholder="Pic a date"></li>
                                                                <li><button>Submit</button></li>
                                                        </ul>
                                                    </form>
                                                </div>  */}

                                            </div>


                                            <div class="activites-card">
                                                <h5>Magnum Messenger</h5>
                                                <div class="chatNotifyerBox">
                                                    <Link to="/communication"><a href="">
                                                        <ul>
                                                            <li>Communication</li>
                                                            <li>Style 36502</li>
                                                            <li><p>3</p></li>
                                                        </ul>
                                                        <ul>
                                                            <li>Communication</li>
                                                            <li>Style 36402</li>
                                                            <li><p>11</p></li>
                                                        </ul>
                                                    </a></Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;







