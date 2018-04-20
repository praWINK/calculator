import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import productPic from '../../assets/images/cloth/2.jpg';
import cloth from '../../assets/images/cloth/1.jpg';

//import { Grid, Image } from 'semantic-ui-react'


class ViewPermission extends Component {
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
                        <li><h6>View Role Management</h6></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table" id="top">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-container product-con" style={{padding:"4%"}}>
                                            <div class="row">
                                                <div class="col-md-8 col-md-offset-2">
                                                    <div class="card-light">
                                                        <ul class="main-list">
                                                            <li>
                                                                <ul>
                                                                    <li>Role Name<span>:</span> </li>
                                                                    <li>Role 1</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Description<span>:</span> </li>
                                                                    <li> - </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <ul>
                                                                    <li>Color<span>:</span> </li>
                                                                    <li> Orange </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <br/>
                                                    <div class="col-md-12 profile-btn text-center">
                                                        <a onClick={() => this.props.history.push("/listPermissions")} style={{ cursor: "pointer", color: "white" }} class="primary">BACK</a> <a onClick={() => this.props.history.push("/addPermission")} style={{ cursor: "pointer", color: "white" }} class="primary">EDIT</a> <button class="primary" name="button">DELETE</button>
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
            </Fragment>
        );
    }
}

export default ViewPermission;






