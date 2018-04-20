import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import { Link } from "react-router-dom";


class ListPermissions extends Component {
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
                        <li><h6>Role Management</h6></li>
                        <Link to="/addPermission"><li class="pull-right"><a>Add New</a></li></Link>
                    </ul>
                </div>
                <div className="mg-container mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="card-container cust-card-con">
                                            <div class="table-container">
                                                <table class="striped" >
                                                    <thead>
                                                        <tr>
                                                            <th data-field="cat">Role Name</th>
                                                            <th colspan="4" data-field="price">Action</th>
                                                            {/* <!--<th data-field="price">Edit</th>
                                                            <th data-field="price">Delete</th>--> */}
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>Role 1</td>
                                                            <td><a href="manage-rights.html" class="linker">Rights</a></td>
                                                            <td><a href="view-permission-role.html" class="view" title="view"><i class="material-icons">visibility</i></a></td>
                                                            <td><a onClick = {()=> this.props.history.push("/addPermission")} style={{cursor:"pointer"}} class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                            <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Role 2</td>
                                                            <td><a href="manage-rights.html" class="linker">Rights</a></td>
                                                            <td><a href="view-permission-role.html" class="view" title="view"><i class="material-icons">visibility</i></a></td>
                                                            <td><a onClick = {()=> this.props.history.push("/addPermission")} style={{cursor:"pointer"}} class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                            <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Role 3</td>
                                                            <td><a href="manage-rights.html" class="linker">Rights</a></td>
                                                            <td><a href="view-permission-role.html" class="view" title="view"><i class="material-icons">visibility</i></a></td>
                                                            <td><a onClick = {()=> this.props.history.push("/addPermission")} style={{cursor:"pointer"}} class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                            <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Role 4</td>
                                                            <td><a href="manage-rights.html" class="linker">Rights</a></td>
                                                            <td><a href="view-permission-role.html" class="view" title="view"><i class="material-icons">visibility</i></a></td>
                                                            <td><a onClick = {()=> this.props.history.push("/addPermission")} style={{cursor:"pointer"}} class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                            <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Role 5</td>
                                                            <td><a href="manage-rights.html" class="linker">Rights</a></td>
                                                            <td><a href="view-permission-role.html" class="view" title="view"><i class="material-icons">visibility</i></a></td>
                                                            <td><a onClick = {()=> this.props.history.push("/addPermission")} style={{cursor:"pointer"}} class="edit" title="edit"><i class="material-icons">create</i></a></td>
                                                            <td><a href="#" class="delete" title="delete"><i class="material-icons">delete</i></a></td>
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
                    <Footer />
                </div>

            </Fragment>
        );
    }
}

export default ListPermissions;









