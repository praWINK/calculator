import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import productImg from '../../assets/images/no-product-image.png';
import cloth from '../../assets/images/cloth/1.jpg';
import {Link} from 'react-router-dom';
//import { Grid, Image } from 'semantic-ui-react'


class AddNewStyle extends Component {
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
                        <li><a href="#"></a></li>
                        <li><h6>Add Style</h6></li>
                        <li class="pull-right"><a href="#"></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-filter meeting-min-con" style={{marginBottom:".5%"}}>
                                            <div class="table-container">
                                                <div class="row" style={{paddingTop:"1%", paddingBottom:"1%"}}>
                                                    <div class="col-md-12 product-form no-padding">
                                                        <div class="col-md-3 no-padding">
                                                            <div class="col-md-12">
                                                                <div class="upload-photo">
                                                                    <img src={productImg} alt="" />
                                                                    <a class="btn-floating btn-small waves-effect waves-light black"><i class="material-icons">add</i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-9 product-form no-padding">
                                                            <div class="col-md-12 no-padding">
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="ref-no">Date</label>
                                                                        <span><h6>28-01-2017</h6></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="col-md-8 no-padding">
                                                                        <div class="form-group">
                                                                            <label for="item">Meeting Note No</label>
                                                                            <input type="text" class="form-control" placeholder="" value="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <span class="popup-box"><a href="#" data-toggle="modal" data-target="#myModal"></a></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="ref-no">Style Origination</label>
                                                                        <select class="form-control" name="">
                                                                            <option value="style">Select</option>
                                                                            <option value="style">Email</option>
                                                                            <option value="style">Ravi</option>
                                                                            <option value="style">Meeting Notes</option>
                                                                            <option value="style">Customer</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Magnum Style Number</label>
                                                                    <input type="text" class="form-control" name="" value="" readonly />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Customer / Department</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="style">Select</option>
                                                                        <option value="style">Vikash - Cherokee</option>
                                                                        <option value="style">Mani - M&S</option>
                                                                        <option value="style">Vikash - Bitloom</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Block Reference</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Ref Detail</label>
                                                                    <br />
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Garment Type</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="style">Select</option>
                                                                        <option value="style">Cardi</option>
                                                                        <option value="style">Collections</option>
                                                                        <option value="style">Dungree</option>
                                                                        <option value="style">Hunger</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Embroidery</label>
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
                                                                    <label for="phone">Embelishment</label>
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
                                                                    <label for="phone">Set</label>
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
                                                            <div class="col-md-12 profile-btn text-center">
                                                                <Link to="/listStyle"><a href="#" class="primary">Back</a></Link> <a href="" class="primary option-open">Create Option</a> <button type="submit" class="primary" name="button">Save</button>
                                                                {/* <a href="#" class="primary">Create IB</a>  */}
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-filter meeting-min-con option-con" style={{display:"none",marginBottom:"0.5%"}} >
                                            <div class="row" style={{paddingBottom:"1%"}}>
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
                                                    {/* <div class="col-md-2 step-one">
                                                        <div class="form-group">
                                                            <label for="item">Technology</label>
                                                            <input type="text" class="form-control" placeholder="" value="" readonly="">
                                                        </div>
                                                    </div>  */}
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
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-filter meeting-min-con option-con" style={{ marginBottom:".5%"}}>
                                            <div class="row" style={{paddingTop: "1%", paddingBottom:"2%"}}>
                                                <div class="col-md-12 product-form no-padding">
                                                    <div class="col-md-2 no-padding">
                                                        <div class="col-md-12">
                                                            <div class="upload-photo">
                                                                <img src={productImg} alt="" />
                                                                <a class="btn-floating btn-small waves-effect waves-light black"><i class="material-icons">add</i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10 product-form no-padding">
                                                        <div class="col-md-12 no-padding">
                                                            <div class="col-md-1 step-one">
                                                                <div class="form-group">
                                                                    <label for="item">Reference</label>
                                                                    <span><h6>A</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Range</label>
                                                                    <select class="form-control" name="">
                                                                        <option value="">Regular</option>
                                                                        <option value="">Maternity</option>
                                                                        <option value="">PlusFit</option>
                                                                        <option value="">Tall</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Actioned By</label>
                                                                    {/* <select class="form-control" name="">
                                                                            <option value="">Regular</option>
                                                                            <option value="">Maternity</option>
                                                                            <option value="">PlusFit</option>
                                                                            <option value="">Tall</option>
                                                                        </select> */}
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Customer Ref No</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Item No</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Reference Color</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Fabric Type</label>
                                                                    <br />
                                                                    <select class="form-control" name="">
                                                                        <option value="style">Select</option>
                                                                        <option value="style">Print </option>
                                                                        <option value="style">Yarn Dyed </option>
                                                                        <option value="style">Embroidery </option>
                                                                        <option value="style">Solid </option>
                                                                        <option value="style">Mix </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Magnum Style Name</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Buyer Style Name</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="ref-no">Season</label>
                                                                    <input type="text" class="form-control" name="" value="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">wash applicable</label>
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
                                                        <div class="col-md-12 pull-right hide-customer-site-img" style={{marginTop:"20px"}}>
                                                            <div class="upload-box" style={{display:"block"}}>
                                                                <div class="file-field input-field">
                                                                    <div class="btn" style={{marginBottom:0}}>
                                                                        <p style={{fontSize:"11px"}}>Upload Image</p>
                                                                        <input type="file" multiple />
                                                                    </div>
                                                                    <div class="file-path-wrapper" style={{ display: "none" }}>
                                                                        <input class="file-path form-control" type="text" style={{ marginTop: "9px" }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 hide-customer-site">
                                                        <div class="ref-images" style={{paddingLeft:0, paddingRight:0}}>
                                                            <ul>
                                                                <li>
                                                                    <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
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

                                                    {/* <div class="edit-site permission-con" style="display:none; padding-top:9%!important;">
                                                            <div class="row">
                                                                <div class="col-md-12 meeting-min-con">
                                                                    <div class="table-site">
                                                                        <p class="text-center site-title"> <b>UPDATE IMAGE</b> </p>
                                                                    </div>
                                                                    <div class="col-md-6 col-md-offset-3 product-form">
                                                                        <div class="col-md-12 step-one">
                                                                            <div class="form-group">
                                                                                <label for="dept">Image Name</label>
                                                                                <input type="text" class="form-control" placeholder="" value="Sketch" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12 step-one">
                                                                            <div class="file-field input-field form-group">
                                                                                <div class="btn" style="margin-bottom:1.5%;">
                                                                                    <span style="font-size:12px; color:white;">File</span>
                                                                                    <input type="file" multiple />
                                                                                </div>
                                                                                <div class="file-path-wrapper">
                                                                                    <input class="file-path validate form-control" type="text" style="margin-top:6px;" />
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
                                                        </div> */}
                                                    <div class="col-md-12 profile-btn text-center">
                                                        <button type="submit" name="button" class="primary">Save</button> <button type="button" name="button" class="primary" data-toggle="modal" data-target="#req_modal"> View Request</button> <button type="button" name="button" class="primary"> Create Request</button> <a onClick={() => this.props.history.push("/createIB")} style={{ color: "white", cursor: "pointer" }}  class="primary">Create IB</a>
                                                    </div>
                                                    <div class="col-md-12 profile-btn text-center">
                                                        <a onClick={() => this.props.history.push("/smv_ov_list")} class="primary" style={{ color: "white", cursor: "pointer" }}>SMV / OB Calculation</a> <a onClick={() => this.props.history.push("/listThreadConsumption")} class="primary" style={{ color: "white", cursor: "pointer" }}>Thread Consumption</a> <a onClick={() => this.props.history.push("/technicalIssues")} class="primary" style={{ color: "white", cursor: "pointer" }}>Technical Issues</a>
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

export default AddNewStyle;





