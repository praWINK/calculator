import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class Smv_Ov_List extends Component {
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
                            <h6>Smv / ob calculation</h6></li>
                        <Link to="/addNewSmv_Ob"><li class="pull-right">
                            <a href="" style={{color: "#179286", paddingRight: "29px"}}>Add New</a>
                        </li></Link>
                    </ul>
                </div>
                <div className="mg-container  mg-container-table">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">

                                        <div class="card-container">
                                            <div class="table-container">
                                                <table class="striped">
                                                    <thead>
                                                        <tr>
                                                            <th>S. No</th>
                                                            <th>Operations</th>
                                                            <th>Machine</th>
                                                            <th>Folder / Guide </th>
                                                            <th>Seconds</th>
                                                            <th>SAM</th>
                                                            <th>Target Per Hour</th>
                                                            <th colspan="2">Action</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>1.</td>
                                                            <td>MAKE NK TAPE</td>
                                                            <td>SNLS</td>
                                                            <td>O - Guide</td>
                                                            <td>36</td>
                                                            <td>0.583</td>
                                                            <td>103</td>

                                                            <td><a href="" class="edit" title="Edit"><i class="material-icons">create</i></a></td>
                                                            <td><a href="#" class="clone" title="Clone"><i class="material-icons">delete</i></a></td>
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

export default Smv_Ov_List;

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



