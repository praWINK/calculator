import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';



class ListMeetingRoom extends Component {
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
                <div class="top-sub-bar">
                    <ul>
                        <li><a href="#" class="click-me">Filters <i class="fa fa-angle-down"></i></a></li>
                        <li>
                            <h6>Meeting Notes</h6></li>
                        <li class="pull-right">
                            <a href="#" onClick={()=> this.props.history.push("/addMeetingImage")} style={{ color: "#179286", paddingRight: "29px" }}>Add Meeting Note</a>
                        </li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-container card-filter customer-filter no-padding" style={{ display: "none" }}>
                                            <div class="meeting-min-con">
                                                <div class="row">
                                                    <div class="col-md-8 product-form">
                                                        <div class="col-md-6">
                                                            <div class="col-md-12 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Search Meeting Notes</label><br/>
                                                                        <span>BY</span>
                                                                        <br/>
                                                                            <select class="form-control" name="">
                                                                                <option value="style">Select</option>
                                                                                <option value="style">Meeting Notes ID</option>
                                                                                <option value="style">Customer Name</option>
                                                                                <option value="style">Customer Department</option>
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
                                                                            <div class="col-md-12 mm-btns" style={{ marginTop: "8%" }}>
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
                                                                    <table class="striped">
                                                                        <thead>
                                                                            <tr>
                                                                                <th data-field="date">Date</th>
                                                                                <th data-field="id">Meeting Notes ID</th>
                                                                                <th data-field="name"> Customer Name</th>
                                                                                <th data-field="price">Customer Department</th>
                                                                                <th data-field="price">Buyer Name</th>
                                                                                <th colspan="3" data-field="price">Action</th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr>
                                                                                <td>24-11-2016</td>
                                                                                <td><a href="styles.html" class="linker">MN-00324</a></td>
                                                                                <td>Virat</td>
                                                                                <td>Gemma</td>
                                                                                <td>lause</td>
                                                                                <td><a href="#" class="view" title="View" onClick={()=> this.props.history.push("/viewMeeting")}><i class="material-icons">visibility</i></a></td>
                                                                                <td><a href="#" onClick={()=> this.props.history.push("/editMeeting")} class="edit" title="Edit"><i class="material-icons">create</i></a></td>
                                                                                <td><a href="#" class="clone" title="Clone"><i class="fa fa-clone"></i></a></td>
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

export default ListMeetingRoom;









