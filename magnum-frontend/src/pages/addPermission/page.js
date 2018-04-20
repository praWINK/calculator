import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
class AddPermission extends Component {
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
                        <li><a href=""></a></li>
                        <li><h6>Add Permission Role</h6></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-container meeting-min-con">
                                            <div class="table-container">
                                                <div class="row" style={{paddingBottom:"2%"}}>
                                                    <div class="col-md-6 col-md-offset-3 product-form" style={{marginTop:"2%"}}>
                                                        <div class="col-md-12 step-one">
                                                            <div class="form-group">
                                                                <label for="name">Role Name</label>
                                                                <br/>
                                                                    {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span> --> */}
                                                                <input type="text" class="form-control" placeholder="" value="" name="" id=""/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                            <div class="form-group">
                                                                <label for="desc">Description</label>
                                                                <br/>
                                                                    {/* <!-- <span>(A short and catchy yet descriptive name for your product)</span> --> */}
                                                                <textarea type="text" class="form-control" placeholder=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 step-one">
                                                            <div class="form-group">
                                                                <label for="desc">Description</label>
                                                                <br/>
                                                                    <select class="form-control" id="color_me">
                                                                        <option value="green" class="one-green">Lightseagreen</option>
                                                                        <option value="blue" class="two-blue">Blue</option>
                                                                        <option value="orange" class="two-blue">Orange</option>
                                                                    </select>
                                                                    {/* <!-- <script>
                                                                        $("#color_me").change(function(){
                                                                        var color = $("option:selected", this).attr("class");
                                                                        $("#color_me").attr("class", color);
                                                                    });
                                                                    </script> --> */}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 profile-btn text-center">
                                                                <button type="button" class="primary" name="button">ADD Role</button> <a  style={{color:"white",cursor:"pointer"}} onClick={()=> this.props.history.push("/listPermissions")}class="primary">BACK</a>
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

export default AddPermission;









