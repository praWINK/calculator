import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import cloth from "../../assets/images/cloth/1.jpg";
import noProductImg from "../../assets/images/no-product-image.png";
class AddMultipleMeeting extends Component {
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
                        {/* <li><a href="#">Refresh</a></li>
                        <li><a href="#">Search</a></li>  */}
                         <li>
                            <a href="#"></a>
                        </li>
                        <li>
                            <h6>Add Meeting Notes</h6></li>
                        <li class="pull-right">
                            <a href="#"> </a>
                        </li>
                    </ul>
                </div>
                <div class="mg-container mg-container-table" id="top">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <a href="#" class="primary pull-right">Print <i class="material-icons">print</i></a>

                                    <div class="col-md-12 nopadding">
                                        <div class="card-filter  meeting-min-con" style={{ marginBottom: "0.5%" }}>
                                            <div class="table-container">
                                                <div class="row" style={{ padding: "1% 0" }}>
                                                    <div class="col-md-12 product-form">

                                                        <div class="col-md-3 step-one">
                                                            <div class="form-group">
                                                                <label for="Address">Customer / department</label>
                                                                <h6>-</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 step-one">
                                                            <div class="form-group">
                                                                <label for="">Date of meeting</label>
                                                                <h6>-</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 step-one">
                                                            <div class="form-group">
                                                                <label for="city">Buyer Name</label>
                                                                <h6>-</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 step-one">
                                                            <div class="form-group">
                                                                <label for="phone">Present</label>
                                                                <h6>-</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 step-one">
                                                            <div class="form-group">
                                                                <label for="phone">Place of the meeting</label>
                                                                <h6>-</h6>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-container meeting-min-con" style={{ marginBottom: "0.5%" }}>
                                            <div class="table-container">
                                                <div class="row" style={{ paddingBottom: "2%" }}>
                                                    <div class="col-md-12 product-form no-padding" style={{ marginTop: "3%" }}>
                                                        <div class="col-md-12 multiple-mm-con no-padding">
                                                            <div class="col-md-3">
                                                                <div class="mul-upload-photo">
                                                                    <img src={noProductImg} alt=""/>
                                                                        <a class="btn-floating btn-small waves-effect waves-light black"><i class="material-icons">add</i></a>
                                                                </div>
                                                                <br/>
                                                                <div class="col-md-8 step-one no-padding">
                                                                    <div class="form-group">
                                                                        <label for="Address">Magnum Style Number</label>
                                                                        <input type="text" class="form-control" readonly/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 step-one no-padding">
                                                                    <div class="form-group">
                                                                        <label for="Address">Magnum Style Name</label>
                                                                        <input type="text" class="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 step-one no-padding">
                                                                    <div class="form-group">
                                                                        <label for="Address">Customer Ref No</label>
                                                                        <input type="text" class="form-control"/>
                                                                    </div>
                                                                    </div>
                                                            </div>
                                                            <div class="col-md-9">
                                                                <div class="col-md-12 mul-check check-padding">
                                                                    <div class="form-group col-md-2 no-padding">
                                                                        <label for="city">Sample Style</label>
                                                                    </div>
                                                                    <p class="radio-inline nopadding" >
                                                                        <input name="group1" type="radio" class="filled-in hide-all" id="rad1" />
                                                                        <label for="rad1">New Sample</label>
                                                                    </p>
                                                                    <p class="radio-inline">
                                                                        <input name="group1" type="radio" class="filled-in hide-all" id="rad2" />
                                                                        <label for="rad2">Existing Sample</label>
                                                                    </p>
                                                                    <p class="radio-inline">
                                                                        <input name="group1" type="radio" class="filled-in ib" id="rad3" value="ib" />
                                                                        <label for="rad3">IB</label>
                                                                    </p>
                                                                    <p class="radio-inline">
                                                                        <input name="group1" type="radio" class="filled-in order" id="rad4" value="order" />
                                                                        <label for="rad4">Order</label>
                                                                    </p>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Block / Historic Ref No.</label>
                                                                        <input type="text" class="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Block / Historic Ref from</label>
                                                                        <select class="form-control" name="sketch">
                                                                            <option value="sketch">Select</option>
                                                                            <option value="sketch">Customer Block</option>
                                                                            <option value="sketch">Magnum Ref Number</option>
                                                                            <option value="sketch">Development Sample</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Sketch</label>
                                                                        <select class="form-control" name="sketch">
                                                                            <option value="sketch">Select</option>
                                                                            <option value="sketch">Designer Tech Pack</option>
                                                                            <option value="sketch">Buyer Tech Pack</option>
                                                                            <option value="sketch">Image</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Sample Deadline</label>
                                                                        <input type="date" class="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">fabric</label>
                                                                        <textarea type="text" class="form-control" rows="2" cols="50" placeholder=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Quality</label>
                                                                        <textarea type="text" class="form-control" rows="2" cols="50" placeholder=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Artwork / Color Ref</label>
                                                                        <input type="text" class="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">trim</label>
                                                                        <input type="text" class="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Fit Comments / Styling Changes</label>
                                                                        <textarea type="text" class="form-control" rows="3" cols="50" placeholder=""></textarea>
                                                                    </div>
                                                                </div>
                                                                                                    
                                                                <div class="col-md-6 step-one">
                                                                    <div class="form-group">
                                                                        <label for="phone">Action / Remarks</label>
                                                                        <textarea type="text" class="form-control" rows="2" cols="50" placeholder=""></textarea>
                                                                    </div>
                                                                </div> 
                                                                <div class="col-md-3 mul-check">
                                                                    <div class="form-group">
                                                                        <label for="city">Pending Item from</label>
                                                                        <select class="form-control" name="item">
                                                                            <option value="item">Select</option>
                                                                            <option value="item">Magnum</option>
                                                                            <option value="item">Udare</option>
                                                                            <option value="item">Buyer</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 mul-check">
                                                                    <div class="form-group">
                                                                        <label for="city">Mocks</label>
                                                                        <select class="form-control" name="item">
                                                                            <option value="item">Select</option>
                                                                            <option value="item">Embellishment</option>
                                                                            <option value="item">Embroidery</option>
                                                                            <option value="item">Wash</option>
                                                                            <option value="item">Construction</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-10">
                                                                    <div class="form-group">
                                                                    </div>
                                                                </div>

                                                                <div class="ib-select ib order">
                                                                    <div class="row nopadding">
                                                                        <div class="col-md-6 multiple-mm-con no-padding">
                                                                            <div class="col-md-5 step-one">
                                                                                <div class="form-group">
                                                                                    {/* <label for="ib">IB / Order</label><br/>
                                                                                        <span style={{ textTransform: "uppercase", color: "#555" }}>Size</span>
                                                                                        <input type="text" class="form-control" placeholder="" value=""/> */}
                                                                                </div>
                                                                            </div>
                                                                            {/* <div class="col-md-5 step-one">
                                                                                <div class="form-group" style={{ position: "relative" }}>
                                                                                    <label for="ib"></label><br/>
                                                                                        <span style={{ textTransform: "uppercase", color: "#555" }}>PRICE</span><br/>
                                                                                            <span style={{ position: "absolute", fontSize: "12px" }}>$</span>
                                                                                            <input type="text" class="form-control" placeholder="" value="" style={{ position: "relative", marginLeft: "10px" }}/>
                                                                                </div>
                                                                            </div> */}
                                                
                                                                            <div class="col-md-1 step-one">
                                                                                <a class="btn-floating btn-small waves-effect waves-light green addIB_Order"><i class="material-icons">add</i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="ib-order" style={{ position: "relative", display: "none" }}>
                                                                            <div class="row nopadding">
                                                                                <div class="col-md-6 multiple-mm-con no-padding">
                                                                                    <div class="col-md-5 step-one">
                                                                                        <div class="form-group">
                                                                                            <label for="ib">IB / Order</label><br/>
                                                                                                <span style={{ textTransform: "uppercase", color: "#555" }}>Size</span>
                                                                                                <input type="text" class="form-control" placeholder="" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-5 step-one">
                                                                                        <div class="form-group" style={{ position: "relative" }}>
                                                                                            <label for="ib"></label><br/>
                                                                                                <span style={{ textTransform: "uppercase", color: "#555" }}>PRICE</span><br/>
                                                                                                    <span style={{ position: "absolute", fontSize: "12px" }}>$</span>
                                                                                                    <input type="text" class="form-control" placeholder="" value="" style={{ position: "relative", marginLeft: "10px" }}/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-1 step-one">
                                                                                        <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>                                                                                                    
                                                                    </div>
                                                                </div>                                                                                                                                           
                                                                                                  
                                                                <div class="ib-select ib order">
                                                                    <div class="col-md-6 multiple-mm-con no-padding">
                                                                        <div class="col-md-5 step-one">
                                                                            <div class="form-group">
                                                                                <label for="ib">Shipment Detail</label><br/>
                                                                                    <span style={{ textTransform: "uppercase", color: "#555" }}>Qty</span>
                                                                                    <input type="text" class="form-control" placeholder="" value=""/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-5 step-one">
                                                                            <div class="form-group">
                                                                                <label for="ib"></label><br/>
                                                                                    <span style={{ textTransform: "uppercase", color: "#555" }}>Date</span>
                                                                                    <input type="date" class="form-control" placeholder="" value=""/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-2 step-one">
                                                                            <a class="btn-floating btn-small waves-effect waves-light green addIB_Shipment"><i class="material-icons">add</i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="ib-shipment" style={{ position: "relative", display: "none" }}>
                                                                        <div class="row nopadding">
                                                                            <div class="col-md-6 multiple-mm-con no-padding">

                                                                                <div class="col-md-5 step-one">
                                                                                    <div class="form-group">
                                                                                        <label for="ib">Shipment Detail</label><br/>
                                                                                            <span style={{ textTransform: "uppercase", color: "#555" }}>Qty 2</span>
                                                                                            <input type="text" class="form-control" placeholder="" value=""/>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-5 step-one ">
                                                                                    <div class="form-group">
                                                                                        <label for="ib"></label><br/>
                                                                                            <span style={{ textTransform: "uppercase", color: "#555" }}>Date</span>
                                                                                            <input type="date" class="form-control" placeholder="" value=""/>
                                                                                    </div>
                                                                                </div>                                                                                                                     
                                                                                <div class="col-md-1 step-one">
                                                                                    <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                                                                                                                                    
                                                                    </div>
                                                                                                                                                                               
                                                                    <div class="row nopadding"></div>
                                                                                                                                                                               
                                                                </div>
                                                                                                                                                                            
                                                            </div>
                                                                                                                                                                       
                                                        </div>
                                                                                                                                                                    
                                                    <div class="col-md-12 step-one">
                                                        <div class="form-group">
                                                            <label for="phone" class="active">Additional Info</label>
                                                            <textarea type="text" class="form-control" rows="3" cols="50" placeholder=""></textarea>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                        <div class="col-md-12" style={{ paddingTop: "1%", paddingLeft: 0, paddingRight: 0 }}>
                                                            <div class="col-md-12 step-one mul-step-one">
                                                                <div class="form-group upload-ref-photo">
                                                                    <label for="Address">Reference Image</label>
                                                                    <br/>
                                                                        <div class="col-md-6 no-padding ref-btn hide-customer-site">
                                                                            <button type="button" class="btn clickme" name="button" style={{ fontSize: "11px" }}>Add Reference Image</button>
                                                                        </div>
                                                                        <div class="col-md-6 pull-right hide-customer-site" style={{ marginTop: "-10px" }}>
                                                                            <div class="upload-box">
                                                                                <div class="file-field input-field">
                                                                                    <div class="btn" style={{ marginBottom: "0" }}>
                                                                                        <i class="material-icons">add</i>
                                                                                        <input type="file" multiple/>
                                                                                    </div>
                                                                                        <div class="file-path-wrapper">
                                                                                            <input class="file-path form-control" type="text" style={{ marginTop: "7px" }}/>
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                        
                                                                <div class="col-md-12 hide-customer-site">
                                                                    <div class="ref-images">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                    <span><p class="img-label">Sketch</p></span>
                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit" ><i class="material-icons">edit</i></a></span>
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
                                                                                <a href="../assets/images/cloth/2.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                                                    <span><p class="img-label">Sketch</p></span>
                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                                    <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                             </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="col-md-12 text-center">
                                                                        <button class="primary">Save</button> <button type="button" class="primary" name="button">Cancel</button> <button class="primary">Generate Style</button>
                                                                    </div>
                                                                </div>
                                                                                                                                                                                                                    
                                                                <div class="edit-site permission-con" style={{ display: "none", marginTop: "4%!important" }}>
                                                                    <div class="row">
                                                                        <div class="col-md-12 meeting-min-con">
                                                                            <div class="table-site">
                                                                                <p class="text-center site-title"> <b>EDIT IMAGE</b> </p>
                                                                            </div>
                                                                            <div class="col-md-6 col-md-offset-3 product-form">
                                                                                <div class="col-md-12 step-one">
                                                                                    <div class="form-group">
                                                                                        <label for="dept">Image Name</label>
                                                                                        <br/>
                                                                                        {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                                        <input type="text" class="form-control" placeholder="" value="Sketch"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-12 step-one">
                                                                                    <div class="form-group">
                                                                                        <label for="address">Image Description</label>
                                                                                        <br/>
                                                                                        {/* <span>(A short and catchy yet descriptive name for your product)</span>  */}
                                                                                        <textarea class="form-control" cols="30" rows="2" style={{ resize: "none" }} placeholder=""></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-12 step-one">
                                                                                    <div class="file-field input-field form-group">
                                                                                        <div class="btn" style={{ marginBottom: "1.5%" }}>
                                                                                            <span style={{ fontSize: "12px", color: "white" }}>File</span>
                                                                                            <input type="file" multiple/>
                                                                                        </div>
                                                                                        <div class="file-path-wrapper">
                                                                                            <input class="file-path validate form-control" type="text" style={{ marginTop: "6px" }}/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-12">
                                                                                    <button type="button" class="primary" name="button">Update Image</button>
                                                                                    <a href="#" class="primary site-add-go-back">Back</a>
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
                                                                                                                                                                                                                    
                     
                                    </div>
                                                                                                                                                                                                                
                                    <div class="mul-mm-add-floating">
                                        <a class="btn-floating btn-large waves-effect waves-light red" title="Add multiple"><i class="material-icons">add</i></a>
                                    </div>
                                                                                                                                                                                                                
                                    <div class="scroll-up pull-right">
                                        <a href="#top" class="btn-floating btn-large black" title="Add multiple"><i class="fa fa-chevron-up"></i></a>
                                        {/* <span><a href="#top"><i class="fa fa-chevron-up"></i></a></span>  */}
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

export default AddMultipleMeeting;





