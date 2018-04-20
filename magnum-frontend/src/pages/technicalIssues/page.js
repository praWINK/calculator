import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import cloth from '../../assets/images/cloth/1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class TechnicalIssues extends Component {
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
                            <h6>Create TECHNICAL ISSUES</h6></li>
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
                                                        <div class="col-md-12 nopadding">
                                                            <div class="col-md-10 nopadding thread-consumption-sec1">
                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group">
                                                                        <label for="name">Style No</label>
                                                                        <span><h6>42590</h6></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-2 step-one">
                                                                    <div class="form-group">
                                                                        <label for="name">Style REf No</label>
                                                                        <span><h6>A</h6></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="name">Style Name</label>
                                                                        <span><h6>Lurex - Gingham Check Shirt</h6></span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 step-one">
                                                                    <div class="form-group">
                                                                        <label for="name">Customer & Department Name</label>
                                                                        <span><h6>Example Name</h6></span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 thread-consumption-sec1 nopadding">

                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name">Created Date</label>
                                                                    <br/>
                                                                        <input type="date" class="form-control" placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2 step-one">
                                                                <div class="form-group">
                                                                    <label for="name" class="active">Chart Prepared By</label>
                                                                    <input type="text" class="form-control" placeholder="" readonly=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 no-padding">
                                                                <div class="col-md-12 pull-right hide-customer-site-img" style={{marginTop:"20px"}}>
                                                                    <div class="upload-box" style={{display:"block"}}>
                                                                        <div class="file-field input-field">
                                                                            <div class="btn" sstyle={{ marginBottom: "0px" }}>
                                                                                <p style={{fontSize:"11px"}}>Upload Image</p>
                                                                                <input type="file" multiple=""/>
                                                                            </div>
                                                                            <div class="file-path-wrapper" style={{ display: "none" }}>
                                                                                <input class="file-path form-control" type="text" style={{ marginTop: "9px" }}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 hide-customer-site" style={{ display: "block" }}>
                                                                <div class="ref-images" style={{paddindLeft:0,paddinRight:0}}>
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
                                                            {/* <!-- HIDDEN DIV ON Edit IMAGES STARTS HERE --> */}
                                                            <div class="edit-site permission-con" style={{display:"none", paddingTop:"9%!important"}}>
                                                                <div class="row">
                                                                    <div class="col-md-12 meeting-min-con">
                                                                        <div class="table-site">
                                                                            <p class="text-center site-title"> <b>UPDATE IMAGE</b> </p>
                                                                        </div>
                                                                        <div class="col-md-6 col-md-offset-3 product-form">
                                                                            <div class="col-md-12 step-one">
                                                                                <div class="form-group">
                                                                                    <label for="dept">Image Name</label>
                                                                                    <input type="text" class="form-control" placeholder="" value="Sketch"/>
                                                                                </div>
                                                                            </div>
                                                                                <div class="col-md-12 step-one">
                                                                                    <div class="file-field input-field form-group">
                                                                                        <div class="btn" style={{marginBottom:"1.5%"}}>
                                                                                            <span style={{fontSize:"12px", color:"white"}}>File</span>
                                                                                            <input type="file" multiple/>
                                                                                        </div>
                                                                                            <div class="file-path-wrapper">
                                                                                                <input class="file-path validate form-control" type="text" style={{marginTop:"6px"}}/>
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
                                                                        {/* <!-- HIDDEN DIV ON Edit IMAGES Ends HERE --> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                        <div class="row" style={{padding:"0 0 1% 0"}}>
                                                            <div class="col-md-12 product-form nopadding">
                                                                <div class="col-md-12 nopadding">
                                                                    <div class="col-md-12">
                                                                        <div class="col-md-2 step-one">
                                                                            <div class="form-group">
                                                                                <label for="name">Sample Type</label>
                                                                                <select class="form-control" name="">
                                                                                    <option value="">Select</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-2 step-one">
                                                                            <div class="form-group">
                                                                                <label for="name">Date</label>
                                                                                <br/>
                                                                                    <input type="date" class="form-control" placeholder=""/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6 step-one meeting_count">
                                                                            <div class="input-field">
                                                                                <label for="name">Who Attended Meeting</label>
                                                                                <select multiple class="multiSelect">
                                                                                    <option value="" disabled selected>Choose your Name</option>
                                                                                    <option value="1">Aarti Chordia</option>
                                                                                    <option value="2">Ravi Chordia</option>
                                                                                    <option value="3">Uma Priya</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div class="col-md-12 ti_table">
                                                                        <table class="lined bordered responsive-table">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Check Point</th>
                                                                                    <th>Comments</th>
                                                                                    {/* <!-- <th></th> --> */}
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>Fabric</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Trims</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td> Embelishment & Embroidery</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>PATTERN</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>CUTTING</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>MAKEUP/SEWING/CONSTRUCTION</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>SAFETY</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ADDITIONAL INFORMATION</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>WASHING</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>MACHINERY</td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td></td>
                                                                                        <td><textarea name="name" rows="2" class="form-control" cols="80"></textarea></td>
                                                                                    </tr>


                                                                                </tbody>
                                                                            </table>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                                            <div class="row" style={{padding:"0 0 1% 0"}}>
                                                                <div class="col-md-12 product-form nopadding">
                                                                    <div class="col-md-12 text-center">
                                                                    <a onClick={() => this.props.history.push("/addNewStyle")} class="primary" style={{ color: "white", cursor: "pointer" }}>Back</a> <button type="button" class="primary" name="button">Save</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mul-mm-add-floating">
                                                        <a class="btn-floating btn-large waves-effect waves-light red" title="Add multiple"><i class="material-icons">add</i></a>
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

export default TechnicalIssues;

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



