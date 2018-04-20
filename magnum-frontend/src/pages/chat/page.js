import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
import download from '../../assets/images/download.svg';
import file from '../../assets/images/file.svg';
import send from '../../assets/images/send.svg';



//import { Grid, Image } from 'semantic-ui-react'


class Chat extends Component {
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
                        <li><a href="#" class="chat_css">Style 1</a></li>
                        <li></li>
                        <li><a href="#"></a></li>
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
                                            <div class="row chat-con">
                                                <div class="col-md-12 no-padding left-box">
                                                    <div class="col-md-7 nopadding">
                                                        <div class="chat-box-left pull-left">
                                                            <h6>Hey</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding right-box">
                                                    <div class="col-md-7 no-padding pull-right">
                                                        <div class="chat-box-right pull-right">
                                                            <h6>Hi</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding left-box">
                                                    <div class="col-md-7 no-padding">
                                                        <div class="chat-box-left pull-left">
                                                            <div class="chats">
                                                                <img src={download} alt=""/>
                                                                    <span class="text-info"><a href="#"> XX XX XX</a></span>

                                                                    <span class="pull-right chat-date">17th Jan</span>
                                                                    <span class="pull-right chat-time">7.30 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding right-box">
                                                    <div class="col-md-7 no-padding pull-right">
                                                        <div class="chat-box-right pull-right">
                                                            <h6>MM File ? updated..... Bring all the files into single ZIP...
                                                                Lorem ipsum dolor sit amet, animal delicata usu id, mollis aliquip probatus pri et, no sed forensibus referrentur. His movet saperet te, ius no eros nonumy. Tantas ubique fabellas cum cu, movet definiebas persequeris in duo, no ocurreret similique has. Quot mentitum eos no, summo placerat qui ex. Pro tamquam detraxit consequat ex, ad per everti audire accusata, ad ponderum pericula nam.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding left-box">
                                                    <div class="col-md-7 no-padding">
                                                        <div class="chat-box-left pull-left">
                                                            <h6>MM File ? updated..... Bring all the files into single ZIP...
                                                                Lorem ipsum dolor sit amet, animal delicata usu id, mollis aliquip probatus pri et, no sed forensibus referrentur. His movet saperet te, ius no eros nonumy. Tantas ubique fabellas cum cu, movet definiebas persequeris in duo, no ocurreret similique has. Quot mentitum eos no, summo placerat qui ex. Pro tamquam detraxit consequat ex, ad per everti audire accusata, ad ponderum pericula nam.
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding left-box">
                                                    <div class="col-md-7 nopadding">
                                                        <div class="chat-box-left pull-left">
                                                            <h6>MM File Folder !</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding right-box">
                                                    <div class="col-md-7 no-padding pull-right">
                                                        <div class="chat-box-right pull-right">
                                                            <div class="chats">
                                                                <img src={file} alt=""/>
                                                                    <span class="text-info"><a href="#">YY YY YY</a></span>

                                                                    <span class="pull-right chat-date">17th Jan</span>
                                                                    <span class="pull-right chat-time">11.30 PM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 no-padding left-box">
                                                    <div class="col-md-7 nopadding">
                                                        <div class="chat-box-left pull-left">
                                                            <h6>Thank you!</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row chat-footer-con">
                                                <div class="col-md-8">
                                                    <div class="col-md-10 col-md-offset-1 chat-textarea">
                                                        <textarea type="text" class="form-control" rows="2" cols="50" placeholder="Write a message"></textarea>
                                                    </div>

                                                </div>
                                                <div class="col-md-4 chat-footer-btns no-padding">
                                                    <div class="col-md-2 no-padding">
                                                        <div class="file-field input-field">
                                                            <div class="primary">
                                                                <span><i class="fa fa-paperclip" style={{fontSize:"30px"}}></i></span>
                                                                <input type="file"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        <div class="col-md-5 no-padding">
                                                            <a href="#" class="primary">
                                                            <img src={send} alt=""/>
                                                            </a>
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

export default Chat;

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



