import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import cloth from "../../assets/images/cloth/1.jpg"
class AddMeetingImage extends Component {
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
                        <li><h6>Meeting Notes Image</h6></li>
                        <li class="pull-right"><a href="#"></a></li>
                    </ul>
                </div>
                <div class="mg-container mg-container-table" id="top">
                    <Sidebar/>
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                    <div class="card-filter  meeting-min-con" style={{marginBottom:"0.5%"}}>
                                        <div class="table-container">
                                        <div class="row" style={{padding:"1% 0"}}>
                                            <div class="col-md-12 product-form">
                                                <div class="col-md-12">
                                                <div class="col-md-3 step-one">
                                                    <div class="form-group">
                                                    <label for="Address">Customer / Department</label>
                                                    <select class="form-control" name="">
                                                        <option value="">Select</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 step-one">
                                                    <div class="form-group">
                                                    <label for="">Date of meeting</label>
                                                    <input type="date" class="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 step-one">
                                                    <div class="form-group">
                                                    <label for="city">Buyer Name</label>
                                                    <input type="text" class="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 step-one">
                                                    <div class="form-group">
                                                    <label for="phone">Present</label>
                                                    <textarea name="" class="form-control" cols="30" rows="2"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 step-one">
                                                    <div class="form-group">
                                                    <label for="phone">Place of the meeting</label>
                                                    <input type="text" class="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card-filter  meeting-min-con" style={{marginBottom:"0.5%"}}>
                                        <div class="table-container">
                                        <div class="row" style={{paddingBottom:"2%"}}>
                                            <div class="col-md-12 product-form no-padding">
                                            <div class="col-md-12" style={{paddingTop:"1%", paddingLeft:"0",paddingRight:"0"}}>
                                                <div class="col-md-12 step-one mul-step-one">
                                                <div class="form-group upload-ref-photo">
                                                    <div class="col-md-6 pull-right hide-customer-site-img" style={{marginTop:"-10px"}}>
                                                    <div class="upload-box" style={{display:"block"}}>
                                                        <div class="file-field input-field">
                                                            <div class="btn" style={{marginBottom:"0"}}>
                                                            <p style={{fontSiZe:"11px"}}>Add New</p>
                                                            <input type="file" multiple/>
                                                            </div>
                                                            <div class="file-path-wrapper">
                                                            <input class="file-path form-control" type="text" style={{marginTop:"7px"}}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-md-12 hide-customer-site">
                                                <div class="ref-images" style={{paddingLeft:0, paddingRight:"0"}}>
                                                    <ul>
                                                    <li>
                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                        <span><p class="img-label">Sketch</p></span>
                                                        <span><a href="#" onClick={() => this.props.history.push("/addMultipleMeeting")} class="btn-floating btn-small waves-effect waves-light black main-edit" title="Edit"><i class="material-icons">edit</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="img-edit"><i class="material-icons">photo</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light red delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                    </li>
                                                    <li>
                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                        <span><p class="img-label">Sketch 2</p></span>
                                                        <span><a href="#" onClick={() => this.props.history.push("/addMultipleMeeting")} class="btn-floating btn-small waves-effect waves-light black main-edit" title="Edit"><i class="material-icons">edit</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="img-edit"><i class="material-icons">photo</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light red delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                    </li>
                                                    <li>
                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                        <span><p class="img-label">Facy Material</p></span>
                                                        <span><a href="#" onClick={() => this.props.history.push("/addMultipleMeeting")} class="btn-floating btn-small waves-effect waves-light black main-edit" title="Edit"><i class="material-icons">edit</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="img-edit"><i class="material-icons">photo</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light red delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                    </li>
                                                    <li>
                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                        <span><p class="img-label">Sketch 7</p></span>
                                                        <span><a href="#" onClick={() => this.props.history.push("/addMultipleMeeting")} class="btn-floating btn-small waves-effect waves-light black main-edit" title="Edit"><i class="material-icons">edit</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="img-edit"><i class="material-icons">photo</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light red delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                    </li>
                                                    <li>
                                                        <a href="../assets/images/cloth/1.jpg" data-lightbox="image-1"><img src={cloth}/></a>
                                                        <span><p class="img-label">Sketch</p></span>
                                                        <span><a href="#" onClick={() => this.props.history.push("/addMultipleMeeting")} class="btn-floating btn-small waves-effect waves-light black main-edit" title="Edit"><i class="material-icons">edit</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light black edit edit-img" title="img-edit"><i class="material-icons">photo</i></a></span>
                                                        <span><a class="btn-floating btn-small waves-effect waves-light red delete" title="Delete"><i class="material-icons">close</i></a></span>
                                                    </li>

                                                    </ul>
                                                </div>

                                                <div class="col-md-12 profile-btn text-center">
                                                    <a href="meeting-minutes.html" class="primary">Submit</a> <a href="" class="primary">Cancel</a>
                                                </div>
                                                </div>
                                                {/* <div class="edit-site permission-con" style={{display:"none", marginTop:"4%!important"}}>
                                                <div class="row">
                                                    <div class="col-md-12 meeting-min-con">
                                                    <div class="table-site">
                                                        <p class="text-center site-title"> <b>EDIT IMAGE</b> </p>
                                                    </div>
                                                    <div class="col-md-6 col-md-offset-3 product-form">
                                                        <div class="col-md-12 step-one">
                                                        <div class="form-group">
                                                            <label for="dept">Image Name</label>
                                                            <input type="text" class="form-control" placeholder="" value="Sketch">
                                                        </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                        <div class="form-group">
                                                            <label for="address">Image Description</label>
                                                            <textarea class="form-control" cols="30" rows="2" style="resize: none;" placeholder=""></textarea>
                                                        </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                        <div class="file-field input-field form-group">
                                                            <div class="btn" style="margin-bottom:1.5%;">
                                                            <span style="font-size:12px; color:white;">File</span>
                                                            <input type="file" multiple>
                                                            </div>
                                                            <div class="file-path-wrapper">
                                                            <input class="file-path validate form-control" type="text" style="margin-top:6px;">
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
                    <Footer/>
                </div>

            </Fragment>
        );
    }
}

export default AddMeetingImage;





