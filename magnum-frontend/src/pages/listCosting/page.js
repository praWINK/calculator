import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class CostList extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.enableMultiSelect()
    }

    enableMultiSelect() {
        // $(document).ready(function () {
        //     $('#range-slct').multiselect();
        // });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div class="top-sub-bar">
                    <ul>
                        <li><a href="#" class="click-me">Filters <i class="fa fa-angle-down"></i></a></li>
                        <li><h6>Manage Costing</h6></li>
                        <li class="pull-right"><a></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="col-md-12 comparison-con text-center" id="">
                                            <p class="compare_topic text-center">Costing IDs to compare!</p>
                                            <ul class="costing_id">
                                                <li>SR-007324-1</li>
                                                <li>SR-007323-6</li>
                                            </ul>
                                            <a href="costing-comparison.html" type="button" class="primary" name="button">Compare</a>
                                            <button type="button" class="primary clear-close" name="button">Clear</button>
                                        </div>
                                        <div class="card-filter customer-filter no-padding" style={{display:"none"}}>
                                            <div class="meeting-min-con">
                                                <div class="row">
                                                    <div class="col-md-8 product-form">
                                                        <div class="col-md-6">
                                                            <div class="col-md-12 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Search Costing</label><br />
                                                                    <span>BY</span>
                                                                    <br />
                                                                    {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span> -->
                                                                    <!-- <input type="text" class="form-control" placeholder="F-66836 AS IS"> --> */}
                                                                        <select class="form-control" name="">
                                                                            <option value="style">Select</option>
                                                                            <option value="style">Magnum Style Number</option>
                                                                            <option value="style">Magnum Style Name</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="col-md-12 step-one ">
                                                                    <div class="form-group">
                                                                        <label for="ref-no"></label><br />
                                                                        <span>FOR</span>
                                                                        <br />
                                                                        <input type="text" class="form-control" name="" value="" />
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

                                            <div class="card-container cust-card-con">
                                                <div class="table-container">
                                                    <table class="striped" >
                                                        <thead>
                                                            <tr>
                                                                <th data-field="id">ID</th>
                                                                <th data-field="order-id">Order ID</th>
                                                                <th data-field="no">Style No</th>
                                                                <th data-field="name">Style Name</th>
                                                                <th data-field="type">Type</th>
                                                                <th data-field="date">Date</th>
                                                                <th data-field="name">Garment</th>
                                                                <th data-field="cost">Cost</th>
                                                                <th data-field="approval">Approved</th>
                                                                <th colspan="4" data-field="price">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>SR-007324-1</td>
                                                                <td>SR-007324</td>
                                                                <td>22490</td>
                                                                <td>Ud De Ville Dress</td>
                                                                <td>Sample Costing (Non-Sizewise)</td>
                                                                <td>14-10-2016</td>
                                                                <td>Dress</td>
                                                                <td>320.38INR</td>
                                                                <td>No</td>
                                                                <td><a style={{cursor:"pointer"}} onClick={()=> this.props.history.push("/viewCost")} class="view" title="View"><i class="material-icons">visibility</i></a></td>
                                                                <td><a class="clone clones" title="View"><i class="fa fa-clone"></i></a></td>
                                                                <td><a style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/editCost")} class="edit" title="Edit"><i class="material-icons">create</i></a></td>
                                                                <td><a href="#" class="delete" title="Delete"><i class="material-icons">delete</i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>SR-007323-6</td>
                                                                <td>SR-007324</td>
                                                                <td>22490</td>
                                                                <td>Ud De Ville Dress</td>
                                                                <td>Sample Costing (Non-Sizewise)</td>
                                                                <td>14-10-2016</td>
                                                                <td>Dress</td>
                                                                <td>320.38INR</td>
                                                                <td>No</td>
                                                                <td><a style={{ cursor: "pointer" }} onClick={()=> this.props.history.push("/viewCost")} class="view" title="View"><i class="material-icons">visibility</i></a></td>
                                                                <td><a href="" class="clone" title="View"><i class="fa fa-clone"></i></a></td>
                                                                <td><a style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/editCost")} class="edit" title="Edit"><i class="material-icons">create</i></a></td>
                                                                <td><a href="#" class="delete" title="Delete"><i class="material-icons">delete</i></a></td>
                                                            </tr>
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

export default CostList;

{/* <script>
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2017-08-22',
            navLinks: true, // can click day/week names to navigate views
            businessHours: true, // display business hours
            editable: true,
            events: [{
                title: 'MAKE NK TAPE',
                start: '2017-09-01T10:35:00',
                End: '2017-09-01T19:35:00',
                color: '#00BCD4'
            }
            ]
        });

    });
   </script> */}



