import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class AddNewCustomer extends Component {
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
                
                <div className="mg-container">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="right-section-container">
                                    <div class="col-md-12 nopadding">
                                        <div class="panel calendarPanel">
                                            <div id='calendar'></div>
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

export default AddNewCustomer;

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



