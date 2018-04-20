import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class ListStyle extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="top-sub-bar">
                    <ul>
                        <li><a href="#" className="click-me">Filters <i className="fa fa-angle-down"></i></a></li>
                        <li><h6>Customer</h6></li>
                        <Link to="/addNewStyle"><li className="pull-right"><a>Add New</a></li></Link>
                    </ul>
                </div>
                
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-container card-filter customer-filter no-padding" style={{display:"none"}}>
                                            <div class="meeting-min-con">
                                                <div class="row">
                                                    <div class="col-md-8 product-form">
                                                        <div class="col-md-6">
                                                            <div class="col-md-12 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Search Styles</label><br/>
                                                                        <span>BY</span>
                                                                        <select class="form-control" name="">
                                                                            <option value="style">Select</option>
                                                                            <option value="style">Magnum Style Number</option>
                                                                            <option value="style">Customer Ref No</option>
                                                                            <option value="style">Customer Department</option>
                                                                            <option value="style">Garments</option>
                                                                            <option value="style">Style Name</option>
                                                                        </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="col-md-12 step-one ">
                                                                <div class="form-group">
                                                                    <label for="ref-no"></label><br/>
                                                                        <span>FOR</span>
                                                                        <br/>
                                                                        <input type="text" class="form-control" name="" value=""/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 product-form">
                                                            <div class="col-md-12 mm-btns" style={{marginTop:"8%"}}>
                                                                <div class="col-md-6 col-md-offset-3">
                                                                    <button type="button" class="primary pull-right" name="button">Search</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                     
                                            <div class="card-container">
                                                <div class="table-container">
                                                    <table class="striped" id="">
                                                        <thead>
                                                            <tr>
                                                                <th data-field="number">Style No.</th>
                                                                <th data-field="id">Meeting Notes ID</th>
                                                                <th data-field="name"> Style Name</th>
                                                                <th data-field="price">Customer Ref No.</th>
                                                                <th data-field="price">Customer Department</th>
                                                                <th data-field="price">Garment</th>
                                                                <th data-field="price">Created On</th>
                                                                <th colspan="4" data-field="price">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                        </tbody>
                                                    </table>
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

export default ListStyle;





