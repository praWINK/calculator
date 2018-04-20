import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import productPic from '../../assets/images/cloth/2.jpg';
import cloth from '../../assets/images/cloth/1.jpg';

//import { Grid, Image } from 'semantic-ui-react'


class ViewMeeting extends Component {
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
                        <li><h6>View Meeting Notes</h6></li>
                        <li class="pull-right"><a href="#"></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table" id="top">
                    <Sidebar />

                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-filter meeting-min-con" style={{ marginBottom: ".5%"}}>
                                            <div class="row">
                                                <div class="col-md-12 product-form no-padding">
                                                    <div class="col-md-12 no-padding">
                                                        <div class="col-md-12 no-padding">
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Customer Name</label>
                                                                    <span><h6>Virat</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="Address">Customer Department</label>
                                                                    <span><h6> - </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Date of meeting</label>
                                                                    <span><h6> 28-1-2017</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="city">Buyer Name</label>
                                                                    <span><h6>Vikash</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Present</label>
                                                                    <span><h6> - </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Place of the meeting</label>
                                                                    <span><h6> - </h6></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                    <div class="card-container meeting-min-con">
                                        <div class="table-container">
                                            <div class="row" style={{ paddingBottom: "1%" }}>
                                                <div class="col-md-12 product-form no-padding" style={{ marginTop: "1.5%" }}>
                                                    <div class="col-md-4 no-padding">
                                                        <div class="col-md-12">
                                                            <div class="upload-photo" style={{
                                                                marginBottom: "15%"}} >
                                                                    <img src={productPic} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                            <div class="form-group">
                                                                <label for="phone">Magnum Style Number</label>
                                                                <span><h6>ST0001</h6></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                            <div class="form-group">
                                                                <label for="phone">Magnum Style Name</label>
                                                                <span><h6>MANGO SHIRT OP 1</h6></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                            <div class="form-group">
                                                                <label for="phone">Customer Ref No</label>
                                                                <span><h6>MN-000345</h6></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="col-md-12 no-padding">
                                                            <div class="col-md-12 mul-check check-padding">
                                                                <div class="form-group col-md-2 no-padding">
                                                                    <label for="city">Sample Style</label>
                                                                </div>
                                                                <p class="radio-inline no-padding">
                                                                    <input name="group1" type="radio" class="filled-in hide-all" id="rad1" />
                                                                    <label for="rad1">New Sample</label>
                                                                </p>
                                                                <p class="radio-inline no-padding">
                                                                    <input name="group1" type="radio" class="filled-in hide-all" id="rad2" />
                                                                    <label for="rad2">Existing Sample</label>
                                                                </p>
                                                                <p class="radio-inline no-padding">
                                                                    <input name="group1" type="radio" class="filled-in ib" id="rad3" value="ib" />
                                                                    <label for="rad3">IB</label>
                                                                </p>
                                                                <p class="radio-inline no-padding">
                                                                    <input name="group1" type="radio" class="filled-in order" id="rad4" value="order" />
                                                                    <label for="rad4">Order</label>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Block / Historic Ref No.</label>
                                                                    <span><h6> - </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Block / Historic Ref</label>
                                                                    <span><h6> Customer Block </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Sketch</label>
                                                                    <span><h6>  </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Sample Deadline</label>
                                                                    <span><h6> Aug End </h6></span>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-6 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Fabric</label>
                                                                    <span><h6>Base As Per Original Sample</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Quality</label>
                                                                    <span><h6>-</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Artwork / Color Ref</label>
                                                                    <span><h6> - </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Trim</label>
                                                                    <span><h6> - </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Fit Comments / Styling Changes</label>
                                                                    <span><h6>BLOCK AS PAPAYA. STYLING AS ORIGINAL SAMPLE</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 step-one">
                                                                <div class="form-group">
                                                                    <label for="phone">Action / Remarks</label>
                                                                    <span><h6>GOWTHAM TO RE-COLOUR STRIPE INTO SANTA FE COLOURS</h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 step-one mul-check">
                                                                <div class="form-group">
                                                                    <label for="city">Pending Item from</label>
                                                                    <span><h6> Buyer </h6></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 step-one mul-check">
                                                                <div class="form-group">
                                                                    <label for="city">Mocks</label>
                                                                    <span><h6> Wash </h6></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                          <div class="col-md-12 product-form no-padding" style={{ marginTop: "1%" }}>
                                                <div class="col-md-12 mul-step-one">
                                                    <div class="form-group upload-ref-photo">
                                                        <label for="Address">Reference Image</label>
                                                        <br/>
                                                    </div>
                                                    </div>
                                                    <div class="col-md-12 hide-customer-site">
                                                        <div class="ref-images" style={{ marginTop: "0" }}>
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
                                                                        <a href="../assets/images/cloth/2.jpg" data-lightbox="image-1"><img src={cloth} /></a>
                                                                        <span><p class="img-label">Sketch</p></span>
                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="Edit"><i class="material-icons">edit</i></a></span>
                                                                        <span><a class="btn-floating btn-small waves-effect waves-light black delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-12 mul-step-one text-center">
                                                            <button class="primary">Done</button>
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
                                                                        <input type="text" class="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 step-one">
                                                                    <div class="form-group">
                                                                        <label for="address">Image Description</label>
                                                                        <textarea class="form-control" cols="30" rows="2" style={{ resize: "none" }}></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 step-one">
                                                                    <div class="file-field input-field form-group">
                                                                        <div class="btn">
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
                            <div class="scroll-up pull-right">
                                <a href="#top" class="btn-floating btn-large black" title="Add multiple"><i class="fa fa-chevron-up"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </Fragment>
        );
    }
}
                                                
export default ViewMeeting;
                                                
                                                
                                                
                                                
                                                
                                                
