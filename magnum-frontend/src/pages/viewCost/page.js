import React, { Component, Fragment } from 'react';
import { Header, Sidebar, Footer } from '../../components';
// import { profilePic } from '../../assets/images/pro1.jpg';
//import { Grid, Image } from 'semantic-ui-react'


class ViewCost extends Component {
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
                        <li><h6>View Costing</h6></li>
                        <li class="pull-right"><a href="#"></a></li>
                    </ul>
                </div>
                <div className="mg-container mg-container-table" id="top">
                    <Sidebar />
                    <div class="right-section">
                        <div class="row nopadding">
                            <div class="col-md-12 nopadding">
                                <div class="printer pull-right">
                                    <a href="#" class="primary">Print <i class="material-icons">print</i></a>
                                </div>
                                <div class="right-section-container">
                                    <div class="col-md-12 no-padding">
                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                            <div class="row" style={{padding:"0 0 1% 0"}}>
                                                <div class="col-md-12 product-form">
                                                    <div class="col-md-12 nopadding">
                                                        <div class="card-light ib-list-view costing-list-view">
                                                            <ul class="main-list">
                                                                <li>
                                                                    <ul>
                                                                        <li>Style No <span>:</span></li>
                                                                        <li>42590</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Ref <span>:</span></li>
                                                                        <li>A</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Customer Dept <span>:</span></li>
                                                                        <li>Matlan - Girls Wear</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Reference Color <span>:</span></li>
                                                                        <li>Pink</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Magnum Style Name <span>:</span></li>
                                                                        <li>Lurex - Gingham Check Shirt</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Customer Ref No <span>:</span></li>
                                                                        <li>LCWIFH629</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Buyer Style Name <span>:</span></li>
                                                                        <li>Check Shirt</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Fabric Type <span>:</span></li>
                                                                        <li>Checks</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Season <span>:</span></li>
                                                                        <li>SS1B</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Story Name <span>:</span></li>
                                                                        <li>Sailaway</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Buyer Name <span>:</span></li>
                                                                        <li>Aarti Chordia</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Range <span>:</span></li>
                                                                        <li>Regular</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Set <span>:</span></li>
                                                                        <li>Yes</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Order <span>:</span> </li>
                                                                        <li>SR : 007324</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Style<span>:</span> </li>
                                                                        <li>Ud De Ville Dress</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Buyer<span>:</span> </li>
                                                                        <li>Next-LadiesWear-Casuals</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>garment<span>:</span> </li>
                                                                        <li>Dress</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Created On <span>:</span> </li>
                                                                        <li> 14-10-2008 &nbsp 01:38:14 PM </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Costing Done By<span>:</span> </li>
                                                                        <li>Saru</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Modified On<span>:</span> </li>
                                                                        <li>12-11-2008 &nbsp 01:38:14 PM </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <ul>
                                                                        <li>Modified By<span>:</span> </li>
                                                                        <li>Visa</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="card-filter meeting-min-con" style={{marginBottom:"0.5%"}}>
                                            <div class="row" style={{padding:"1% 0 1% 0"}}>
                                                <div class="col-md-12 product-form">
                                                    <div class="col-md-12 nopadding">
                                                        <table class="striped manage_permissions edit-costing white">
                                                            <thead>
                                                                <tr class="permission_head">
                                                                    <th>No</th>
                                                                    <th>Material No</th>
                                                                    <th>Material</th>
                                                                    <th>Position</th>
                                                                    <th>Option</th>
                                                                    <th>Size</th>
                                                                    <th>Width</th>
                                                                    <th>Consumption</th>
                                                                    <th>Price(INR)</th>
                                                                    <th>Total(INR)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <tr class="mod-header">
                                                                        <th colspan="10" class="text-left">Fabric Cost Details</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>F-00019</td>
                                                                            <td>Cambric Solid</td>
                                                                            <td>Contrast 1</td>
                                                                            <td>Lengthwise</td>
                                                                            <td>12</td>
                                                                            <td>40</td>
                                                                            <td>0.38 mts</td>
                                                                            <td>42.00 /mts</td>
                                                                            <td>15.90</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>F-00019</td>
                                                                            <td>Cambric Solid</td>
                                                                            <td>Contrast 1</td>
                                                                            <td>Lengthwise</td>
                                                                            <td>12</td>
                                                                            <td>40</td>
                                                                            <td>0.38 mts</td>
                                                                            <td>42.00 /mts</td>
                                                                            <td>15.90</td>
                                                                        </tr>
                                                                        <tr class="mod-header total-costing">
                                                                            <th colspan="9" class="text-right naming">Total fabric cost</th>
                                                                            <td>112.90</td>
                                                                        </tr>
                                                                    </tr>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table class="striped manage_permissions edit-costing white">
                                                            <thead>
                                                                <tr class="permission_head">
                                                                    <th>No</th>
                                                                    <th>Material No</th>
                                                                    <th>Material</th>
                                                                    <th>Position</th>
                                                                    <th>Option</th>
                                                                    <th>Size</th>
                                                                    <th>Width</th>
                                                                    <th>Consumption</th>
                                                                    <th>Price(INR)</th>
                                                                    <th>Total(INR)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <tr class="mod-header">
                                                                        <th colspan="10" class="text-left">Accessories Cost Details</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>TBN-00659</td>
                                                                        <td>9413</td>
                                                                        <td>-</td>
                                                                        <td>-</td>
                                                                        <td>-</td>
                                                                        <td>-</td>
                                                                        <td>3 pieces</td>
                                                                        <td class="price-input">0.30 /pieces</td>
                                                                        <td class="total-input">0.90</td>
                                                                    </tr>

                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="text-right naming">Total Accessories cost</th>
                                                                        <td>0.90</td>
                                                                    </tr>
                                                                </tr>

                                                                <tr>
                                                                    <tr class="mod-header">
                                                                        <th colspan="10" class="text-left">Manufacturing Process / Piece Cost Details</th>
                                                                    </tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="text-right naming">Total Manufacturing cost</th>
                                                                        <td>0.00</td>
                                                                    </tr>
                                                                </tr>

                                                                <tr>
                                                                    <tr class="mod-header">
                                                                        <th colspan="10" class="text-left">Other Cost / Piece Cost Details</th>
                                                                    </tr>
                                                                    <tr class="mod-header total-costing">

                                                                        <th colspan="9" class="text-right long-input">
                                                                            CMT
                                                                        </th>
                                                                        <th class="total-input margining">42.90</th>
                                                                    </tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="text-right naming">Total Other cost</th>
                                                                        <th class="total-input margining">73.00</th>
                                                                    </tr>
                                                                </tr>

                                                                <tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="text-right percent-input"><span class="percent-desc">Value Loss @ 5%</span></th>
                                                                        <th class="total-input margining">11.30</th>
                                                                    </tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="text-right percent-input"><span class="percent-desc">Contribution 35% to overheads</span></th>
                                                                        <th class="total-input margining">83.06</th>
                                                                    </tr>
                                                                </tr>

                                                                <tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="naming text-right">Total Overall Cost(INR)</th>
                                                                        <th class="total-input margining">320.38</th>
                                                                    </tr>
                                                                </tr>
                                                                <tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="naming text-right">Total Overall Cost(USD)</th>
                                                                        <th class="total-input margining">5.09</th>
                                                                    </tr>
                                                                </tr>
                                                                <tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="naming text-right">Approved(INR)</th>
                                                                        <th class="total-input naming">No</th>
                                                                    </tr>
                                                                </tr>
                                                                <tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="9" class="naming text-right">Agreed Price()</th>
                                                                        <th class="total-input naming"></th>
                                                                    </tr>
                                                                </tr>
                                                                <tr>
                                                                    <tr class="mod-header total-costing">
                                                                        <th colspan="2" class="naming">Comments</th>
                                                                        <th colspan="8" class="total-input naming"></th>
                                                                    </tr>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="col-md-12 profile-btn text-center">
                                                            <a onClick={()=> this.props.history.push("/listCost")} style={{cursor:"pointer", color:"white"}} class="primary">Back</a> <a href="edit-costing-v2.html" class="primary">Edit</a> <button class="primary" name="button">Delete</button>
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

export default ViewCost;





