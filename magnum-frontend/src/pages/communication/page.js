import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class Communication extends Component {
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
                        <li><h6>Communication</h6></li>
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
                                        <div class="card-container">
                                            <div class="row styles-select-con">
                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div class="col-md-12 style-card-con">
                                                    <a onClick = {()=> this.props.history.push("/chat")} style={{cursor:"pointer"}}>
                                                        <div class="style-card">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <h6>Style 1</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Name ABSC</h6>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <h6>Cust Ref - 1002</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
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

export default Communication;

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



