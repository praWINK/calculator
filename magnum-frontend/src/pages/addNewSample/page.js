import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import cloth from '../../assets/images/cloth/1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class AddNewSample extends Component {
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
                        <li><h6>ADD Sample Request</h6></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table" id="top">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                            <div class="table-container">
                                                <div class="row" style={{paddingBottom:"1%"}}>
                                                    <div class="col-md-12 product-form no-padding">
                                                        <div class="col-md-12 no-padding">
                                                            <div class="col-md-1 step-one">
                                                                <div class="form-group">
                                                                    <label for="date">Order Date</label>
                                                                    <br />
                                                                    <span>18-2-2017</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-1 step-one">
                                                                <div class="form-group">
                                                                    <label for="date">Request No.</label>
                                                                    <br />
                                                                    <span>60000</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="req">Origination of Request</label>
                                                                    <select class="form-control" id="" name="style-number">
                                                                        <option value="slct">Select</option>
                                                                        <option value="email">Email</option>
                                                                        <option value="mn">Meeting Notes</option>
                                                                        <option value="wa">Whatsapp</option>
                                                                        <option value="ravi">Ravi</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="no">Magnum Style No.</label>
                                                                    <select class="form-control" id="style-selector" name="style-number">
                                                                        <option value="slct">Select</option>
                                                                        <option value="numb">40000</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="type">Type of request</label>
                                                                    <br />
                                                                    <select class="form-control" name="">
                                                                        <option value="type">Initial</option>
                                                                        <option value="type">Production</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="type">Sample Type</label>
                                                                    <br />
                                                                    <select class="form-control" name="">
                                                                        <option value="type">Select</option>
                                                                        <option value="type">Initial Design</option>
                                                                        <option value="type">1st Fit</option>
                                                                        <option value="type">2nd Fit</option>
                                                                        <option value="type">3rd Fit</option>
                                                                        <option value="type">Costing</option>
                                                                        <option value="type">Cutting Approval</option>
                                                                        <option value="type">Gold Seal</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Required Date</label>
                                                                    <br />
                                                                    <input type="date" class="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="numb" class="materials meeting-min-con">
                                                            <div class="row">
                                                                <div class="col-md-12 product-form no-padding">
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label for="item">Buyer Name</label>
                                                                            <input type="text" class="form-control" placeholder="" value="" readonly="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label for="item">Assistant Buyer</label>
                                                                            <input type="text" class="form-control" placeholder="" value="" readonly="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-3 step-one">
                                                                        <div class="form-group">
                                                                            <label for="item">Fabric Technologist</label>
                                                                            <input type="text" class="form-control" placeholder="" value="" readonly="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-3 step-one">
                                                                        <div class="form-group">
                                                                            <label for="item">Garment Technologist</label>
                                                                            <input type="text" class="form-control" placeholder="" value="" readonly="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label for="ref-no">Technologist</label>
                                                                            <br />
                                                                            <select class="form-control" name="">
                                                                                <option value="style">Select</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="samp-req-con">
                                                            <div class="col-md-12" style={{paddingTop:"10px"}}>
                                                                <a href="tag.html" class="primary">generate tag</a>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <ul class="nav-locator">
                                                                    <li><a href="#">Sample</a></li>
                                                                    <li><a href="#">Wash</a></li>
                                                                    <li><a href="#">Fabric</a></li>
                                                                    <li><a href="#">Trim</a></li>
                                                                    <li><a href="#">Garment Tech</a></li>
                                                                    <li><a href="#">pattern</a></li>
                                                                    <li><a href="#">Grading</a></li>
                                                                    <li><a href="#">Cutting</a></li>
                                                                    <li><a href="#">Embroidery </a></li>
                                                                    <li><a href="#">Embellishment</a></li>
                                                                    <li><a href="#">Sewing</a></li>
                                                                    <li><a href="#">QC</a></li>
                                                                    <li><a href="#">Dispatch</a></li>
                                                                    <li><a href="#">Costing Marker</a></li>
                                                                    <li><a href="#">Sign off</a></li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                            <div class="row">
                                                <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                    <div class="wash-container">
                                                        <div class="col-md-12 no-padding">
                                                            <div class="col-md-12 no-padding">
                                                                <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Sample</b></h6>
                                                            </div>
                                                            <div class="samp-req-con">
                                                                <div class="col-md-12 no-padding await-sec">
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label for="sample">Awaiting Dev Sample</label>
                                                                            <div class="switch">
                                                                                <label>
                                                                                    No
                                        <input type="checkbox" />
                                                                                    <span class="lever"></span>
                                                                                    Yes
                                      </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label for="address">Date</label>
                                                                            <input type="date" class="form-control" name="" value="" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-3 step-one">
                                                                        <div class="form-group">
                                                                            <label for="sample">Awaiting / Design Sheet</label>
                                                                            <div class="switch" style={{display:"block"}}>
                                                                                <label>
                                                                                    No
                                                                                    <input type="checkbox" />
                                                                                    <span class="lever"></span>
                                                                                    Yes
                                                                                </label>
                                                                                <div class="upload-box spec-box" style={{display:"block"}}>
                                                                                    <div class="file-field input-field">
                                                                                        <div class="btn" style={{marginBottom:"0"}}>
                                                                                            <p style={{fontSize:"11px"}}>Upload</p>
                                                                                            <input type="file" multiple />
                                                                                        </div>
                                                                                        <div class="file-path-wrapper" style={{display:"none"}}>
                                                                                            <input class="file-path form-control" type="text" style={{marginTop:"9px"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="col-md-12 wrapper ">
                                                                    <div class="col-md-3 size-mngr" style={{marginBottom:"5px"}}>
                                                                        <div class="col-md-6 step-one">
                                                                            <div class="form-group">
                                                                                <label for="address">Size</label>
                                                                                <select class="form-control" name="">
                                                                                    <option value="slct">Select</option>
                                                                                    <option value="no.">1</option>
                                                                                    <option value="no.">3</option>
                                                                                    <option value="no.">6</option>

                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-6 step-one">
                                                                            <div class="form-group">
                                                                                <label for="address">Qty</label>
                                                                                <input type="text" class="form-control" name="" value="" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="add-address">
                                                                            <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                        </div>
                                                                    </div>

                                                                    <div class="second-address-con" style={{display:"none"}}>
                                                                        <div class="col-md-3 size-mngr" style={{marginBottom:"5px", marginLeft:"15px"}}>
                                                                            <div class="col-md-6 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="address">Size</label>
                                                                                    <select class="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="no.">1</option>
                                                                                        <option value="no.">3</option>
                                                                                        <option value="no.">6</option>

                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-6 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="address">Qty</label>
                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="add-address">
                                                                                <a class="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i class="material-icons">clear</i></a>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div class="wash-container wash-address-con" style={{display:"none"}}>
                                                        <div class="col-md-12 no-padding" style={{marginBottom:"10px"}}>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="address">Wash type</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="wash">Soft Wash</option>
                                                                        <option value="wash">Acid wash</option>
                                                                        {/* <!-- <option value="wash">Not-Applicable</option>  --> */}
                                 </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="address">Recipe</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="rec">Select</option>
                                                                        <option value="rec">Gold Back Seal</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="address">laundry Unit</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="rec">Select</option>
                                                                        <option value="rec">Gold Back Seal</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="address">Price</label>
                                                                    <input type="number" class="form-control" name="" value="" placeholder="100.00"/>
                              </div>
                                                                </div>

                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group">
                                                                        <label for="address">Mock Ref No.</label><br />
                                                                        <span><h6>400065</h6></span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-1 step-one">
                                                                    {/* <!-- <a class="btn-floating btn-small waves-effect waves-light green "><i class="material-icons">add</i></a>  --> */}
                           </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-md-12 no-padding text-center profile-btn">
                                                            <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>



                                            <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                <div class="row">
                                                    <div class="col-md-12 product-form" style={{paddingBottom:"1%"}}>
                                                        <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                            <h6 class="dev-title"><b>Garment Technologist</b>
                                                                <span class="printer pull-right"><a><i class="fa fa-print"></i> Print</a></span></h6>
                                                        </div>
                                                        <div class="col-md-12 no-padding">
                                                            <span class="text-center"><h6>SAMPLE RELEASE FORM</h6></span>
                                                            <div class="srf-container">
                                                                <div class="table-container">
                                                                    <table class="striped manage_permissions ">
                                                                        <thead>
                                                                            <tr>
                                                                                <th data-field="comment">Comments recieved from buyer</th>
                                                                                <th data-field="fab">Fab.</th>
                                                                                <th data-field="trim">Trims</th>
                                                                                <th data-field="work">Workmanship</th>
                                                                                <th data-field="change">Buyer's changes</th>
                                                                                <th data-field="pat">Pat.</th>
                                                                                <th data-field="remark">Remarks</th>
                                                                                <th></th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr>
                                                                                <tr class="mod-header">
                                                                                    <th style={{textAlign:"left"}}>Fit Comments</th>
                                                                                    <th colspan="7"></th>
                                                                                </tr>
                                                                                <tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <textarea name="name" rows="4" cols="80" class="form-control" style={{resize:"none"}}>
                                                                                                SLIGHT EXCESS FOUND AT ARMHOLE TOBE REMOVED,
                                          </textarea>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="FAB1" />
                                                                                                <label for="FAB1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="TRM1" />
                                                                                                <label for="TRM1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="MAN1" />
                                                                                                <label for="MAN1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="CHN1" />
                                                                                                <label for="CHN1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="PAT1" />
                                                                                                <label for="PAT1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style={{width:"25%"}}>
                                                                                            <textarea name="name" rows="4" cols="80" class="form-control" style={{resize:"none"}}>
                                                                                            </textarea>
                                                                                        </td>
                                                                                        <td>
                                                                                            <a class="btn-small waves-effect waves-light green row-add-btn pull-right"><i class="material-icons">add</i></a>
                                                                                        </td>
                                                                                    </tr>



                                                                                    <tr class="row-address-con" style={{display:"none"}}>
                                                                                        <td>
                                                                                            <textarea name="name" rows="4" cols="80" class="form-control" style={{resize:"none"}}>
                                                                                                -OK WHEN KEPT TO SPECS
                                          </textarea>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="FAB1" />
                                                                                                <label for="FAB1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="TRM1" />
                                                                                                <label for="TRM1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="MAN1" />
                                                                                                <label for="MAN1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="CHN1" />
                                                                                                <label for="CHN1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p>
                                                                                                <input type="checkbox" class="filled-in" id="PAT1" />
                                                                                                <label for="PAT1"></label>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style={{width:"25%"}}>
                                                                                            <textarea name="name" rows="4" cols="80" class="form-control" style={{resize:"none"}}>
                                                                                            </textarea>
                                                                                        </td>
                                                                                        <td>
                                                                                            <a class="btn-small waves-effect waves-light red row-close-btn pull-right"><i class="material-icons">clear</i></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tr>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 no-padding comments-wrapper">
                                                            <div class="col-md-12 no-padding step-one">
                                                                <div class="form-group">
                                                                    <label for="address">Garment Tech Comments</label>
                                                                    <br />
                                                                    {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span>  --> */}
                           <textarea type="text" rows="6" class="form-control" placeholder=""></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-10 col-md-offset-1 no-padding">
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Marker Requirement</label>
                                                                        <div class="switch">
                                                                            <label>
                                                                                No
                                                                                <input type="checkbox" />
                                                                                <span class="lever"></span>
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">SMV Ammendment</label>
                                                                        <div class="switch">
                                                                            <label>
                                                                                No
                                                                                <input type="checkbox" />
                                                                                <span class="lever"></span>
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Trail Required?</label>
                                                                        <div class="switch">
                                                                            <label>
                                                                                No
                                                                                <input type="checkbox" />
                                                                                <span class="lever"></span>
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Mock</label>
                                                                        <div class="switch">
                                                                            <label>
                                                                                No
                                                                                <input type="checkbox" />
                                                                                <span class="lever"></span>
                                                                                Yes
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 no-padding text-center profile-btn">
                                                            <a href="#" class="primary">Technical Issues</a> <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>



                                            <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                <div class="row">
                                                    <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                        <div class="wash-container">
                                                            <div class="col-md-12 no-padding">
                                                                <div class="col-md-12 no-padding">
                                                                    <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Fabric</b>
                                                                        <a class="btn-floating btn-small waves-effect waves-light green pull-right"><i class="material-icons">add</i></a>
                                                                    </h6>
                                                                </div>
                                                                <div class="col-md-12 no-padding">
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label for="phone">Original / Substitute</label>
                                                                            <div class="switch">
                                                                                <label>
                                                                                    Yes
                                                                                    <input type="checkbox" />
                                                                                    <span class="lever"></span>
                                                                                    No
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-2 step-one">
                                                                        <div class="col-md-8 no-padding">
                                                                            <div class="form-group">
                                                                                <label for="fab-no">Fabric No.</label>
                                                                                <input type="number" class="form-control" placeholder="" />
                                                                             </div>
                                                                            </div>
                                                                            <div class="col-md-2">
                                                                                <span class="popup-box"><a href="#"></a></span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-2 step-one">
                                                                            <div class="form-group">
                                                                                <label for="ref-no">Fabric Position</label>
                                                                                <select class="form-control" name="">
                                                                                    <option value="rec">Select</option>
                                                                                    {/* <!-- <option value="rec"></option>  --> */}
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-2 step-one">
                                                                            <div class="col-md-8 no-padding">
                                                                                <div class="form-group">
                                                                                    <label for="item">Dev Ref No.</label>
                                                                                    <input type="text" class="form-control" placeholder="" value="FD00001" readonly=""/>
                                                                                </div>
                                                                                </div>
                                                                                <div class="col-md-2">
                                                                                    <span class="popup-box"><a href="#"></a></span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-2 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="ref-no">Status</label>
                                                                                    <select class="form-control" name="">
                                                                                        <option value="style">Select</option>
                                                                                        <option value="style">Sourcing</option>
                                                                                        <option value="style">In-House</option>
                                                                                        <option value="style">Under-Development</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-2 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="type">ETA</label>
                                                                                    <br />
                                                                                    <input type="date" class="form-control" name="" value="" />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>



                                                                <div class="col-md-12 no-padding text-center profile-btn">
                                                                    <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    {/* <!-- Trims Starts here  --> */}
               <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                        <div class="row">
                                                            <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                <div class="wash-container">
                                                                    <div class="col-md-12 no-padding">
                                                                        <div class="col-md-12 no-padding">
                                                                            <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>trim</b>
                                                                                <a class="btn-floating btn-small waves-effect waves-light green pull-right"><i class="material-icons">add</i></a>
                                                                            </h6>
                                                                        </div>
                                                                        <div class="col-md-12 no-padding">
                                                                            <div class="col-md-2 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="type">Trim Type</label>
                                                                                    <br />
                                                                                    <select class="form-control" name="">
                                                                                        <option value="type">Select</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-2 step-one">
                                                                                <div class="col-md-8 no-padding">
                                                                                    <div class="form-group">
                                                                                        <label for="item">Trim Number</label>
                                                                                        <br />
                                                                                        {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span>  --> */}
                                                                                        <input type="text" class="form-control" placeholder="" value="TBN-00001"/>
                                                                                    </div>
                                                                                    </div>

                                                                                    <div class="col-md-2">
                                                                                        <span class="popup-box"><a href="#" data-toggle="modal" data-target="#myModal"></a></span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-2 step-one">
                                                                                    <div class="col-md-8 no-padding">
                                                                                        <div class="form-group">
                                                                                            <label for="item">Dev Ref No.</label>
                                                                                            <br />
                                                                                            {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span>  --> */}
                                                                                            <input type="text" class="form-control" placeholder="" value="FD00001" readonly=""/>
                                                                                        </div>
                                                                                        </div>

                                                                                        <div class="col-md-2">
                                                                                            <span class="popup-box"><a href="#"></a></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="type">Status</label>
                                                                                            <br />
                                                                                            <select class="form-control" name="">
                                                                                                <option value="type">Select</option>
                                                                                                <option value="type">Sourcing</option>
                                                                                                <option value="type">Fabric 1/H</option>
                                                                                                <option value="type">Market Source</option>
                                                                                                <option value="type">Under Development in Mill</option>
                                                                                                <option value="type">Fabric Development</option>
                                                                                                <option value="type">Ref No</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="type">ETA</label>
                                                                                            <br />
                                                                                            <input type="date" class="form-control" name="" value="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="type">Comments</label>
                                                                                            <br />
                                                                                            <textarea name="name" class="form-control" rows="4"></textarea>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>{/* <!-- end of col-md-10 col-md-offset-1  --> */}
                                                    
                         </div>

                                                                        </div>



                                                                        <div class="col-md-12 no-padding text-center profile-btn"> 
                                                                        <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>



                                                            <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                <div class="row">
                                                                    <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                        <div class="wash-container">
                                                                            <div class="col-md-12 no-padding">
                                                                                <div class="col-md-12 no-padding">
                                                                                    <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Pattern</b></h6>
                                                                                </div>
                                                                                <div class="col-md-12 no-padding">
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Pattern Master Name</label>
                                                                                            <br />
                                                                                            <select class="form-control" name="">
                                                                                                <option value="cust">Select</option>
                                                                                                {/* <!-- <option value="cust"></option>  --> */}
                                  </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Date</label>
                                                                                            <input type="date" class="form-control" name="" value="" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="phone">Trail Required?</label>
                                                                                            <div class="switch">
                                                                                                <label>
                                                                                                    No
                                                                                                    <input type="checkbox" />
                                                                                                    <span class="lever"></span>
                                                                                                    Yes
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Existing Block Ref No.</label>
                                                                                            <span style={{fontSize:" 12px"}}>60000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-4 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="phone">Have you followed the block required ?</label>
                                                                                            <div class="switch">
                                                                                                <label>
                                                                                                    No
                                                                                                    <input type="checkbox" />
                                                                                                    <span class="lever"></span>
                                                                                                    Yes
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12 nopadding">
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="">Block Ref No.</label>
                                                                                                <input type="text" class="form-control" name="" value="" />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div class="col-md-3 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="remark">Remarks</label>
                                                                                                <input type="text" class="form-control" name="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>



                                                                        <div class="col-md-12 no-padding text-center profile-btn">
                                                                            <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                            {/* <!-- <button type="button" class="primary" name="button">generate report</button>  --> */}
                       </div>
                                                                    </div>

                                                                </div>
                                                            </div>



                                                            <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                <div class="row">
                                                                    <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                        <div class="wash-container">
                                                                            <div class="col-md-12 no-padding">
                                                                                <div class="col-md-12 no-padding">
                                                                                    <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Grading</b></h6>
                                                                                </div>
                                                                                <div class="col-md-12 no-padding">
                                                                                    <div class="col-md-3 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Grading Master Name</label>
                                                                                            <br />
                                                                                            <select class="form-control" name="">
                                                                                                <option value="cust">Select</option>
                                                                                                {/* <!-- <option value="cust"></option>  --> */}
                                  </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Date</label>
                                                                                            <input type="date" class="form-control" name="" value="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-3 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Grading</label>
                                                                                            <div class="switch">
                                                                                                <label>
                                                                                                    No
                                      <input type="checkbox" />
                                                                                                    <span class="lever"></span>
                                                                                                    Yes
                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>



                                                                        <div class="col-md-12 no-padding text-center profile-btn">
                                                                            <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                            <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                <div class="row">
                                                                    <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                        <div class="wash-container">
                                                                            <div class="col-md-12 no-padding">
                                                                                <div class="col-md-12 no-padding">
                                                                                    <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>CUTTing</b>
                                                                                        <a class="btn-floating btn-small waves-effect waves-light green pull-right"><i class="material-icons">add</i></a></h6>

                                                                                </div>
                                                                                <div class="col-md-12 no-padding">
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group no-padding">
                                                                                            <label for="ref-no">Cutting Master Name</label>
                                                                                            <br />
                                                                                            <select class="form-control" name="">
                                                                                                <option value="cust">Select</option>
                                                                                                {/* <!-- <option value="cust"></option>  --> */}
                                  </select>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Date</label>
                                                                                            <input type="date" class="form-control" name="" value="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Any Pattern Issues?</label>
                                                                                            <select class="form-control" name="">
                                                                                                <option value="">Select</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="">Any Fabric Issues?</label>
                                                                                            <div class="switch">
                                                                                                <label>
                                                                                                    No
                                      <input type="checkbox" />
                                                                                                    <span class="lever"></span>
                                                                                                    Yes
                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>

                                                                        </div>



                                                                        <div class="col-md-12 no-padding text-center profile-btn">
                                                                            <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                            {/* <!-- <button type="button" class="primary" name="button">generate report</button>  --> */}
                                                   
                       </div>
                                                                    </div>

                                                                </div>
                                                            </div>



                                                            <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                <div class="row">
                                                                    <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                        <div class="wash-container">
                                                                            <div class="col-md-12 no-padding">
                                                                                <div class="col-md-12 no-padding">
                                                                                    <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Embroidery </b></h6>
                                                                                </div>
                                                                                <div class="col-md-12 no-padding">
                                                                                    <div class="process-title sub_title">Embroidery</div>
                                                                                    <div class="col-md-12 embroid-mul">
                                                                                        <div class="col-md-2 step-one text-center">
                                                                                            <p class="manage_permissions emb-chck">
                                                                                                <input type="checkbox" class="filled-in" id="filled-in-box1" />
                                                                                                <label for="filled-in-box1">Cut Panel</label>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one text-center">
                                                                                            <p class="manage_permissions emb-chck">
                                                                                                <input type="checkbox" class="filled-in" id="filled-in-box2" />
                                                                                                <label for="filled-in-box2">All Over</label>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one text-center">
                                                                                            <p class="manage_permissions emb-chck">
                                                                                                <input type="checkbox" class="filled-in" id="filled-in-box3" />
                                                                                                <label for="filled-in-box3">Garment Form</label>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one text-center">
                                                                                            <p class="manage_permissions emb-chck">
                                                                                                <input type="checkbox" class="filled-in" id="filled-in-box4" />
                                                                                                <label for="filled-in-box4">Semi garment Form</label>
                                                                                            </p>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one text-center">
                                                                                            <p class="manage_permissions emb-chck">
                                                                                                <input type="checkbox" class="filled-in" id="filled-in-box5" />
                                                                                                <label for="filled-in-box5">Tassle</label>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-8 col-md-offset-2 no-padding">
                                                                                        <div class="process-allocation">
                                                                                            <div class="process-alloc-con process-left-con col-md-4 no-padding">
                                                                                                <ul>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Cutting</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Bit Attaching</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Embroidery</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Recut</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Garment Made</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Garment Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Sample made</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Garment Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Embroidery</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Aari & Emb</li><span>-</span>  --> */}*/}
                                                                                                                <li>Block Cutting</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li class="selected">
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Aari & Emb</li><span>-</span>  --> */}*/}
                                                                                                                <li>Bit Attaching</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Aari & Emb</li><span>-</span>  --> */}*/}
                                                                                                                <li>Chappa</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Aari & Emb</li><span>-</span>  --> */}*/}
                                                                                                                <li>AAri</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Aari & Emb</li><span>-</span>  --> */}*/}
                                                                                                                <li>Recutting</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Aari & Emb</li><span>-</span>  --> */}*/}
                                                                                                                <li>Garment Making</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li class="selected">
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Garment Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Embroidery</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li class="selected">
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Garment Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Embroidery</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div class="process-left-arrows">
                                                                                                <a href="#"><span class="up"><i class="fa fa-chevron-right"></i></span></a>
                                                                                                <a href="#"><span class="down"><i class="fa fa-chevron-down"></i></span></a>
                                                                                            </div>
                                                                                            <div class="process-alloc-con col-md-4 no-padding">
                                                                                                <ul>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Recut</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Panel Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Garment Made</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                    <a href="#">
                                                                                                        <li>
                                                                                                            <ul>
                                                                                                                {/*{/* <!-- <li>Garment Form</li><span>-</span>  --> */}*/}
                                                                                                                <li>Sample made</li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </a>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div class="process-nav-arrows">
                                                                                                <a href="#"><span class="up"><i class="fa fa-chevron-up"></i></span></a>
                                                                                                <a href="#"><span class="down"><i class="fa fa-chevron-left"></i></span></a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12 no-padding">
                                                                                        <div class="col-md-4 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="">Additional Info</label>
                                                                                                <textarea class="form-control" name="name" rows="4" cols="80" placeholder="Component Box"></textarea>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-3 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="">Employee Name</label>
                                                                                                <select class="form-control" name="">
                                                                                                    <option value="style">Select</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="phone">Smocking</label>
                                                                                                <div class="switch">
                                                                                                    <label>
                                                                                                        No
                                       <input type="checkbox" />
                                                                                                        <span class="lever"></span>
                                                                                                        Yes
                                     </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="phone">Sheering</label>
                                                                                                <div class="switch">
                                                                                                    <label>
                                                                                                        No
                                      <input type="checkbox" />
                                                                                                        <span class="lever"></span>
                                                                                                        Yes
                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-12 nopadding">
                                                                                            <div class="col-md-12 no-padding">
                                                                                                <div class="col-md-12 pull-right hide-customer-site-img">
                                                                                                    <div class="upload-box" style={{display:"block"}}>
                                                                                                        <div class="file-field input-field">
                                                                                                            <div class="btn" style={{marginBottom:"0"}}>
                                                                                                                <p style={{fontSize:"11px"}}>Upload Image</p>
                                                                                                                <input type="file" multiple=""/>
                                                                                                            </div>
                                                                                                                <div class="file-path-wrapper" style={{display:"none"}}>
                                                                                                                    <input class="file-path form-control" type="text" style={{marginTop:"9px"}} />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-md-12 hide-customer-site">
                                                                                                    <div class="ref-images" style={{paddingLeft:"0", paddingRight:"0"}}>
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/2.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Sketch2</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Facy material</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Sketch 7</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>

                                                                            </div>



                                                                            <div class="col-md-12 no-padding text-center profile-btn">
                                                                                <button type="button" class="primary" name="button">Save</button> <button type="button" class="primary" name="button">Edit</button>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                    <div class="row">
                                                                        <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                            <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Embellishment Process </b></h6>
                                                                            <div class="col-md-12 no-padding">
                                                                                <div class="process-title sub_title">Embellishment</div>
                                                                                <div class="col-md-12 embroid-mul">
                                                                                    <div class="col-md-2 step-one text-center">
                                                                                        <p class="manage_permissions emb-chck">
                                                                                            <input type="checkbox" class="filled-in" id="filled-in-box6" />
                                                                                            <label for="filled-in-box6">Machine</label>
                                                                                        </p>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one text-center">
                                                                                        <p class="manage_permissions emb-chck">
                                                                                            <input type="checkbox" class="filled-in" id="filled-in-box7" />
                                                                                            <label for="filled-in-box7">Aari</label>
                                                                                        </p>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one text-center">
                                                                                        <p class="manage_permissions emb-chck">
                                                                                            <input type="checkbox" class="filled-in" id="filled-in-box8" />
                                                                                            <label for="filled-in-box8">Manual</label>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-12 nopadding">
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">No. of Colors</label>
                                                                                            <select class="form-control" name="">
                                                                                                <option value="style">Select</option>
                                                                                                <option value="style">1</option>
                                                                                                <option value="style">2</option>
                                                                                                <option value="style">3</option>
                                                                                                <option value="style">4</option>
                                                                                                <option value="style">5</option>
                                                                                                <option value="style">6</option>
                                                                                                <option value="style">7</option>
                                                                                                <option value="style">8</option>
                                                                                                <option value="style">9</option>
                                                                                                <option value="style">10</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Frames</label>
                                                                                            <select class="form-control" name="">
                                                                                                <option value="style">Select</option>
                                                                                                <option value="style">1</option>
                                                                                                <option value="style">2</option>
                                                                                                <option value="style">3</option>
                                                                                                <option value="style">4</option>
                                                                                                <option value="style">5</option>
                                                                                                <option value="style">6</option>
                                                                                                <option value="style">7</option>
                                                                                                <option value="style">8</option>
                                                                                                <option value="style">9</option>
                                                                                                <option value="style">10</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Stitches</label>
                                                                                            <input type="text" class="form-control" name="" value="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Running Time</label>
                                                                                            <div class="col-md-12 nopadding">
                                                                                                <div class="col-md-6" style={{paddingLeft:"0"}}>
                                                                                                    <input type="text" class="form-control" placeholder="hh" name="" value=""/>
                               </div>
                                                                                                    <div class="col-md-6" style={{paddingLeft:"0"}}>
                                                                                                        <input type="text" class="form-control" placeholder="mm" name="" value=""/>
                               </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-2 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="ref-no">RPM</label>
                                                                                                    <select class="form-control" name="">
                                                                                                        <option value="style">Select</option>
                                                                                                        <option value="style">Vijay Shankar</option>
                                                                                                        {/* <!-- <option value="style">2</option>  --> */}
                             </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-2 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="ref-no">Grading</label>
                                                                                                    <select class="form-control" name="">
                                                                                                        <option value="style">Select</option>
                                                                                                        <option value="style">Group Grading</option>
                                                                                                        <option value="style">Sizewise</option>
                                                                                                        <option value="style">No grading</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-12 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="ref-no">Remarks</label>
                                                                                                    <textarea name="name" class="form-control" rows="3" cols="80"></textarea>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12 no-padding text-center profile-btn">
                                                                                        <button type="button" class="primary" name="button">Save Process</button> <button type="button" class="primary" name="button">Edit Process</button>
                                                                                    </div>
                                                                                    <div class="col-md-12 no-padding">
                                                                                        <div class="process-title sub_title">Aari</div>
                                                                                        <div class="col-md-12 embroid-mul">
                                                                                            <div class="col-md-2 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="ref-no">Running Time</label><br />
                                                                                                    <div class="col-md-12 nopadding">
                                                                                                        <div class="col-md-6" style={{paddingLeft:"0"}}>
                                                                                                            <input type="text" class="form-control" placeholder="hh" name="" value=""/>
                               </div>
                                                                                                            <div class="col-md-6" style={{paddingLeft:"0"}}>
                                                                                                                <input type="text" class="form-control" placeholder="mm" name="" value=""/>
                               </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-3 step-one">
                                                                                                        <div class="form-group">
                                                                                                            <label for="phone">Chappa</label>
                                                                                                            <div class="switch">
                                                                                                                <label>
                                                                                                                    No
                                 <input type="checkbox" />
                                                                                                                    <span class="lever"></span>
                                                                                                                    Yes
                               </label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-3 step-one">
                                                                                                        <div class="form-group">
                                                                                                            <label for="phone">Re-Cut Guide Stitch</label>
                                                                                                            <div class="switch">
                                                                                                                <label>
                                                                                                                    No
                                 <input type="checkbox" />
                                                                                                                    <span class="lever"></span>
                                                                                                                    Yes
                               </label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-12 no-padding">
                                                                                                <div class="process-title sub_title">Manual</div>
                                                                                                <div class="col-md-12 embroid-mul">
                                                                                                    <div class="col-md-2 step-one">
                                                                                                        <div class="form-group">
                                                                                                            <label for="ref-no">Time</label><br />
                                                                                                            <div class="col-md-12 nopadding">
                                                                                                                <div class="col-md-6" style={{paddingLeft:"0"}}>
                                                                                                                    <input type="text" class="form-control" placeholder="hh" name="" value=""/>
                               </div>
                                                                                                                    <div class="col-md-6" style={{paddingLeft:"0"}}>
                                                                                                                        <input type="text" class="form-control" placeholder="mm" name="" value=""/>
                               </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="col-md-3 step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="ref-no">no. Of beads / Sequins</label>
                                                                                                                    <select class="form-control" name="">
                                                                                                                        <option value="style">Select</option>
                                                                                                                        <option value="style">1</option>
                                                                                                                        <option value="style">2</option>
                                                                                                                        <option value="style">3</option>
                                                                                                                        <option value="style">4</option>
                                                                                                                        <option value="style">5</option>
                                                                                                                        <option value="style">6</option>
                                                                                                                        <option value="style">7</option>
                                                                                                                        <option value="style">8</option>
                                                                                                                        <option value="style">9</option>
                                                                                                                        <option value="style">10</option>
                                                                                                                        <option value="style">10 - 15</option>
                                                                                                                        <option value="style">15 - 20</option>
                                                                                                                    </select>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="col-md-12 samp-req-con hand-req-con">
                                                                                                                <div class="col-md-12 wrapper ">
                                                                                                                    <div class="col-md-3 size-mngr" style={{marginBottom:"5px"}}>
                                                                                                                        <div class="col-md-6 step-one">
                                                                                                                            <div class="form-group">
                                                                                                                                <label for="address">Trim No</label>
                                                                                                                                <select class="form-control" name="">
                                                                                                                                    <option value="no.">OA123</option>
                                                                                                                                </select>
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                        <div class="col-md-6 step-one">
                                                                                                                            <div class="form-group">
                                                                                                                                <label for="address">Qty</label>
                                                                                                                                <input type="text" class="form-control" name="" value="" />
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                        <div class="add-address">
                                                                                                                            <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                                                                        </div>
                                                                                                                    </div>

                                                                                                                    <div class="second-address-con" style={{display:"none"}}>
                                                                                                                        <div class="col-md-3 size-mngr" style={{marginBottom:"5px", marginLeft:"15px"}}>
                                                                                                                            <div class="col-md-6 step-one">
                                                                                                                                <div class="form-group">
                                                                                                                                    <label for="address">Trim No</label>
                                                                                                                                    <select class="form-control" name="">
                                                                                                                                        <option value="no.">OA149</option>
                                                                                                                                        {/* <!-- <option value="slct">Select</option>  --> */}
                                           {/* <!-- <option value="no.">3</option>
                                                                                                                                        <option value="no.">6</option>  --> */}
                                         </select>
                                                                                                                                </div>
                                                                                                                            </div>

                                                                                                                            <div class="col-md-6 step-one">
                                                                                                                                <div class="form-group">
                                                                                                                                    <label for="address">Qty</label>
                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                </div>
                                                                                                                            </div>

                                                                                                                            <div class="add-address">
                                                                                                                                <a class="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i class="material-icons">clear</i></a>
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-12 no-padding">
                                                                                                        <div class="process-title sub_title">Tassle</div>
                                                                                                        <div class="col-md-12 embroid-mul">
                                                                                                            <div class="col-md-3 step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="ref-no">No. Of tassle</label>
                                                                                                                    <select class="form-control" name="">
                                                                                                                        <option value="style">Select</option>
                                                                                                                        <option value="style">1</option>
                                                                                                                        <option value="style">2</option>
                                                                                                                        <option value="style">3</option>
                                                                                                                        <option value="style">4</option>
                                                                                                                        <option value="style">5</option>
                                                                                                                        <option value="style">6</option>
                                                                                                                        <option value="style">7</option>
                                                                                                                        <option value="style">8</option>
                                                                                                                        <option value="style">9</option>
                                                                                                                        <option value="style">10</option>
                                                                                                                    </select>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="col-md-2 step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="ref-no">Method</label>
                                                                                                                    <select class="form-control" name="">
                                                                                                                        <option value="style">Select</option>
                                                                                                                        <option value="style">Ready made</option>
                                                                                                                        <optgroup label="Job Order">
                                                                                                                            <option value="style">Thread Cost</option>
                                                                                                                            <option value="style">Making Cost</option>
                                                                                                                        </optgroup>
                                                                                                                    </select>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="col-md-3 step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="phone">Beading</label>
                                                                                                                    <div class="switch">
                                                                                                                        <label>
                                                                                                                            No
                                 <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                               </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                        <button type="button" class="primary" name="button">Save</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                            <div class="row">
                                                                                                <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                    <div class="wash-container">
                                                                                                        <div class="col-md-12 no-padding">
                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Sewing</b></h6>
                                                                                                            </div>
                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group no-padding">
                                                                                                                        <label for="ref-no"> Tailor Name</label>
                                                                                                                        <br />
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="cust">Select</option>
                                                                                                                            {/* <!-- <option value="cust"></option>  --> */}
                                  </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="ref-no">Size</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="">Select</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="ref-no">Qty</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="">Select</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="ref-no">Status</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="">Select</option>
                                                                                                                            <option value="">Pending</option>
                                                                                                                            <option value="">Completed</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="">Date</label>
                                                                                                                        <input type="date" class="form-control" name="" value="" />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-1 step-one">
                                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green pull-right" style={{marginTop:" 10px"}}><i class="material-icons">add</i></a>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </div>

                                                                                                    </div>



                                                                                                    <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                        <button type="button" class="primary" name="button">Partially Complete</button> <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                        {/* <!-- <button type="button" class="primary" name="button">generate report</button>  --> */}
                                                                               
                       </div>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                            <div class="row">
                                                                                                <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                    <div class="wash-container">
                                                                                                        <div class="col-md-12 no-padding">
                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Wash</b></h6>
                                                                                                            </div>
                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">Wash</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="wash">Select</option>
                                                                                                                            <option value="wash">Applicable</option>
                                                                                                                            <option value="wash">Not-Applicable</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">Wash type</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="wash">Select</option>
                                                                                                                            <option value="wash">Acid wash</option>
                                                                                                                            {/* <!-- <option value="wash">Not-Applicable</option>  --> */}
                                     </select>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">Wash Form</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="no">Select</option>
                                                                                                                            <option value="">Garments</option>
                                                                                                                            <option value="">Panels</option>
                                                                                                                            <option value="">Farbic</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-3 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="phone">Do mocks have to be made?</label>
                                                                                                                        <div class="switch">
                                                                                                                            <label>
                                                                                                                                No
                                       <input type="checkbox" />
                                                                                                                                <span class="lever"></span>
                                                                                                                                Yes
                                     </label>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">No. Of Mocks</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="no">Select</option>
                                                                                                                            <option value="">1</option>
                                                                                                                            <option value="">2</option>
                                                                                                                            <option value="">3</option>
                                                                                                                            <option value="">4</option>
                                                                                                                            <option value="">5</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="phone">Tacking</label>
                                                                                                                        <div class="switch">
                                                                                                                            <label>
                                                                                                                                No
                                       <input type="checkbox" />
                                                                                                                                <span class="lever"></span>
                                                                                                                                Yes
                                     </label>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">laundry Unit</label>
                                                                                                                        <select class="form-control" name="">
                                                                                                                            <option value="rec">Select</option>
                                                                                                                            <option value="rec">Gold Back Seal</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">LD No.</label><br />
                                                                                                                        <span><a href="#">New</a></span> OR
                                    <span><a href="#">Existing</a></span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div class="col-md-2 step-one">
                                                                                                                    <div class="form-group">
                                                                                                                        <label for="address">Price</label>
                                                                                                                        <input type="number" class="form-control" name="" value="" placeholder="100.00"/>
                                  </div>
                                                                                                                    </div>

                                                                                                                    <div class="col-md-4 step-one">
                                                                                                                        <div class="form-group">
                                                                                                                            <label for="address">Recipe</label>
                                                                                                                            <div class="upload-box" style={{display:"block"}}>
                                                                                                                                <div class="file-field input-field">
                                                                                                                                    <div class="btn" style={{marginBottom:"0"}}>
                                                                                                                                        <p style={{fontSize:"11px"}}>Upload</p>
                                                                                                                                        <input type="file" multiple />
                                                                                                                                    </div>
                                                                                                                                    <div class="file-path-wrapper" style={{display:"block"}}>
                                                                                                                                        <input class="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{marginTop:"9px"}}/>
                                           </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                        <div class="col-md-2 step-one">
                                                                                                                            <div class="form-group">
                                                                                                                                <label for="address">Approved Option</label>
                                                                                                                                <input type="text" class="form-control" name="" value="" />
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                        <div class="col-md-2 step-one">
                                                                                                                            <div class="form-group">
                                                                                                                                <label for="address">Approved Date</label>
                                                                                                                                <input type="date" class="form-control" name="" value="" />
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                        {/* <!-- <div class="col-md-2 step-one">
                                                                                                                            <div class="form-group">
                                                                                                                                <label for="address">Wash Process type</label>
                                                                                                                                <select class="form-control" name="">
                                                                                                                                    <option value="wash">Select</option>
                                                                                                                                </select>
                                                                                                                            </div>
                                                                                                                        </div>  --> */}
                               <div class="col-md-12 nopadding">
                                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                                <div class="col-md-12 pull-right hide-customer-site-img">
                                                                                                                                    <div class="upload-box" style={{display:"block"}}>
                                                                                                                                        <div class="file-field input-field">
                                                                                                                                            <div class="btn" style={{marginBottom:"0"}}>
                                                                                                                                                <p style={{fontSize:"11px"}}>Upload Image</p>
                                                                                                                                                <input type="file" multiple=""/>
                                         </div>
                                                                                                                                                <div class="file-path-wrapper" style={{display:"none"}}>
                                                                                                                                                    <input class="file-path form-control" type="text" style={{marginTop:"9px"}} />
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div class="col-md-12 hide-customer-site">
                                                                                                                                    <div class="ref-images" style={{paddingLeft:"0", paddingRight:"0"}}>
                                                                                                                                        <ul>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/2.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch2</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Facy material</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch 7</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                            <li>
                                                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                                                                                            </li>
                                                                                                                                        </ul>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                    </div>

                                                                                                                </div>


                                                                                                                <div class="wash-container wash-address-con" style={{display:"block"}}>
                                                                                                                    <div class="col-md-12 no-padding" style={{marginBottom:"10px"}}>

                                                                                                                        <div class="col-md-1 step-one">
                                                                                                                            {/* <!-- <a class="btn-floating btn-small waves-effect waves-light green "><i class="material-icons">add</i></a>  --> */}
                           </div>
                                                                                                                    </div>

                                                                                                                </div>

                                                                                                                <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                                    <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* <!-- End of Wash  --> */}
                                                                                     
               {/* <!-- QC Starts here  --> */}
               <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                                        <div class="row">
                                                                                                            <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                                <div class="wash-container">
                                                                                                                    <div class="col-md-12 no-padding">
                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                            <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>QC</b></h6>
                                                                                                                        </div>
                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                <div class="form-group">
                                                                                                                                    <label for="ref-no">Name</label>
                                                                                                                                    <br />
                                                                                                                                    <select class="form-control" name="">
                                                                                                                                        <option value="cust">Select</option>
                                                                                                                                        {/* <!-- <option value="cust"></option>  --> */}
                                  </select>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-2 step-one">
                                                                                                                                <div class="form-group">
                                                                                                                                    <label for="">Date</label>
                                                                                                                                    <input type="date" class="form-control" name="" value="" />
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                <div class="form-group">
                                                                                                                                    <label for="phone">Remarks</label>
                                                                                                                                    <div class="switch">
                                                                                                                                        <label>
                                                                                                                                            No
                                      <input type="checkbox" />
                                                                                                                                            <span class="lever"></span>
                                                                                                                                            Yes
                                    </label>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div class="col-md-10 remark-box">
                                                                                                                                    <span><h6>(if yes editable)</h6></span>
                                                                                                                                    <input type="text" class="form-control" name="" value="" readonly=""/>
                                </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>


                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                            <div class="col-md-12 pull-right hide-customer-site-img">
                                                                                                                                <div class="upload-box" style={{display:"block"}}>
                                                                                                                                    <div class="file-field input-field">
                                                                                                                                        <div class="btn" style={{marginBottom:"0"}}>
                                                                                                                                            <p style={{fontSize:"11px"}}>Upload Image</p>
                                                                                                                                            <input type="file" multiple=""/>
                                   </div>
                                                                                                                                            <div class="file-path-wrapper" style={{display:"none"}}>
                                                                                                                                                <input class="file-path form-control" type="text" style={{marginTop:"9px"}} />
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <div class="col-md-12 hide-customer-site">
                                                                                                                                <div class="ref-images" style={{paddingLeft:"0", paddingRight:"0"}}>
                                                                                                                                    <ul>
                                                                                                                                        <li>
                                                                                                                                            <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                                                                                                                                            <li>
                                                                        <a href="../assets/images/cloth/2.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                    <span><p class="img-label">Sketch2</p></span>
                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                                                                                                                                                <li>
                                                                        <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                        <span><p class="img-label">Facy material</p></span>
                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                                                                                                                                                    <li>
                                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                            <span><p class="img-label">Sketch 7</p></span>
                                                                                                                                                            <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                            <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                                                                                                                                                        <li>
                                                                        <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                                <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                                                                                                                                                            <li>
                                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                                    <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                                                                                                                                                                <li>
                                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                                                                                                                        <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                 </li>
                               </ul>
                             </div>
                           </div>
                       </div>



                                                                                                                                                    <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                                                                        <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                                                                    </div>
                     </div>
                   
                 </div>
               </div>
                                                                                                                                        {/* <!-- end of QC  --> */}
                                                                                                                         
               {/* <!-- Dispatch Starts here  --> */}
               <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                                                                            <div class="row">
                                                                                                                                                <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                                                                    <div class="wash-container">
                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                                                                <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Dispatch</b>
                                                                                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green pull-right"><i class="material-icons">add</i></a>
                                                                                                                                                                </h6>
                                                                                                                                                            </div>
                                                                                                                                                            <div class="col-md-12 no-padding" style={{marginBottom:" 15px"}}>
                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="ref-no">Location</label>
                                                                                                                                                                        <br />
                                                                                                                                                                        <select class="form-control" name="">
                                                                                                                                                                            <option value="cust">Select</option>
                                                                                                                                                                            <optgroup label="Customer Head Office ">
                                                                                                                                                                                <option value="cust">Best Seller - Mumbai</option>
                                                                                                                                                                            </optgroup>
                                                                                                                                                                            <optgroup label="Customer Buyer Office ">
                                                                                                                                                                                <option value="cust">Bon Marche</option>
                                                                                                                                                                                <option value="cust">Bon Prix - Mumbai</option>
                                                                                                                                                                                <option value="cust">Cherokkee Black Dog</option>
                                                                                                                                                                                <option value="cust">Dunnes</option>
                                                                                                                                                                            </optgroup>
                                                                                                                                                                        </select>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>

                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="ref-no">Courier</label>
                                                                                                                                                                        <br />
                                                                                                                                                                        <select class="form-control" name="">
                                                                                                                                                                            <option value="cust">Select</option>
                                                                                                                                                                        </select>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="ref-no">AWB No.</label>
                                                                                                                                                                        <br />
                                                                                                                                                                        <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="ref-no">Date</label>
                                                                                                                                                                        <input type="date" class="form-control" name="" value="" />
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="ref-no">Attention</label>
                                                                                                                                                                        <select class="form-control" name="">
                                                                                                                                                                            <option value="">Select</option>
                                                                                                                                                                        </select>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="phone">Magnum</label>
                                                                                                                                                                        <div class="switch">
                                                                                                                                                                            <label>
                                                                                                                                                                                No
                                       <input type="checkbox" />
                                                                                                                                                                                <span class="lever"></span>
                                                                                                                                                                                Yes
                                     </label>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>

                                                                                                                                                            </div>
                                                                                                                                                            <div class="samp-req-con">
                                                                                                                                                                <div class="col-md-12 wrapper ">
                                                                                                                                                                    <div class="col-md-3 size-mngr" style={{marginBottom:"5px"}}>
                                                                                                                                                                        <div class="col-md-6 step-one">
                                                                                                                                                                            <div class="form-group">
                                                                                                                                                                                <label for="address">Size</label>
                                                                                                                                                                                <select class="form-control" name="">
                                                                                                                                                                                    <option value="slct">Select</option>
                                                                                                                                                                                    <option value="no.">1</option>
                                                                                                                                                                                    <option value="no.">3</option>
                                                                                                                                                                                    <option value="no.">6</option>

                                                                                                                                                                                </select>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>

                                                                                                                                                                        <div class="col-md-6 step-one">
                                                                                                                                                                            <div class="form-group">
                                                                                                                                                                                <label for="address">Qty</label>
                                                                                                                                                                                <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>

                                                                                                                                                                        <div class="add-address">
                                                                                                                                                                            <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>

                                                                                                                                                                    <div class="second-address-con" style={{display:"none"}}>
                                                                                                                                                                        <div class="col-md-3 size-mngr" style={{marginBottom:"5px", marginLeft:"15px"}}>
                                                                                                                                                                            <div class="col-md-6 step-one">
                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                    <label for="address">Size</label>
                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                        <option value="slct">Select</option>
                                                                                                                                                                                        <option value="no.">1</option>
                                                                                                                                                                                        <option value="no.">3</option>
                                                                                                                                                                                        <option value="no.">6</option>

                                                                                                                                                                                    </select>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>

                                                                                                                                                                            <div class="col-md-6 step-one">
                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                    <label for="address">Qty</label>
                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>

                                                                                                                                                                            <div class="add-address">
                                                                                                                                                                                <a class="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i class="material-icons">clear</i></a>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>

                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>

                                                                                                                                                    </div>

                                                                                                                                                    <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                                                                        <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                                                                    </div>
                                                                                                                                                </div>

                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                        {/* <!-- end of Dispatch  --> */}
                                                                                                                         
               {/* <!-- Costing marker Starts here  --> */}
               <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                                                                            <div class="row">
                                                                                                                                                <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                                                                    <div class="wash-container">
                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                                                                <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Costing Marker</b></h6>
                                                                                                                                                            </div>
                                                                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                                                                <div class="col-md-3 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="">Check Repeat Size</label>
                                                                                                                                                                        <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-3 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="">Print / Checks Artwork</label>
                                                                                                                                                                        <select class="form-control" name="">
                                                                                                                                                                            <option value="">Select</option>
                                                                                                                                                                        </select>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="phone">Placement</label>
                                                                                                                                                                        <div class="switch">
                                                                                                                                                                            <label>
                                                                                                                                                                                No
                                     <input type="checkbox" />
                                                                                                                                                                                <span class="lever"></span>
                                                                                                                                                                                Yes
                                   </label>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-3 step-one">
                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                        <label for="remark" class="">Remarks</label>
                                                                                                                                                                        <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                                <div class="col-md-12 nopadding">
                                                                                                                                                                    <div class="col-md-3 step-one">
                                                                                                                                                                        <div class="col-md-7 nopadding">
                                                                                                                                                                            <div class="form-group">
                                                                                                                                                                                <label for="">fusing</label>
                                                                                                                                                                                <div class="switch">
                                                                                                                                                                                    <label>
                                                                                                                                                                                        No
                                          <input type="checkbox" />
                                                                                                                                                                                        <span class="lever"></span>
                                                                                                                                                                                        Yes
                                        </label>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                        <div class="col-md-5">
                                                                                                                                                                            <label for="">Width</label>
                                                                                                                                                                            <input type="number" class="form-control" name="" value=""/>
                                  </div>
                                                                                                                                                                        </div>
                                                                                                                                                                        <div class="col-md-3 step-one">
                                                                                                                                                                            <div class="col-md-7 nopadding">
                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                    <label for="">fusing Tape</label>
                                                                                                                                                                                    <div class="switch">
                                                                                                                                                                                        <label>
                                                                                                                                                                                            No
                                         <input type="checkbox" />
                                                                                                                                                                                            <span class="lever"></span>
                                                                                                                                                                                            Yes
                                       </label>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                            <div class="col-md-5">
                                                                                                                                                                                <label for="">Width</label>
                                                                                                                                                                                <input type="number" class="form-control" name="" value=""/>
                                 </div>
                                                                                                                                                                            </div>
                                                                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                                                                <div class="col-md-7 nopadding">
                                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                                        <label for="">Elastic</label>
                                                                                                                                                                                        <div class="switch">
                                                                                                                                                                                            <label>
                                                                                                                                                                                                No
                                        <input type="checkbox" />
                                                                                                                                                                                                <span class="lever"></span>
                                                                                                                                                                                                Yes
                                      </label>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <div class="col-md-5">
                                                                                                                                                                                    <label for="">Width</label>
                                                                                                                                                                                    <input type="number" class="form-control" name="" value=""/>
                                </div>
                                                                                                                                                                                </div>

                                                                                                                                                                                <div class="col-md-3 step-one">
                                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                                        <label for="phone">Any options to be worked out</label>
                                                                                                                                                                                        <div class="switch">
                                                                                                                                                                                            <label>
                                                                                                                                                                                                No
                                          <input type="checkbox" />
                                                                                                                                                                                                <span class="lever"></span>
                                                                                                                                                                                                Yes
                                        </label>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <div class="col-md-3 step-one">
                                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                                        <label for="phone">Embroidery Backing </label>
                                                                                                                                                                                        <div class="switch">
                                                                                                                                                                                            <label>
                                                                                                                                                                                                No
                                           <input type="checkbox" />
                                                                                                                                                                                                <span class="lever"></span>
                                                                                                                                                                                                Yes
                                         </label>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <div class="col-md-3 step-one">
                                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                                        <label for="phone">Wash</label>
                                                                                                                                                                                        <div class="switch">
                                                                                                                                                                                            <label>
                                                                                                                                                                                                No
                                            <input type="checkbox" />
                                                                                                                                                                                                <span class="lever"></span>
                                                                                                                                                                                                Yes
                                          </label>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <div class="col-md-2 step-one">
                                                                                                                                                                                    <div class="form-group">
                                                                                                                                                                                        <label for="ref-no">Size ratio</label>
                                                                                                                                                                                        <select class="form-control" name="">
                                                                                                                                                                                            <option value="style">Select</option>
                                                                                                                                                                                            <option value="style">Original</option>
                                                                                                                                                                                            <option value="style">Similar</option>
                                                                                                                                                                                        </select>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                            <div class="cust-address-con costingMarkerCon">
                                                                                                                                                                                <p class="tableTitle">CT1
                                </p>
                                                                                                                                                                                <button type="button" class="primary pull-right creteTable" name="button">Create</button>
                                                                                                                                                                                <div class="col-md-12 wrapper nopadding">
                                                                                                                                                                                    <table class="lined bordered responsive-table costingMarkerTable">
                                                                                                                                                                                        <thead>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <th>Fabric</th>
                                                                                                                                                                                                <th>Costing Option</th>
                                                                                                                                                                                                <th>Fabric Width</th>
                                                                                                                                                                                                <th>1-2 Years</th>
                                                                                                                                                                                                <th>2-3 Years</th>
                                                                                                                                                                                                <th>3-4 Years</th>
                                                                                                                                                                                                <th>4-5 Years</th>
                                                                                                                                                                                                <th></th>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </thead>
                                                                                                                                                                                        <tbody>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                        <option value="style">Select</option>
                                                                                                                                                                                                        <option value="style">F - 83583</option>
                                                                                                                                                                                                    </select>
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                        <option value="style">Select</option>
                                                                                                                                                                                                        <option value="style">Lengthwise</option>
                                                                                                                                                                                                    </select>
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                                                                                                                                                </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </tbody>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </div>

                                                                                                                                                                                <div class="col-md-12 wrapper trim-table" style={{marginTop:"30px", padding:"0"}} >
                                                                                                                                                                                    <table class="lined bordered responsive-table costingMarkerTable">
                                                                                                                                                                                        <thead>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <th>Trim</th>
                                                                                                                                                                                                <th>1-2 Years</th>
                                                                                                                                                                                                <th>2-3 Years</th>
                                                                                                                                                                                                <th>3-4 Years</th>
                                                                                                                                                                                                <th>4-5 Years</th>
                                                                                                                                                                                                <th></th>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </thead>
                                                                                                                                                                                        <tbody>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                        <option value="style">Select</option>
                                                                                                                                                                                                        <option value="style">F - 83583</option>
                                                                                                                                                                                                    </select>
                                                                                                                                                                                                </td>

                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                                                                                                                                                </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </tbody>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                            <div class="cust-address-con costingMarkerCon">
                                                                                                                                                                                <p class="tableTitle">CT2
                                </p>
                                                                                                                                                                                <button type="button" class="primary pull-right creteTable" name="button">remove</button>
                                                                                                                                                                                <div class="col-md-12 wrapper nopadding">
                                                                                                                                                                                    <table class="lined bordered responsive-table costingMarkerTable">
                                                                                                                                                                                        <thead>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <th>Fabric</th>
                                                                                                                                                                                                <th>Costing Option</th>
                                                                                                                                                                                                <th>Fabric Width</th>
                                                                                                                                                                                                <th>1-2 Years</th>
                                                                                                                                                                                                <th>2-3 Years</th>
                                                                                                                                                                                                <th>3-4 Years</th>
                                                                                                                                                                                                <th>4-5 Years</th>
                                                                                                                                                                                                <th></th>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </thead>
                                                                                                                                                                                        <tbody>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                        <option value="style">Select</option>
                                                                                                                                                                                                        <option value="style">F - 83583</option>
                                                                                                                                                                                                    </select>
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                        <option value="style">Select</option>
                                                                                                                                                                                                        <option value="style">Lengthwise</option>
                                                                                                                                                                                                    </select>
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                                                                                                                                                </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </tbody>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </div>

                                                                                                                                                                                <div class="col-md-12 wrapper trim-table" style={{marginTop:" 30px", padding:"0"}} >
                                                                                                                                                                                    <table class="lined bordered responsive-table costingMarkerTable">
                                                                                                                                                                                        <thead>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <th>Trim</th>
                                                                                                                                                                                                <th>1-2 Years</th>
                                                                                                                                                                                                <th>2-3 Years</th>
                                                                                                                                                                                                <th>3-4 Years</th>
                                                                                                                                                                                                <th>4-5 Years</th>
                                                                                                                                                                                                <th></th>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </thead>
                                                                                                                                                                                        <tbody>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                        <option value="style">Select</option>
                                                                                                                                                                                                        <option value="style">F - 83583</option>
                                                                                                                                                                                                    </select>
                                                                                                                                                                                                </td>

                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td class="total-input">
                                                                                                                                                                                                    <input type="text" class="form-control" name="" value="" />
                                                                                                                                                                                                </td>
                                                                                                                                                                                                <td>
                                                                                                                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                                                                                                                                                </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </tbody>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                                                                                <div class="col-md-12 pull-right hide-customer-site-img">
                                                                                                                                                                                    <div class="upload-box" style={{display:"block"}}>
                                                                                                                                                                                        <div class="file-field input-field">
                                                                                                                                                                                            <div class="btn" style={{marginBottom:"0"}}>
                                                                                                                                                                                                <p style={{fontSize:"11px"}}>Upload Image</p>
                                                                                                                                                                                                <input type="file" multiple=""/>
                                        </div>
                                                                                                                                                                                                <div class="file-path-wrapper" style={{display:"none"}}>
                                                                                                                                                                                                    <input class="file-path form-control" type="text" style={{marginTop:"9px"}} />
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <div class="col-md-12 hide-customer-site">
                                                                                                                                                                                    <div class="ref-images" style={{paddingLeft:"0", paddingRight:"0"}}>
                                                                                                                                                                                        <ul>
                                                                                                                                                                                            <li>
                                                                                                                                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                    <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                                                                                                                                                                                <li>
                                                                                    <a href="../assets/images/cloth/2.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                        <span><p class="img-label">Sketch2</p></span>
                                                                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                                                                                                                                                                                    <li>
                                                                                        <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                            <span><p class="img-label">Facy material</p></span>
                                                                                                                                                                                                            <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                            <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                                                                                                                                                                                        <li>
                                                                                            <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                                <span><p class="img-label">Sketch 7</p></span>
                                                                                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                                <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                                                                                                                                                                                            <li>
                                                                                                <a href="../assets/images/cloth/3.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                                    <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                                                                                                                                                                                                <li>
                                                                                                    <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                                        <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                                                                                                                                                                                                    <li>
                                                                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                                                                                                                                                            <span><p class="img-label">Sketch</p></span>
                                                                                                                                                                                                                            <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                                                                                                                                                            <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                           </div>
                         </div>
                         
                       </div>



                                                                                                                                                                                                <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                                                                                                                    <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button> <button type="button" class="primary" name="button">print</button>
                                                                                                                                                                                                </div>
                     </div>
                   
                 </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    {/* <!-- end of costing marker  --> */}
                                                                                                                                                                     
               {/* <!-- Costing Starts here  --> */}
               <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                                                                                                                        <div class="row">
                                                                                                                                                                                            <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                                                                                                                <div class="wash-container">
                                                                                                                                                                                                    <div class="col-md-12 no-padding">
                                                                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                                                                            <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Costing</b></h6>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                                                    <label for="ref-no">Merchandiser Name</label>
                                                                                                                                                                                                                    <br />
                                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                                        <option value="cust">Select</option>
                                                                                                                                                                                                                        {/* <!-- <option value="cust"></option>  --> */}
                                  </select>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="col-md-2 step-one">
                                                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                                                    <label for="">Date</label>
                                                                                                                                                                                                                    <input type="date" class="form-control" name="" value="" />
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                            <div class="col-md-2 step-one">
                                                                                                                                                                                                                <a href="costing-v2.html" class="primary">Costing</a>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>

                                                                                                                                                                                                </div>



                                                                                                                                                                                                <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                                                                                                                    <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>

                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    {/* <!-- end of QC  --> */}
                                                                                                                                                                     
               {/* <!-- QC Starts here  --> */}
               <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                                                                                                                                                                        <div class="row">
                                                                                                                                                                                            <div class="col-md-12 product-form" style={{ paddingBottom:"1%"}}>
                                                                                                                                                                                                <div class="wash-container">
                                                                                                                                                                                                    <div class="col-md-12 no-padding">
                                                                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                                                                            <h6 class="dev-title" style={{paddingBottom:"10px"}}><b>Sign Off</b></h6>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                                                                            <div class="col-md-3 step-one">
                                                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                                                    <label for="ref-no">Merchandiser Name</label>
                                                                                                                                                                                                                    <br />
                                                                                                                                                                                                                    <select class="form-control" name="">
                                                                                                                                                                                                                        <option value="cust">Select</option>
                                                                                                                                                                                                                        {/* <!-- <option value="cust"></option>  --> */}
                                  </select>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="col-md-2 step-one">
                                                                                                                                                                                                                <div class="form-group">
                                                                                                                                                                                                                    <label for="">Date</label>
                                                                                                                                                                                                                    <input type="date" class="form-control" name="" value="" />
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>

                                                                                                                                                                                                </div>



                                                                                                                                                                                                <div class="col-md-12 no-padding text-center profile-btn">
                                                                                                                                                                                                    <button type="button" class="primary" name="button">Complete</button> <button type="button" class="primary" name="button">Edit</button>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>

                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    {/* <!-- end of QC  --> */}
                                                                                                                                                                     
                                                                                                                                                                     
                                                                                                                                                                     
             </div>{/* <!--end of col-md-9 --> */}
            </div>{/* <!--end of right section container --> */}
          </div>{/* <!--end of col-md-12 --> */}
         </div>{/* <!--end of row --> */}
         {/* <!-- Scroll-Up Arrow  --> */}
         <div class="scroll-up pull-right">
                                                                                                                                                                        <a href="#top" class="btn-floating btn-large black" title="Add multiple"><i class="fa fa-chevron-up"></i></a>
                                                                                                                                                                        {/* <!-- <span><a href="#top"><i class="fa fa-chevron-up"></i></a></span>  --> */}
         </div>
                                                                                                                                                                </div>{/* <!--end of right section --> */}
                                                                                                                                                        
       <div id="myModal" class="modal fade" role="dialog">
                                                                                                                                                                    <div class="modal-dialog">
                                                                                                                                                                        <div class="modal-content">
                                                                                                                                                                            <div class="modal-body">
                                                                                                                                                                                {/* <!-- <button type="button" class="close" data-dismiss="modal">&times;</button>  --> */}
               <div class="meeting-min-con">
                                                                                                                                                                                    <div class="row">
                                                                                                                                                                                        <div class="col-md-12 no-padding">
                                                                                                                                                                                            <div class="col-md-8 product-form no-padding">
                                                                                                                                                                                                <div class="col-md-6 nopadding">
                                                                                                                                                                                                    <div class="col-md-12 step-one">
                                                                                                                                                                                                        <div class="form-group">
                                                                                                                                                                                                            <label for="phone">Search Fabrics</label><br />
                                                                                                                                                                                                            <span>BY</span>
                                                                                                                                                                                                            <br />
                                                                                                                                                                                                            {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span>  --> */}
                             {/* <!-- <input type="text" class="form-control" placeholder="F-66836 AS IS">  --> */}
                             <select class="form-control" name="">
                                                                                                                                                                                                                    <option value="style">Select</option>
                                                                                                                                                                                                                    <option value="style">shirt</option>
                                                                                                                                                                                                                    <option value="style">blouses</option>
                                                                                                                                                                                                                    <option value="style">UCB</option>
                                                                                                                                                                                                                </select>
                           </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    <div class="col-md-6 no-padding">
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
                                                                                                                                                                                                    <div class="col-md-12 mm-btns" style={{marginTop:"20%"}}>
                                                                                                                                                                                                        <button type="button" class="primary" name="button">Search</button>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                            <div class="col-md-12 no-padding">
                                                                                                                                                                                                <div class="table-container">
                                                                                                                                                                                                    <table class="striped">
                                                                                                                                                                                                        <thead>
                                                                                                                                                                                                            <tr>
                                                                                                                                                                                                                <th data-field="num">Fabric Number</th>
                                                                                                                                                                                                                <th data-field="name">Fabric Name</th>
                                                                                                                                                                                                                <th data-field="cat">Category</th>
                                                                                                                                                                                                                <th data-field="clr">Select</th>
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
                                                                                                                                                                    </div>
                    <Footer />
                </div>

            </Fragment>
        );
    }
}

export default AddNewSample;

{/* <script>
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            header:" {
                left:" 'prev,next today',
                center:" 'title',
                right:" 'month,agendaWeek,agendaDay'
            },
            defaultDate:" '2017-08-22',
            navLinks:" true, // can click day/week names to navigate views
            businessHours:" true, // display business hours
            editable:" true,
            events:" [{
                title:" 'MAKE NK TAPE',
                start:" '2017-09-01T10:"35:"00',
                End:" '2017-09-01T19:"35:"00',
                color:" '#00BCD4'
            }
            ]
        });

    });
   </script> */}



