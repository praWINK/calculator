import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'
import productImg from '../../assets/images/no-product-image.png';


class CreateIB extends Component {
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
                        <li><h6>Create IB</h6></li>
                        <li class="pull-right"><a href="#"></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table" id="top">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 no-padding">
                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                            <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                <div class="col-md-12 product-form">
                                                    <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                        <h6 class="dev-title"><b>Style Information</b></h6>
                                                    </div>
                                                    <div class="col-md-12 nopadding">
                                                        <div class="col-md-2 step-one nopadding">
                                                            <div class="form-group">
                                                                <label for="img">IMAGE</label>
                                                                <div class="col-md-12 no-padding ib-fields">
                                                                    <div class="col-md-12 ib-right no-padding">
                                                                        <div class="upload-photo">
                                                                            <img src={productImg} alt=""/>
                                                                                <a class="btn-floating btn-small waves-effect waves-light black"><i class="material-icons">add</i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 view-ib-left nopadding">
                                                            <div class="card-light ib-list-view">
                                                                <ul class="main-list">
                                                                    <li>
                                                                        <ul>
                                                                            <li>Created Date<span>:</span> </li>
                                                                            <li>17/8/2016</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Style No <span>:</span> </li>
                                                                            <li>42590</li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li>Ref <span>:</span> </li>
                                                                            <li>A</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Customer Dept<span>:</span> </li>
                                                                            <li>Matlan - Girls Wear</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Reference Color <span>:</span> </li>
                                                                            <li>Pink</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Magnum Style Name <span>:</span> </li>
                                                                            <li>Lurex - Gingham Check Shirt</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Customer Ref No<span>:</span> </li>
                                                                            <li>LCW1FH629</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Buyer Style Name<span>:</span> </li>
                                                                            <li>Check Shirt</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Fabric Type<span>:</span> </li>
                                                                            <li>Checks</li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 view-ib-right nopadding">
                                                            <div class="card-light ib-list-view">
                                                                <ul class="main-list">
                                                                    <li>
                                                                        <ul>
                                                                            <li>Season <span>:</span> </li>
                                                                            <li> SS18 </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Story Name<span>:</span> </li>
                                                                            <li>Sailaway</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Buyer Name<span>:</span> </li>
                                                                            <li> Aarti Chordia </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Assistant Buyer<span>:</span> </li>
                                                                            <li> Aarti Chordia </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Fabric technologist<span>:</span> </li>
                                                                            <li> Aarti Chordia </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>garment technologist<span>:</span> </li>
                                                                            <li> Aarti Chordia </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Range<span>:</span> </li>
                                                                            <li>Regular</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <ul>
                                                                            <li>Set<span>:</span> </li>
                                                                            <li>Yes</li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 view-ib-bottom">
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="item">Style Orgination</label>
                                                                    <span><h6>Whatsapp</h6></span>
                                                                    {/* <input type="text" class="form-control" placeholder="" value="" />  */}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="item">Block Reference</label>
                                                                    <span><h6>-</h6></span>
                                                                    {/* <input type="text" class="form-control" placeholder="" value="" /> */}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="item">Trim Orgination</label>
                                                                    <input type="text" class="form-control" placeholder="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5 step-one">
                                                                <div class="form-group">
                                                                    <label for="item">Additional Style Information</label>
                                                                    <textarea name="name" class="form-control" rows="2" cols="80"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 profile-btn text-center">
                                                            <button class="primary" name="button">Save to Continue</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                            <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                <div class="col-md-12 product-form">
                                                    <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                        <h6 class="dev-title"><b>Order Details</b></h6>
                                                    </div>
                                                    <div class="col-md-12 nopadding">
                                                        <div class="col-md-3 step-one">
                                                            <div class="form-group">
                                                                <label for="item">Tentative Order Confirm Date</label>
                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 step-one">
                                                            <div class="form-group">
                                                                <label for="item">Order hand Over</label>
                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 step-one">
                                                            <div class="form-group">
                                                                <label for="item">PCD at Hand Over</label>
                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5 step-one">
                                                            <div class="form-group">
                                                                <label for="address">Order Confirmation - Booking Form</label>
                                                                <div class="upload-box" style={{display:"block"}}>
                                                                    <div class="file-field input-field">
                                                                        <div class="btn" style={{marginBottom:0,padding: "0px 20px"}}>
                                                                            <p style={{fontSize:"10px"}}>Upload</p>
                                                                            <input type="file" multiple="" />
                                                                        </div>
                                                                        <div class="file-path-wrapper" style={{display:"block"}}>
                                                                            <input class="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{marginTop:"9px"}}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 step-one">
                                                            <div class="form-group">
                                                                <label for="address">Buyer CP</label>
                                                                <div class="upload-box" style={{display:"block"}}>
                                                                    <div class="file-field input-field">
                                                                        <div class="btn" style={{marginBottom:0,padding: "0px 20px"}}>
                                                                            <p style={{fontSize:"10px"}}>Upload</p>
                                                                            <input type="file" multiple="" />
                                                                        </div>
                                                                        <div class="file-path-wrapper" style={{display:"block"}}>
                                                                            <input class="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{marginTop:"9px"}}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6 step-one">
                                                            <div class="form-group">
                                                                <label for="address">Price Confirmation Email</label>
                                                                <div class="upload-box" style={{display:"block"}}>
                                                                    <div class="file-field input-field">
                                                                        <div class="btn" style={{marginBottom:0,padding: "0px 20px"}}>
                                                                            <p style={{fontSize:"10px"}}>Upload</p>
                                                                            <input type="file" multiple="" />
                                                                        </div>
                                                                        <div class="file-path-wrapper" style={{display:"block"}}>
                                                                            <input class="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{marginTop:"9px"}}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12" style={{padding: "15px 0"}}>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group" style={{position:"relative"}}>
                                                                    <label for="ib" class="active">Agreed PRice</label><br />
                                                                    <span style={{position:"absolute", fontSize:"13px"}}>&#8377;</span>
                                                                    <input type="text" class="form-control" placeholder="100.00" value="" style={{marginLeft:"10px",position:"relative"}} />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="col-md-8 no-padding">
                                                                    <div class="form-group">
                                                                        <label for="item" class="active">Cost Sheet</label>
                                                                        <br />
                                                                        {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                        <input type="text" class="form-control" placeholder="" value="" />
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-2">
                                                                    <span class="popup-box"><a href="#"></a></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group" style={{position:"relative"}}>
                                                                    <label for="ib" class="active">Buying house Margin</label><br />

                                                                    <input type="text" class="form-control col-xs-5" placeholder="10" value="" style={{width:"50%",marginRight:"0px",position:"relative"}} />
                                                                    <span style={{position:"absolute",right:"55px",fontSize:"13px"}}>%</span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="address">Shipping method</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="slct">Select</option>
                                                                        <option value="pack">Hanging</option>
                                                                        <option value="pack">Boxed</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="address">Shipment Term</label>
                                                                    <input type="text" class="form-control" name="" value=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="cust-address-con">
                                                            <div class="col-md-12">
                                                                <div class="col-md-3 step-one"></div>
                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group" style={{position:"relative"}}>
                                                                        <label for="ib" class="active">Qty</label><br />
                                                                        <input type="text" class="form-control col-xs-5" placeholder="10" value="" style={{width:"50%",marginRight:"0px",position:"relative"}} />
                                                                        <span style={{position:"absolute",right:"45px",fontSize:"13px"}}>PCS</span>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group">
                                                                        <label class="active">Shipdate</label>
                                                                        <input type="date" class="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group">
                                                                        <label class="active">Exfactory</label>
                                                                        <input type="date" class="form-control" placeholder="" />
                                                                    </div>
                                                                </div>

                                                                <div class="add-address">
                                                                    <a class="btn-floating btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a>
                                                                </div>
                                                            </div>
                                                            <div class="second-address-con" style={{display: "none"}}>
                                                                <div class="col-md-12">
                                                                    <div class="col-md-3 step-one"></div>
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                            <label for="ib" class="active">Qty</label><br />
                                                                            <input type="text" class="form-control col-xs-5" placeholder="10" value="" style={{width:"50%",marginRight:"0px",position:"relative"}} />
                                                                            <span style={{position:"absolute",right:"45px",fontSize:"13px"}}>PCS</span>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label class="active">Shipdate</label>
                                                                            <input type="date" class="form-control" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2 step-one">
                                                                        <div class="form-group">
                                                                            <label class="active">Exfactory</label>
                                                                            <input type="date" class="form-control" placeholder="" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="add-address">
                                                                        <a class="btn-floating btn-small waves-effect waves-light red sec-close-btn"><i class="material-icons">clear</i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="step-one">
                                                                <div class="form-group">
                                                                    <label for="item">Additional Info</label>
                                                                    <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 profile-btn text-center">
                                                        <button class="primary" name="button">Save to Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                                            <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                    <div class="col-md-12 product-form">
                                                                        <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                                            <h6 class="dev-title"><b>Garment Process</b></h6>
                                                                        </div>
                                                                        <div class="col-md-12 nopadding">
                                                                            <div class="col-md-2 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="address">Process Type</label>
                                                                                    <select class="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="wash">Acid Wash</option>
                                                                                        <option value="wash">Soft Wash</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-2 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="address">Laundry Unit</label>
                                                                                    <select class="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="wash">Evershine</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-2 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="sample">Special Process</label>
                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                        <label>
                                                                                            No
                                                                                            <input type="checkbox" />
                                                                                            <span class="lever"></span>
                                                                                            Yes
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-6 step-one">
                                                                                <div class="form-group col-md-3">
                                                                                    <label for="sample"></label>
                                                                                    <select class="form-control" name="">
                                                                                        <option value="slct">Select</option>
                                                                                        <option value="wash">Dying</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="upload-box spec-box col-md-9" style={{display:"block"}}>
                                                                                    <label>Tolerance Sheet</label>
                                                                                    <div class="file-field input-field">
                                                                                        <div class="btn" style={{marginBottom:0}}>
                                                                                            <p style={{fontSize:"11px"}}>Upload</p>
                                                                                            <input type="file" multiple/>
                                                                                        </div>
                                                                                            <div class="file-path-wrapper" style={{display:"block"}}>
                                                                                                <input class="file-path form-control" type="text" style={{marginTop:"15px"}}/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-12" style={{padding:"15px 0 0"}}>
                                                                                    <div class="col-md-4 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="address">Recipe</label>
                                                                                            <div class="upload-box" style={{display:"block"}}>
                                                                                                <div class="file-field input-field">
                                                                                                    <div class="btn" style={{marginBottom:0,padding: "0px 20px"}}>
                                                                                                        <p style={{fontSize:"10px"}}>Upload</p>
                                                                                                        <input type="file" multiple="" />
                                                                                                    </div>
                                                                                                    <div class="file-path-wrapper" style={{display:"block"}}>
                                                                                                        <input class="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{marginTop:"9px"}}/>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                        <div class="col-md-8">
                                                                                            <div class="step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="item" class="">Additional Info</label>
                                                                                                    <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="col-md-12 profile-btn text-center">
                                                                                    <button class="primary" name="button">Save to Continue</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                        <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                            <div class="col-md-12 product-form">
                                                                                <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                                                    <h6 class="dev-title"><b>Fabric</b><a class="btn-floating btn-small waves-effect waves-light green pull-right"><i class="material-icons">add</i></a></h6>
                                                                                </div>
                                                                                <div class="col-md-12 nopadding">
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="col-md-6 no-padding">
                                                                                            <div class="form-group">
                                                                                                <label for="item" class="active">Fabric No.</label>
                                                                                                <span><h6>F43560</h6></span>
                                                                                                {/* <input type="text" class="form-control" placeholder="" value="" />  */}
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2">
                                                                                            <span class="popup-box"><a href="#" data-toggle="modal" data-target="#myModal"></a></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                                            <label for="ib" class="active">Finished Width</label><br />
                                                                                            <input type="text" class="form-control col-xs-5" placeholder="10" value="" style={{width:"50%",marginRight:"0px",position:"relative"}} />
                                                                                            <span style={{position:"absolute",right:"60px",top:"2px" ,fontSize:"30px"}}>"</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                                            <label for="ib" class="active">Cuttable Width</label><br />
                                                                                            <input type="text" class="form-control col-xs-5" placeholder="10" value="" style={{width:"50%",marginRight:"0px",position:"relative"}} />
                                                                                            <span style={{position:"absolute",right:"60px",top:"2px" ,fontSize:"30px"}}>"</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Supplier</label>
                                                                                            <select class="form-control" name="">
                                                                                                <option value="sup">Select</option>
                                                                                                <option value="sup">SP-Tex</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="sample">working on options?</label>
                                                                                            <div class="switch" style={{display:"block"}}>
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
                                                                                            <label for="ref-no">Base Approval</label>
                                                                                            <select class="form-control" id="fabric-ib" name="">
                                                                                                <option value="style">Select</option>
                                                                                                <option value="approved">Approved</option>
                                                                                                <option value="style">Await Approval</option>
                                                                                                <option value="style">Yet To Action</option>
                                                                                                <option value="style">Under Process</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12 nopadding">
                                                                                        <div class="col-md-7 step-one nopadding" style={{display:"none"}}>
                                                                                            <div class="col-md-4 step-one">
                                                                                                <div class="col-md-6 no-padding">
                                                                                                    <div class="form-group">
                                                                                                        <label for="item" class="active">Fabric No.</label>
                                                                                                        {/* <span><h6>F43560</h6></span>  */}
                                                                                                                <input type="text" class="form-control" placeholder="" value="" />
                                                                                                        <div class="hidden-select-box show-box" style={{display: "none"}}>
                                                                                                            <input type="text" class="form-control" name="" value=""/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="col-md-2">
                                                                                                    <span class="popup-box"><a href="#" data-toggle="modal" data-target="#myModal"></a></span>
                                                                                                </div>
                                                                                                <span class="col-md-2 add-slct">
                                                                                                    <a class="btn-floating btn-small waves-effect waves-light green open-box"><i class="material-icons">add</i></a>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div class="col-md-2 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="item">F-No.</label>
                                                                                                    <input type="text" class="form-control" placeholder="" value="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="item">Quality</label>
                                                                                                    <input type="text" class="form-control" placeholder="" value="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="item">Supplier Name</label>
                                                                                                    <input type="text" class="form-control" placeholder="" value="" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div id="approved" class="col-md-3 step-one fabric pull-right" style={{display:"none"}}>
                                                                                            <div class="col-md-4 no-padding">
                                                                                                <div class="form-group">
                                                                                                    <label for="item" class="active">B No.</label>
                                                                                                    {/*<span><h6>F43560</h6></span> */}
                                                                                                            <input type="text" class="form-control" placeholder="" value="" />
                                                                                                    <div class="hidden-select-box show-box" style={{display: "none"}}>
                                                                                                        <input type="text" class="form-control" name="" value=""/>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>                                             <input type="number" class="form-control" placeholder="100.00" value="" style={{marginLeft:"10px",position:"relative"}} />
                                                                                            <div class="col-md-2">
                                                                                                <span class="popup-box"><a href="#" style={{marginTop: "27px"}} data-toggle="modal" data-target="#myModal"></a></span>
                                                                                            </div>
                                                                                            <span class="col-md-2 add-slct">
                                                                                                <a class="btn-floating btn-small waves-effect waves-light green open-box"><i class="material-icons">add</i></a>
                                                                                            </span>
                                                                                        </div>

                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Development Type</label>
                                                                                            <select class="form-control" id="devType-selec" name="">
                                                                                                <option value="dev">Select</option>
                                                                                                <option value="devType">Labdip</option>
                                                                                                <option value="devType">Strike Off</option>
                                                                                                <option value="devType">Desk loom</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ref-no">Sealer Yardage</label>
                                                                                            <select class="form-control" id="sealer-selec" name="">
                                                                                                <option value="dev">Select</option>
                                                                                                <option value="availed">Available</option>
                                                                                                <option value="not-availed">Not Available</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="availed" class="col-md-8 step-one sealer-yard nopadding" style={{display:"none"}}>
                                                                                        <div class="col-md-3 step-one">
                                                                                            <div class="col-md-6 no-padding">
                                                                                                <div class="form-group">
                                                                                                    <label for="item" class="active">Fabric No.</label>
                                                                                                    {/*<span><h6>F43560</h6></span> */}
                                                                                                    <input type="text" class="form-control" placeholder="" value="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-2">
                                                                                                <span class="popup-box"><a href="#"></a></span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item" class="active">QTY</label>
                                                                                                <input type="text" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-6 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="address">Checking Report</label>
                                                                                                <div class="upload-box" style={{display:"block"}}>
                                                                                                    <div class="file-field input-field">
                                                                                                        <div class="btn" style={{marginBottom:0,padding: "0px 20px"}}>
                                                                                                            <p style={{fontSize:"10px"}}>Upload</p>
                                                                                                            <input type="file" multiple="" />
                                                                                                        </div>
                                                                                                        <div class="file-path-wrapper" style={{display:"block"}}>
                                                                                                            <input class="file-path form-control" type="text" placeholder="PDF, Image, Excel" style={{marginTop:"9px"}} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="not-availed" class="col-md-8 step-one sealer-yard nopadding" style={{display:"none"}}>
                                                                                        <div class="col-md-3 step-one">
                                                                                            <div class="form-group">
                                                                                                <label class="active">ETA</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-6 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item" class="active">Comments</label>
                                                                                                <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                                            <label for="ib" class="active">Final Bulk PRice</label><br />
                                                                                            <span style={{position:"absolute", fontSize:"13px"}}>₹</span>
                                                                                            <input type="text" class="form-control" placeholder="100.00" value="" style={{marginLeft:"10px",position:"relative"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label class="active">Fabric Origination</label>
                                                                                            <input type="text" class="form-control" placeholder="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-2 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="sample">Cut Process</label>
                                                                                            <div class="switch" style={{display:"block"}}>
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
                                                                                        <div class="col-md-4 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="address"></label>
                                                                                                <div class="upload-box" style={{display:"block"}}>
                                                                                                    <div class="file-field input-field">
                                                                                                        <div class="btn" style={{marginBottom:0}}>
                                                                                                            <p style={{fontSize:"11px"}}>Upload</p>
                                                                                                            <input type="file" multiple="" />
                                                                                                        </div>
                                                                                                        <div class="file-path-wrapper" style={{display:"block"}}>
                                                                                                            <input class="file-path form-control" type="text" placeholder="Doc" style={{marginTop:"9px"}} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="devType" class="col-md-12 development nopadding" style={{display:"none"}}>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">Submission LD / DL / SO</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">Approval LD / DL / SO</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">First Bulk Submission</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">First Bulk Approval</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">FLow Start</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-2 step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">Flow Stop</label>
                                                                                                <input type="date" class="form-control" placeholder="" value="" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-12">
                                                                                        <div class="step-one">
                                                                                            <div class="form-group">
                                                                                                <label for="item">Additional Info</label>
                                                                                                <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-12 profile-btn text-center">
                                                                                    <button class="primary" name="button">Save to Continue</button> <button class="primary" name="button">Print</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>



                                                                                <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                                    <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                                        <div class="col-md-12 product-form">
                                                                                            <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                                                                <h6 class="dev-title"><b>Trims</b></h6>
                                                                                            </div>
                                                                                            <div class="col-md-12 nopadding">
                                                                                                <ul class="trims-table">
                                                                                                    <li class="category">
                                                                                                        <ul>
                                                                                                            <li>Category</li>
                                                                                                            <li>
                                                                                                                <select class="form-control" name="">
                                                                                                                    <option value="">Select</option>
                                                                                                                    <option value="">Button</option>
                                                                                                                </select>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-no">
                                                                                                        <ul>
                                                                                                            <li>Trim Ref No.</li>
                                                                                                            <li>
                                                                                                                <input type="text" class="form-control" placeholder="TBU-101" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-desc">
                                                                                                        <ul>
                                                                                                            <li>Description</li>
                                                                                                            <li>
                                                                                                                <input type="text" class="form-control" placeholder="Plastic button" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-price">
                                                                                                        <ul>
                                                                                                            <li>Price</li>
                                                                                                            <li>
                                                                                                                <input type="number" class="form-control" placeholder="2.00" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-price">
                                                                                                        <ul>
                                                                                                            <li>Lead Time</li>
                                                                                                            <li>
                                                                                                                <input type="text" class="form-control" placeholder="45 Days" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-process">
                                                                                                        <ul>
                                                                                                            <li>Process</li>
                                                                                                            <li class="text-center">
                                                                                                                <div class="switch" style={{display:"block"}}>
                                                                                                                    <label>
                                                                                                                        No
                                                                                                                        <input type="checkbox" />
                                                                                                                        <span class="lever"></span>
                                                                                                                        Yes
                                                                                                                        </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-price">
                                                                                                        <ul>
                                                                                                            <li>Supplier Name</li>
                                                                                                            <li>
                                                                                                                <select class="form-control" name="">
                                                                                                                    <option value="">Select</option>
                                                                                                                    <option value="">Coats</option>
                                                                                                                    <option value="">Vardhamand</option>
                                                                                                                </select>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-trig-date">
                                                                                                        <ul>
                                                                                                            <li>Trigger Date</li>
                                                                                                            <li>
                                                                                                                <input type="date" class="form-control" placeholder="2.00" value="" style={{padding: "4px 4px" }}/>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-status">
                                                                                                        <ul>
                                                                                                            <li>Status Date</li>
                                                                                                            <li>
                                                                                                                <select class="form-control" name="">
                                                                                                                    <option value="">Select</option>
                                                                                                                    <option value="">Actioned</option>
                                                                                                                    <option value="">Submitted</option>
                                                                                                                    <option value="">Approved</option>
                                                                                                                </select>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-action">
                                                                                                        <ul>
                                                                                                            <li><a class="btn-floating btn-small waves-effect waves-light green pull-right"><i class="material-icons">add</i></a></li>
                                                                                                        </ul>
                                                                                                    </li>

                                                                                                    <ul class="process-acceptance" style={{display:"block"}}>
                                                                                                        <li>
                                                                                                            <ul class="trimprocess-title">
                                                                                                                <li>Greige</li>
                                                                                                                <li>
                                                                                                                    <div class="step-one">
                                                                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                                                                            <label for="ib" class="active">Price</label><br />
                                                                                                                            <span style={{position:"absolute", fontSize:"13px"}}>₹</span>
                                                                                                                            <input type="number" class="form-control" placeholder="100.00" value="" style={{marginLeft:"10px",position:"relative"}} />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                                <li>
                                                                                                                    <div class="step-one">
                                                                                                                        <div class="form-group">
                                                                                                                            <label for="leadtime">Lead Time</label>
                                                                                                                            <input type="text" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </li>

                                                                                                        <li>
                                                                                                            <ul class="trimprocess-title">
                                                                                                                <li>Process</li>
                                                                                                                <li>
                                                                                                                    <div class="step-one">
                                                                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                                                                            <label for="ib" class="active">Price</label><br />
                                                                                                                            <span style={{position:"absolute", fontSize:"13px"}}>₹</span>
                                                                                                                            <input type="number" class="form-control" placeholder="100.00" value="" style={{marginLeft:"10px",position:"relative"}} />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                                <li>
                                                                                                                    <div class="step-one">
                                                                                                                        <div class="form-group">
                                                                                                                            <label for="leadtime">Lead Time</label>
                                                                                                                            <input type="text" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                                <li>
                                                                                                                    <div class="step-one">
                                                                                                                        <div class="form-group" style={{position:"relative"}}>
                                                                                                                            <label for="ib" class="active">Value loss for processing</label><br />
                                                                                                                            <input type="text" class="form-control col-xs-5" placeholder="10" value="" style={{width:"50%",marginRight:"0px",position:"relative"}} />
                                                                                                                            <span style={{position:"absolute", right:"105px", top:"15px",fontSize:"20px"}}>%</span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </ul>
                                                                                                <ul class="trims-table">
                                                                                                    <li class="category">
                                                                                                        <ul>
                                                                                                            <li>Category</li>
                                                                                                            <li>
                                                                                                                <select class="form-control" name="">
                                                                                                                    <option value="">Select</option>
                                                                                                                    <option value="">Button</option>
                                                                                                                </select>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-no">
                                                                                                        <ul>
                                                                                                            <li>Trim Ref No.</li>
                                                                                                            <li>
                                                                                                                <input type="text" class="form-control" placeholder="TBU-101" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-desc">
                                                                                                        <ul>
                                                                                                            <li>Description</li>
                                                                                                            <li>
                                                                                                                <input type="text" class="form-control" placeholder="Plastic button" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-price">
                                                                                                        <ul>
                                                                                                            <li>Price</li>
                                                                                                            <li>
                                                                                                                <input type="number" class="form-control" placeholder="2.00" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-price">
                                                                                                        <ul>
                                                                                                            <li>Lead Time</li>
                                                                                                            <li>
                                                                                                                <input type="text" class="form-control" placeholder="45 Days" value="" />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-process">
                                                                                                        <ul>
                                                                                                            <li>Process</li>
                                                                                                            <li class="text-center">
                                                                                                                <div class="switch" style={{display:"block"}}>
                                                                                                                    <label>
                                                                                                                        No
                                                                                                                        <input type="checkbox" />
                                                                                                                        <span class="lever"></span>
                                                                                                                        Yes
                                                                                                                        </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-price">
                                                                                                        <ul>
                                                                                                            <li>Supplier Name</li>
                                                                                                            <li>
                                                                                                                <select class="form-control" name="">
                                                                                                                    <option value="">Select</option>
                                                                                                                    <option value="">Coats</option>
                                                                                                                    <option value="">Vardhamand</option>
                                                                                                                </select>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-trig-date">
                                                                                                        <ul>
                                                                                                            <li>Trigger Date</li>
                                                                                                            <li>
                                                                                                                <input type="date" class="form-control" placeholder="2.00" value="" style={{padding: "4px 4px"}} />
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-status">
                                                                                                        <ul>
                                                                                                            <li>Status Date</li>
                                                                                                            <li>
                                                                                                                <select class="form-control" name="">
                                                                                                                    <option value="">Select</option>
                                                                                                                    <option value="">Actioned</option>
                                                                                                                    <option value="">Submitted</option>
                                                                                                                    <option value="">Approved</option>
                                                                                                                </select>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li class="trim-action">
                                                                                                        <ul>
                                                                                                            <li><a class="btn-floating btn-small waves-effect waves-light red pull-right"><i class="material-icons">clear</i></a></li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div class="col-md-12">
                                                                                                <div class="step-one">
                                                                                                    <div class="form-group">
                                                                                                        <label for="item">Additional Info</label>
                                                                                                        <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-12 profile-btn text-center">
                                                                                                <button class="primary" name="button">Save to Continue</button> <button class="primary" name="button">Print</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                                    <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                                        <div class="col-md-12 product-form">
                                                                                            <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                                                                <h6 class="dev-title"><b>Checklist During H/O</b></h6>
                                                                                            </div>
                                                                                            <ul class="process-acceptance checklistIB">
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Costsheet</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Sample Dated</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Fusing Placement Report</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>

                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>CAD Marker</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>

                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>pattern Report</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                        <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>

                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                            <ul class="process-acceptance checklistIB">
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Size Chart</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>

                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Trim Card</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>

                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Pattern Soft Copy</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Style File</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>

                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>TI / OB</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group" style={{position:"relative"}}>
                                                                                                                    <label for="ib" class="active"></label><br />
                                                                                                                    <div class="switch" style={{display:"block"}}>
                                                                                                                        <label>
                                                                                                                            No
                                                                                                                            <input type="checkbox" />
                                                                                                                            <span class="lever"></span>
                                                                                                                            Yes
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                            <div class="col-md-12">
                                                                                                <div class="step-one">
                                                                                                    <div class="form-group">
                                                                                                        <label for="item">Additional Info</label>
                                                                                                        <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-12 profile-btn text-center">
                                                                                                <button class="primary" name="button">Save to Continue</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>



                                                                                <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                                    <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                                        <div class="col-md-12 product-form">
                                                                                            <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                                                                <h6 class="dev-title"><b>Sealing Critical Path</b></h6>
                                                                                            </div>
                                                                                            <ul class="process-acceptance checklistIB sealingIB">
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Initial Sent</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Fit comments Expected</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Revised Fit Submission</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Revised Fit Comments Expected</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Red Seal Submission</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Red Seal Comments Expected</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Revised Red Seal Submission</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Revised Red Seal Comments Expected</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Sealing Deadline</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="date" class="form-control" placeholder="30 Days" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Photo Shoot Info</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="text" class="form-control" placeholder="" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <ul class="trimprocess-title">
                                                                                                        <li>Buying Sample Info</li>
                                                                                                        <li>
                                                                                                            <div class="step-one">
                                                                                                                <div class="form-group">
                                                                                                                    <label for="leadtime"></label>
                                                                                                                    <input type="text" class="form-control" placeholder="" name="" value="" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                            <div class="col-md-12 profile-btn text-center">
                                                                                                <button class="primary" name="button">Save to Continue</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                                    <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                                        <div class="col-md-12 product-form">
                                                                                            <div class="col-md-12 no-padding" style={{marginBottom:"1%"}}>
                                                                                                <h6 class="dev-title"><b>Production Controller</b></h6>
                                                                                            </div>
                                                                                            <div class="col-md-2 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="sample">Style Sold</label>
                                                                                                    <div class="switch" style={{display:"block"}}>
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
                                                                                                    <label for="sample">Handover</label>
                                                                                                    <div class="switch" style={{display:"block"}}>
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
                                                                                                    <label class="active"></label>
                                                                                                    <input type="date" class="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-2 step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="sample">Style dropped</label>
                                                                                                    <div class="switch" style={{display:"block"}}>
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
                                                                                                    <label class="active"></label>
                                                                                                    <input type="date" class="form-control" placeholder="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-12 profile-btn text-center">
                                                                                                <button class="primary" name="button">Confirm Order</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                                                                                <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                                                    <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                                                        <div class="col-md-12 product-form">
                                                                                            <div class="step-one">
                                                                                                <div class="form-group">
                                                                                                    <label for="item">Additional Info</label>
                                                                                                    <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-12 profile-btn text-center">
                                                                                                <button class="primary" name="button">Provisional Order</button> <button class="primary" name="button">Save to Continue</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="myModal" class="modal fade" role="dialog">
                                                                <div class="modal-dialog">

                                                                    <div class="modal-content">
                                                                        <div class="modal-body no-padding">
                                                                            <div class="meeting-min-con">
                                                                                <div class="row">
                                                                                    <div class="col-md-12 no-padding">
                                                                                        <div class="col-md-8 product-form no-padding">
                                                                                            <div class="col-md-6 nopadding">
                                                                                                <div class="col-md-12 step-one">
                                                                                                    <div class="form-group">
                                                                                                        <label for="phone">Search Style</label><br />
                                                                                                        <span>BY</span>
                                                                                                        <br />
                                                                                                        <select class="form-control" name="">
                                                                                                            <option value="style">Select</option>
                                                                                                            <option value="style">Meeting Notes No</option>
                                                                                                            <option value="style">Customer Name</option>
                                                                                                            <option value="style">Departement Name</option>
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
                                                                                                        <input type="text" class="form-control" name="" value=""/>
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
                                                                                                            <th data-field="num">Meeting Notes No</th>
                                                                                                            <th data-field="name">Customer Name</th>
                                                                                                            <th data-field="name">Deptartment Name</th>
                                                                                                            <th data-field="act">Action</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td>MN-00324</td>
                                                                                                            <td>Virat</td>
                                                                                                            <td>Gemma</td>
                                                                                                            <td><a href="" class="view" title="View"><i class="material-icons">visibility</i></a></td>
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
                                                                </div>

                                                                <div class="scroll-up pull-right">
                                                                    <a href="#top" class="btn-floating btn-large black" title="Add multiple"><i class="fa fa-chevron-up"></i></a>
                                                                    {/* <span><a href="#top"><i class="fa fa-chevron-up"></i></a></span>  */}
                                                                </div>
                    <Footer />
                </div>

            </Fragment>
        );
    }
}

export default CreateIB;


{/* //     <script type="text/javascript">
//     $(document).ready(function() {
//         $('a[href*="#"]:not([href="#"])').click(function () {
//             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//                 var target = $(this.hash);
//                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//                 if (target.length) {
//                     $('html, body').animate({
//                         scrollTop: target.offset().top - 120
//                     }, 1000);
//                     return false;
//                 }
//             }
//         });
//     $(window).scroll(function() {
//           var scroll = $(window).scrollTop();
//           if (scroll > 150) {
//         $(".scroll-up").addClass("scroll-hide");
//     } else {
//         $(".scroll-up").removeClass("scroll-hide");
//     }
//  });
// });
//     </script> */}



