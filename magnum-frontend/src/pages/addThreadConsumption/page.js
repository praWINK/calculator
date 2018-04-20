import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class AddThreadConsumption extends Component {
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
                        <li><a href="#"></a></li>
                        <li>
                            <h6>Create Thread Consumption</h6></li>
                        <li class="pull-right">

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

                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                            <div class="row" style={{padding:"0 0 1% 0"}}>
                                                <div class="col-md-12 product-form">
                                                    <div class="col-md-12 nopadding">
                                                        <div class="col-md-8 nopadding thread-consumption-sec1">
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Style No</label>
                                                                    <span><h6>42590</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Style Name</label>
                                                                    <span><h6>Lurex - Gingham Check Shirt</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Customer Name</label>
                                                                    <span><h6>Example Name</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Style REf No</label>
                                                                    <span><h6>A</h6></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 nopadding">
                                                        <div class="col-md-12 nopadding thread-consumption-sec1">
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Sample Type</label>
                                                                    <select class="form-control" name="">
                                                                        <option>Select</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Sample Date</label>
                                                                    <input type="date" class="form-control" placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Size</label>
                                                                    <input type="text" class="form-control" placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Chart Prepared On</label>
                                                                    <input type="date" class="form-control" placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Chart Prepared By</label>
                                                                    <input type="text" class="form-control" placeholder="" readonly/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                            <div class="row" style={{padding:"0 0 1% 0"}}>
                                                <div class="col-md-12 product-form nopadding">
                                                    <div class="col-md-12 nopadding">
                                                        <div class="col-md-12 thread-consumption-sec2">
                                                            <table class="lined bordered responsive-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>S. No</th>
                                                                        <th>Operations</th>
                                                                        <th>Machine</th>
                                                                        <th>Length</th>
                                                                        <th>Factor</th>
                                                                        <th>Rating</th>
                                                                        <th>Total</th>
                                                                        <th>Needle</th>
                                                                        <th>Looper</th>
                                                                        <th>over Lock</th>
                                                                        <th>Trim Thread</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    <tr>
                                                                        <td>1.</td>
                                                                        <td>
                                                                            <select class="form-control" name="">
                                                                                <option value="">Select</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <select class="form-control" name="">
                                                                                <option value="">Select</option>
                                                                            </select>
                                                                        </td>
                                                                        <td><input type="text" class="form-control small" name="" value="" placeholder="24" /></td>
                                                                        <td><input type="text" class="form-control small" name="" value="" /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><a class="btn-floating float-btn btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2.</td>
                                                                        <td>
                                                                            <select class="form-control" name="">
                                                                                <option value="">Select</option>
                                                                            </select>
                                                                        </td>
                                                                        <td>
                                                                            <select class="form-control" name="">
                                                                                <option value="">Select</option>
                                                                            </select>
                                                                        </td>
                                                                        <td><input type="text" class="form-control small" name="" value="" placeholder="24" /></td>
                                                                        <td><input type="text" class="form-control small" name="" value="" /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3"></td>
                                                                        <td colspan="3" rowspan="2" class="text-right thread-label">Total MTRS Required</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="thread-label">Wastage</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td class="thread-label"> % </td>
                                                                        {/* <td colspan="3"></td> */}
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="thread-label">Other Sizes</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td class="thread-label"> % </td>
                                                                        <td colspan="8"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th colspan="7"></th>
                                                                        <th>Needle</th>
                                                                        <th>Looper</th>
                                                                        <th>over Lock</th>
                                                                        <th>Trim Thread</th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="thread-label">Wash</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td class="thread-label"> % </td>
                                                                        <td colspan="1"></td>
                                                                        <td rowspan="2" colspan="3" class="thread-label">TOTAL MTRS OF THREAD REQD</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4"></td>
                                                                        {/* <td colspan="2" class=""></td> */}
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="thread-label">TOTAL</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td class="thread-label"> % </td>
                                                                        <td colspan="2"></td>
                                                                        <td colspan="2" class="">TOTAL THREAD</td>
                                                                        <td><input type="text" class="form-control" name="" value="" readonly /></td>
                                                                        <td class="thread-label">MTRS</td>
                                                                        <td colspan="2"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="col-md-12 profile-btn text-center">
                                                            <a onClick={() => this.props.history.push("/listThreadConsumption")} class="primary" style={{ color: "white", cursor: "pointer" }}>Back</a> <button type="button" class="primary" name="button">Save</button>
                                                        </div>
                                                    </div>
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

export default AddThreadConsumption;

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



