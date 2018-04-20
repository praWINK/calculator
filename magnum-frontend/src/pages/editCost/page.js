// import React, { Component, Fragment } from 'react';
// import { Header, Sidebar, Footer } from '../../components';
// import productPic from '../../assets/images/no-product-image.png';
// import cloth from '../../assets/images/cloth/1.jpg';

// class EditCost extends Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }

//     render() {
//         return (
//             <Fragment>
//                 <Header />
//                 <div class="top-sub-bar">
//                     <ul>
//                         <li><a href="#"></a></li>
//                         <li><h6>Edit Costing</h6></li>
//                         <li class="pull-right"><a href="#"></a></li>
//                     </ul>
//                 </div>
//                 <div class="mg-container mg-container-table" id="top">
//                     <Sidebar />
//                     <div class="right-section">
//                         <div class="row nopadding">
//                             <div class="col-md-12 nopadding">
//                                 <div class="right-section-container">
//                                     <div class="col-md-12 no-padding">

//                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                             <div class="row" style="padding:0 0 1% 0;">
//                                                 <div class="col-md-12 product-form">
//                                                     <div class="col-md-12 nopadding">
//                                                         <div class="card-light ib-list-view costing-list-view">
//                                                             <ul class="main-list costing_list">
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Style No / Ref<span>:</span></li>
//                                                                         <li>42590 / A</li>
//                                                                     </ul>
//                                                                 </li>

//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Customer Dept <span>:</span></li>
//                                                                         <li>Matlan - Girls Wear</li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Magnum Style Name <span>:</span></li>
//                                                                         <li>Lurex - Gingham Check Shirt</li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Customer Ref No <span>:</span></li>
//                                                                         <li>LCWIFH629</li>
//                                                                     </ul>
//                                                                 </li>

//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Fabric Type <span>:</span></li>
//                                                                         <li>Checks</li>
//                                                                     </ul>
//                                                                 </li>

//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Buyer Name <span>:</span></li>
//                                                                         <li>Aarti Chordia</li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Set <span>:</span></li>
//                                                                         <li>Yes</li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Created On <span>:</span> </li>
//                                                                         <li> 14-10-2008 &nbsp 01:38:14 PM </li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Costing Done By<span>:</span> </li>
//                                                                         <li>Saru</li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Modified On<span>:</span> </li>
//                                                                         <li>12-11-2008 &nbsp 01:38:14 PM </li>
//                                                                     </ul>
//                                                                 </li>
//                                                                 <li>
//                                                                     <ul>
//                                                                         <li>Modified By<span>:</span> </li>
//                                                                         <li>Visa</li>
//                                                                     </ul>
//                                                                 </li>
//                                                             </ul>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>


//                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                             <div class="row" style="padding:1% 0 1% 0;">
//                                                 <div class="col-md-12 product-form">
//                                                     <div class="col-md-12 nopadding">
//                                                         <table class="striped manage_permissions edit-costing white">
//                                                             <thead>
//                                                                 <tr class="permission_head">
//                                                                     <th>No</th>
//                                                                     <th>Material No</th>
//                                                                     <th>Material</th>
//                                                                     <th>Supplier</th>
//                                                                     <th>Position</th>
//                                                                     <th>Option</th>
//                                                                     <th>Size</th>
//                                                                     <th>Width</th>
//                                                                     <th>Consumption</th>
//                                                                     <th>Price(INR)</th>
//                                                                     <th>Total(INR)</th>
//                                                                 </tr>
//                                                             </thead>
//                                                             <tbody>

//                                                                 <tr>
//                                                                     <tr class="mod-header">
//                                                                         <th colspan="10" class="text-left">Fabric Cost Details</th>
//                                                                     </tr>
//                                                                     <tr>
//                                                                     <tr>
//                                                                         <td>1</td>
//                                                                         <td>F-00019</td>
//                                                                         <td>Cambric Solid</td>
//                                                                         <td> - </td>
//                                                                         <td>Contrast 1</td>
//                                                                         <td>Lengthwise</td>
//                                                                         <td>12</td>
//                                                                         <td>40</td>
//                                                                         <td><input type="text" class="form-control" placeholder="0.38 mts"></td>
//                                                                             <td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/mts</span></td>
//                                                                                 <td class="total-input"><input type="text" class="form-control" placeholder="42.00"></td>
//                                                                     </tr>

//                                                                     <tr>
//                                                                         <td>2</td>
//                                                                         <td>F-00019</td>
//                                                                         <td>Cambric Solid</td>
//                                                                         <td>-</td>
//                                                                         <td>Contrast 1</td>
//                                                                         <td>Lengthwise</td>
//                                                                         <td>12</td>
//                                                                         <td>40</td>
//                                                                         <td><input type="text" class="form-control" placeholder="0.38 mts"></td>
//                                                                             <td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/mts</span></td>
//                                                                                 <td class="total-input"><input type="text" class="form-control" placeholder="42.00"></td>
//                                                                     </tr>
//                                                                     <tr class="mod-header total-costing">
//                                                                         <th colspan="10" class="text-right naming">Total fabric cost</th>
//                                                                         <th class="total-input margining"><input type="text" class="form-control" placeholder="84.90"></th>
//                                                                     </tr>
//                                                                 </tr>
//                                                                 </tr>
//                                                             </tbody>
//                                                         </table>

//                                                                                     <table class="striped manage_permissions edit-costing white">
//                                                                                         <thead>
//                                                                                             <tr class="permission_head">
//                                                                                                 <th>No</th>
//                                                                                                 <th>Trim Category</th>
//                                                                                                 <th>Trim Ref No</th>
//                                                                                                 <th colspan="3">Description</th>
//                                                                                                 <th>Supplier</th>
//                                                                                                 <th>Consumption</th>
//                                                                                                 <th>Price(INR)</th>
//                                                                                                 <th>Total(INR)</th>
//                                                                                             </tr>
//                                                                                         </thead>
//                                                                                         <tbody>
//                                                                                             <tr>
//                                                                                                 <tr class="mod-header">
//                                                                                                     <th colspan="10" class="text-left">Trim Cost Details</th>
//                                                                                                 </tr>
//                                                                                                 <tr>
//                                                                                                     <td>3</td>
//                                                                                                     <td>TBN-00659</td>
//                                                                                                     <td>9413</td>
//                                                                                                     <td colspan="3">-</td>
//                                                                                                     <td>-</td>
//                                                                                                     <td><input type="text" class="form-control" placeholder="0.38 mts"></td>
//                                                                                                         <td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>
//                                                                                                             <td class="total-input"><input type="text" class="form-control" placeholder="42.00"></td>
//                                                                                                 </tr>

//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <th colspan="9" class="text-right naming">Total Accessories cost</th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                 </tr>
//                                                                                             </tr>

//                                                                                             <tr>
//                                                                                                 <tr class="mod-header">
//                                                                                                     <th colspan="10" class="text-left">Manufacturing Process / Piece Cost Details</th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <th colspan="10" class="text-left"><a class="add_item">Add New Item</a></th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <th colspan="2" class="text-left">
//                                                                                                         <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
//                                                                                                     </th>
//                                                                                                     <th colspan="7" class="text-right long-input">
//                                                                                                         <input type="text" class="form-control" placeholder="Fixed Charge">
//                                                                                                     </th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder=""></th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <th colspan="2" class="text-left">
//                                                                                                         <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
//                                                                                                     </th>
//                                                                                                     <th colspan="7" class="text-right long-input">
//                                                                                                         <input type="text" class="form-control" placeholder="CMT">
//                                                                                                     </th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <th colspan="10" class="text-left"><a class="add_item">Add New Item</a></th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <th colspan="9" class="text-right naming">Total Manufacturing cost</th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                 </tr>

//                                                                                                 </tr>

//                                                                                                 <tr>
//                                                                                                     <tr class="mod-header">
//                                                                                                         <th colspan="10" class="text-left">Other Cost / Piece Cost Details</th>
//                                                                                                     </tr>
//                                                                                                     <tr class="mod-header total-costing">

//                                                                                                         <th colspan="1" class="text-left naming">
//                                                                                                             SMV 100%
//                                                                                                         </th>
//                                                                                                         <th colspan="1" class="text-left">
//                                                                                                             <div class="col-md-12 nopadding">
//                                                                                                                 <input type="text" class="form-control pull-left" placeholder="">
//                                                                                                             </div>
//                                                                                                         </th>
//                                                                                                         <th colspan="1" class="text-left naming">
//                                                                                                             SMV 80%
//                                                                                                         </th>
//                                                                                                         <th colspan="1" class="text-left">
//                                                                                                             <div class="col-md-12 nopadding">
//                                                                                                                 <input type="text" class="form-control pull-left" placeholder="">
//                                                                                                             </div>
//                                                                                                         </th>
//                                                                                                     </tr>
//                                                                                                     {/* <!-- <tr class="mod-header total-costing">
//                                                                                                         <th colspan="10" class="text-left"><a class="add_item">Add New Item</a></th>
//                                                                                                     </tr>
//                                                                                                     <tr class="mod-header total-costing">
//                                                                                                         <th colspan="2" class="text-left">
//                                                                                                             <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
//                                                                                                         </th>
//                                                                                                         <th colspan="7" class="text-right long-input">
//                                                                                                             <input type="text" class="form-control" placeholder="Fixed Charge">
//                                                                                                         </th>
//                                                                                                         <th class="total-input margining"><input type="text" class="form-control" placeholder=""></th>
//                                                                                                     </tr>
//                                                                                                     <tr class="mod-header total-costing">
//                                                                                                         <th colspan="2" class="text-left">
//                                                                                                             <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
//                                                                                                         </th>
//                                                                                                         <th colspan="7" class="text-right long-input">
//                                                                                                             <input type="text" class="form-control" placeholder="CMT">
//                                                                                                         </th>
//                                                                                                         <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                     </tr> --> */}
//                                                                                                     <tr class="mod-header total-costing"> 
//                                                                                                         <th colspan="9" class="text-right naming">Total Other cost</th>
//                                                                                                         <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                     </tr>
//                                                                                                 </tr>

//                                                                                                 <tr>
//                                                                                                     <tr class="mod-header total-costing">
//                                                                                                         {/* <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>--> */}
//                                                                                                         <th colspan="9" class="text-right percent-input"><span class="percent-desc">Value Loss @ %</span>
//                                                                                                         <input type="text" class="form-control" placeholder="5"></th>
//                                                                                                         <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                     </tr>
//                                                                                                     <tr class="mod-header total-costing">
//                                                                                                         {/* <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>--> */}
//                                                                                                         <th colspan="9" class="text-right percent-input"><span class="percent-desc">Contribution & to overheads</span>
//                                                                                                         <input type="text" class="form-control" placeholder="5"></th>
//                                                                                                         <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                     </tr>
//                                                                                                     <tr class="mod-header total-costing">
//                                                                                                         {/* <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>--> */}
//                                                                                                     <th colspan="9" class="text-right percent-input"><span class="percent-desc">Customer Discont</span>
//                                                                                                     <input type="text" class="form-control" placeholder=""></th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder=""></th>
//                                                                                                 </tr>
//                                                                                             </tr>

//                                                                                             <tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                     <th colspan="9" class="currency-slct">
//                                                                                                         <select name="" class="form-control">
//                                                                                                             <option value="">Total Cost(INR)</option>

//                                                                                                         </select>
//                                                                                                     </th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                     <th colspan="8" class="currency-slct">
//                                                                                                         <select name="" class="form-control">
//                                                                                                             <option value="">Total Cost(USD)</option>
//                                                                                                             <option value="">Total Cost(GBP)</option>
//                                                                                                             <option value="">Total Cost(EUR)</option>
//                                                                                                         </select>
//                                                                                                     </th>
//                                                                                                     <th colspan="1">
//                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                     </th>
//                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                 </tr>
//                                                                                                 <tr class="mod-header total-costing">
//                                                                                                     <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                             <th colspan="8" class="currency-slct">

//                                                                                             </th>
//                                                                                             <th colspan="1">
//                                                                                                 <input type="text" class="form-control" name="" value="" placeholder="Target Costing">
//                                 </th>
//                                                                                                                                                                                                                                     <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                               </tr>

//                             </tr>

//                           </tbody>
//                         </table>

//                                                                                                                                                                                                                         <div class="col-md-12 step-one">
//                                                                                                                                                                                                                             <div class="form-group">
//                                                                                                                                                                                                                                 <label for="item">Comments</label>
//                                                                                                                                                                                                                                 <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
//                                                                                                                                                                                                                             </div>
//                                                                                                                                                                                                                         </div>
//                                                                                                                                                                                                                         <div class="col-md-12 embroid-mul ">
//                                                                                                                                                                                                                             <div class="col-md-2 step-one">
//                                                                                                                                                                                                                                 <p class="manage_permissions emb-chck">
//                                                                                                                                                                                                                                     <input type="checkbox" class="filled-in" id="filled-in-box6">
//                                                                                                                                                                                                                                         <label for="filled-in-box6">SMV Calculation</label>
//                              </p>
//                            </div>
//                                                                                                                                                                                                                                 <div class="col-md-2 step-one">
//                                                                                                                                                                                                                                     <p class="manage_permissions emb-chck">
//                                                                                                                                                                                                                                         <input type="checkbox" class="filled-in" id="filled-in-box7">
//                                                                                                                                                                                                                                             <label for="filled-in-box7">Based On Ratio</label>
//                              </p>
//                            </div>
//                                                                                                                                                                                                                                     <div class="col-md-2 step-one">
//                                                                                                                                                                                                                                         <p class="manage_permissions emb-chck">
//                                                                                                                                                                                                                                             <input type="checkbox" class="filled-in" id="filled-in-box8">
//                                                                                                                                                                                                                                                 <label for="filled-in-box8">NET Sale Price</label>
//                              </p>
//                            </div>
//                                                                                                                                                                                                                                     </div>
//                                                                                                                                                                                                                                     <div class="col-md-12 profile-btn text-center">
//                                                                                                                                                                                                                                         <button class="primary" name="button">Duplicate</button>
//                                                                                                                                                                                                                                         <button class="primary" name="button">Update Costing</button>
//                                                                                                                                                                                                                                         <a href="costing-v2.html" class="primary">Back</a>
//                                                                                                                                                                                                                                     </div>
//                                                                                                                                                                                                                                 </div>

//                                                                                                                                                                                                                             </div>
//                                                                                                                                                                                                                         </div>
//               </div>

//                                                                                                                                                                                                                     <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                                                                                                                         <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                                                                                                                             <div class="col-md-12 product-form">
//                                                                                                                                                                                                                                 <h6 class="dev-title" style="padding-bottom:10px;"><b>SMV Calculation</b>
//                                                                                                                                                                                                                                     <div class="printer pull-right">
//                                                                                                                                                                                                                                         <a href="#" class="primary">Print <i class="material-icons">print</i></a>
//                                                                                                                                                                                                                                     </div>
//                                                                                                                                                                                                                                 </h6>
//                                                                                                                                                                                                                                 <div class="col-md-12 nopadding">
//                                                                                                                                                                                                                                     <div class="col-md-6 ">
//                                                                                                                                                                                                                                         <div class="smv-table">
//                                                                                                                                                                                                                                             <ul class="smv">
//                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                         <li>Order Qty <span>:</span></li>
//                                                                                                                                                                                                                                                         <li><input type="number" class="form-control orderQtyfirst" name="" value="" oninput="calculateQty()"></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                             <li>SMV <span>:</span></li>
//                                                                                                                                                                                                                                                             <li><input type="number" class="form-control orderQty" name="" value="" oninput="calculateQty()"><p>Mins</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                 <li>No of tailors <span>:</span></li>
//                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control tailorsCount" name="" value="40"></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                             <li>
//                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                     <li>Cost Per Tailor <span>:</span></li>
//                                                                                                                                                                                                                                                                     <li><input type="number" class="form-control costPerTailor" name="" value="2800"><p>Rs</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                         <li>Revenue Per Machine <span>:</span></li>
//                                                                                                                                                                                                                                                                         <li><input type="number" class="form-control revenuePerMachine" name="" value="2800"><p>Rs</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                             <li>Minutes Per day <span>:</span></li>
//                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control mins" name="" value="480" oninput="calculateQty()"><p>Mins</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                 <li>Set off Minutes<span>:</span></li>
//                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control" name="" value="960"><p>Mins</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                             <li class="double">
//                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                     <li>SMV  at<span>:</span></li>
//                                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control discount" name="" value="80" onInput="calculateQty()"><p>%</p></li>
//                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control showVal" name="" value=""></li>
//                                   </ul>
//                                                                                                                                                                                                                                                                                             </li>
//                                                                                                                                                                                                                                                                                         </ul>
//                                                                                                                                                                                                                                                                                     </li>
//                                                                                                                                                                                                                                                                                     <li class="double">
//                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                             <li>Target pcs at<span>:</span></li>
//                                                                                                                                                                                                                                                                                             <li>
//                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                     <li><input type="number" class="form-control" name="" value="80"><p>%</p></li>
//                                                                                                                                                                                                                                                                                                         <li><input type="number" class="form-control showPcs" name="" value=""><p style="padding-top:0;">per day</p></li>
//                                   </ul>
//                                                                                                                                                                                                                                                                                                     </li>
//                                                                                                                                                                                                                                                                                                 </ul>
//                                                                                                                                                                                                                                                                                             </li>
//                                                                                                                                                                                                                                                                                             <li>
//                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                     <li>Average output needed <span>:</span></li>
//                                                                                                                                                                                                                                                                                                     <li><input type="number" class="form-control avgOutput" name="" value=""></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                         <li>Need of days for " " tailor line <span>:</span></li>
//                                                                                                                                                                                                                                                                                                         <li><input type="number" class="form-control daysForTailor" name="" value=""><p>days</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                             <li>Idle days <span>:</span></li>
//                                                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control idleDay" name="" value="2" oninput="calculateQty()"><p>days</p></li>
//                               </ul>
//                             </li>
//                                                                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                 <li>Total days <span>:</span></li>
//                                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control dayOutput" name="" value=""><p>days</p></li>
//                               </ul>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                                                                                                                                                                                                                                                                                                 <div class="col-md-6 ">
//                                                                                                                                                                                                                                                                                                     <div class="smv-table">
//                                                                                                                                                                                                                                                                                                         <ul class="smv">
//                                                                                                                                                                                                                                                                                                             <li>
//                                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                                     <li>Total COst based on tailor <span>:</span></li>
//                                                                                                                                                                                                                                                                                                                     <li><input type="number" class="form-control totalCost" name="" value=""><p>Rs</p></li>
//                                 </ul>
//                               </li>
//                                                                                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                         <li><b style="color: red;">Per pc cost based on tailor </b><span>:</span></li>
//                                                                                                                                                                                                                                                                                                                         <li><input type="number" class="form-control perPcCost" name="" value=""><p>Per Pc</p></li>
//                                 </ul>
//                               </li>
//                                                                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                                             <li>Total cost based on revenue<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control totalRevenueCost" name="" value=""><p>Rs</p></li>
//                                 </ul>
//                               </li>
//                                                                                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                 <li><b style="color: red;">Per pc cost based on revenue</b> <span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control perPcRevenue" name="" value=""><p>Per Pc</p></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                                                                                                                                                                                                                                                                                                     </div>
//                                                                                                                                                                                                                                                                                                 </div>

//                                                                                                                                                                                                                                                                                                 <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                                                                                                                                                                                                     <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                                                                                                                                                                                                         <div class="col-md-12 product-form">
//                                                                                                                                                                                                                                                                                                             <h6 class="dev-title" style="padding-bottom:10px;"><b>Retail Margin</b>
//                                                                                                                                                                                                                                                                                                                 <div class="printer pull-right">
//                                                                                                                                                                                                                                                                                                                     <a href="#" class="primary">Print <i class="material-icons">print</i></a>
//                                                                                                                                                                                                                                                                                                                 </div>
//                                                                                                                                                                                                                                                                                                             </h6>
//                                                                                                                                                                                                                                                                                                             <div class="col-md-6 col-md-offset-3">
//                                                                                                                                                                                                                                                                                                                 <div class="smv-table">
//                                                                                                                                                                                                                                                                                                                     <ul class="smv">
//                                                                                                                                                                                                                                                                                                                         <!-- <li>
//                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                 <li>MRP (INR)<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control" name="" value=""></li>
//                             </ul>
//                           </li> -->
//                           <li class="double">
//                                                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                                                     <li>Retail<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                                                             <li><select class="form-control" name="">
//                                                                                                                                                                                                                                                                                                                                                 <option value="">IN GBP</option>
//                                                                                                                                                                                                                                                                                                                                                 <option value="">IN USD </option>
//                                                                                                                                                                                                                                                                                                                                                 <option value="">IN EUR</option>
//                                                                                                                                                                                                                                                                                                                                             </select></li>
//                                                                                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                 <li class="double">
//                                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                                         <li>Less : VAT<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control" name="" value=""><p>%</p></li>
//                                                                                                                                                                                                                                                                                                                                                     <li><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                                                                                                                                                                                                                                                                                                                                                 </li>
//                                                                                                                                                                                                                                                                                                                                             </ul>
//                                                                                                                                                                                                                                                                                                                                         </li>
//                                                                                                                                                                                                                                                                                                                                         <li class="double">
//                                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                                 <li></li>
//                                                                                                                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                                                         <li></li>
//                                                                                                               <div class="right-section">
//                                                                                                                 <div class="row nopadding">
//                                                                                                                   <div class="col-md-12 nopadding">
//                                                                                                                     <div class="right-section-container">
//                                                                                                                       <div class="col-md-12 no-padding">
                                                                                                              
//                                                                                                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                           <div class="row" style="padding:0 0 1% 0;">
//                                                                                                                             <div class="col-md-12 product-form">
//                                                                                                                               <div class="col-md-12 nopadding">
//                                                                                                                                 <div class="card-light ib-list-view costing-list-view">
//                                                                                                                                   <ul class="main-list costing_list">
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Style No / Ref
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>42590 / A</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
                                                                                                              
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Customer Dept
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Matlan - Girls Wear</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Magnum Style Name
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Lurex - Gingham Check Shirt</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Customer Ref No
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>LCWIFH629</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
                                                                                                              
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Fabric Type
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Checks</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
                                                                                                              
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Buyer Name
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Aarti Chordia</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Set
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Yes</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Created On
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li> 14-10-2008 &nbsp 01:38:14 PM </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Costing Done By
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Saru</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Modified On
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>12-11-2008 &nbsp 01:38:14 PM </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li>
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Modified By
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>Visa</li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                   </ul>
//                                                                                                                                 </div>
//                                                                                                                               </div>
//                                                                                                                             </div>
//                                                                                                                           </div>
//                                                                                                                         </div>
                                                                                                              
                                                                                                              
//                                                                                                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                           <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                             <div class="col-md-12 product-form">
//                                                                                                                               <div class="col-md-12 nopadding">
//                                                                                                                                 <table class="striped manage_permissions edit-costing white">
//                                                                                                                                   <thead>
//                                                                                                                                     <tr class="permission_head">
//                                                                                                                                       <th>No</th>
//                                                                                                                                       <th>Material No</th>
//                                                                                                                                       <th>Material</th>
//                                                                                                                                       <th>Supplier</th>
//                                                                                                                                       <th>Position</th>
//                                                                                                                                       <th>Option</th>
//                                                                                                                                       <th>Size</th>
//                                                                                                                                       <th>Width</th>
//                                                                                                                                       <th>Consumption</th>
//                                                                                                                                       <th>Price(INR)</th>
//                                                                                                                                       <th>Total(INR)</th>
//                                                                                                                                     </tr>
//                                                                                                                                   </thead>
//                                                                                                                                   <tbody>
                                                                                                              
//                                                                                                                                     <tr>
//                                                                                                                                       <tr class="mod-header">
//                                                                                                                                         <th colspan="10" class="text-left">Fabric Cost Details</th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr>
//                                                                                                                                         <tr>
//                                                                                                                                           <td>1</td>
//                                                                                                                                           <td>F-00019</td>
//                                                                                                                                           <td>Cambric Solid</td>
//                                                                                                                                           <td> - </td>
//                                                                                                                                           <td>Contrast 1</td>
//                                                                                                                                           <td>Lengthwise</td>
//                                                                                                                                           <td>12</td>
//                                                                                                                                           <td>40</td>
//                                                                                                                                           <td>
//                                                                                                                                             <input type="text" class="form-control" placeholder="0.38 mts">
//                                                                                                                                           </td>
//                                                                                                                                           <td class="price-input">
//                                                                                                                                             <input type="text" class="form-control" placeholder="42.00">
//                                                                                                                                             <span>/mts</span>
//                                                                                                                                           </td>
//                                                                                                                                           <td class="total-input">
//                                                                                                                                             <input type="text" class="form-control" placeholder="42.00">
//                                                                                                                                           </td>
//                                                                                                                                         </tr>
                                                                                                              
//                                                                                                                                         <tr>
//                                                                                                                                           <td>2</td>
//                                                                                                                                           <td>F-00019</td>
//                                                                                                                                           <td>Cambric Solid</td>
//                                                                                                                                           <td>-</td>
//                                                                                                                                           <td>Contrast 1</td>
//                                                                                                                                           <td>Lengthwise</td>
//                                                                                                                                           <td>12</td>
//                                                                                                                                           <td>40</td>
//                                                                                                                                           <td>
//                                                                                                                                             <input type="text" class="form-control" placeholder="0.38 mts">
//                                                                                                                                           </td>
//                                                                                                                                           <td class="price-input">
//                                                                                                                                             <input type="text" class="form-control" placeholder="42.00">
//                                                                                                                                             <span>/mts</span>
//                                                                                                                                           </td>
//                                                                                                                                           <td class="total-input">
//                                                                                                                                             <input type="text" class="form-control" placeholder="42.00">
//                                                                                                                                           </td>
//                                                                                                                                         </tr>
//                                                                                                                                         <tr class="mod-header total-costing">
//                                                                                                                                           <th colspan="10" class="text-right naming">Total fabric cost</th>
//                                                                                                                                           <th class="total-input margining">
//                                                                                                                                             <input type="text" class="form-control" placeholder="84.90">
//                                                                                                                                           </th>
//                                                                                                                                         </tr>
//                                                                                                                                       </tr>
//                                                                                                                                     </tr>
//                                                                                                                                   </tbody>
//                                                                                                                                 </table>
                                                                                                              
//                                                                                                                                 <table class="striped manage_permissions edit-costing white">
//                                                                                                                                   <thead>
//                                                                                                                                     <tr class="permission_head">
//                                                                                                                                       <th>No</th>
//                                                                                                                                       <th>Trim Category</th>
//                                                                                                                                       <th>Trim Ref No</th>
//                                                                                                                                       <th colspan="3">Description</th>
//                                                                                                                                       <th>Supplier</th>
//                                                                                                                                       <th>Consumption</th>
//                                                                                                                                       <th>Price(INR)</th>
//                                                                                                                                       <th>Total(INR)</th>
//                                                                                                                                     </tr>
//                                                                                                                                   </thead>
//                                                                                                                                   <tbody>
//                                                                                                                                     <tr>
//                                                                                                                                       <tr class="mod-header">
//                                                                                                                                         <th colspan="10" class="text-left">Trim Cost Details</th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr>
//                                                                                                                                         <td>3</td>
//                                                                                                                                         <td>TBN-00659</td>
//                                                                                                                                         <td>9413</td>
//                                                                                                                                         <td colspan="3">-</td>
//                                                                                                                                         <td>-</td>
//                                                                                                                                         <td>
//                                                                                                                                           <input type="text" class="form-control" placeholder="0.38 mts">
//                                                                                                                                         </td>
//                                                                                                                                         <td class="price-input">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.00">
//                                                                                                                                           <span>/pieces</span>
//                                                                                                                                         </td>
//                                                                                                                                         <td class="total-input">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.00">
//                                                                                                                                         </td>
//                                                                                                                                       </tr>
                                                                                                              
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="9" class="text-right naming">Total Accessories cost</th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                     </tr>
                                                                                                              
//                                                                                                                                     <tr>
//                                                                                                                                       <tr class="mod-header">
//                                                                                                                                         <th colspan="10" class="text-left">Manufacturing Process / Piece Cost Details</th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="10" class="text-left">
//                                                                                                                                           <a class="add_item">Add New Item</a>
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="2" class="text-left">
//                                                                                                                                           <a class="btn-floating btn-small waves-effect waves-light red">
//                                                                                                                                             <i class="material-icons">clear</i>
//                                                                                                                                           </a>
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="7" class="text-right long-input">
//                                                                                                                                           <input type="text" class="form-control" placeholder="Fixed Charge">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="2" class="text-left">
//                                                                                                                                           <a class="btn-floating btn-small waves-effect waves-light red">
//                                                                                                                                             <i class="material-icons">clear</i>
//                                                                                                                                           </a>
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="7" class="text-right long-input">
//                                                                                                                                           <input type="text" class="form-control" placeholder="CMT">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="10" class="text-left">
//                                                                                                                                           <a class="add_item">Add New Item</a>
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="9" class="text-right naming">Total Manufacturing cost</th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
                                                                                                              
//                                                                                                                                     </tr>
                                                                                                              
//                                                                                                                                     <tr>
//                                                                                                                                       <tr class="mod-header">
//                                                                                                                                         <th colspan="10" class="text-left">Other Cost / Piece Cost Details</th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
                                                                                                              
//                                                                                                                                         <th colspan="1" class="text-left naming">
//                                                                                                                                           SMV 100%
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="1" class="text-left">
//                                                                                                                                           <div class="col-md-12 nopadding">
//                                                                                                                                             <input type="text" class="form-control pull-left" placeholder="">
//                                                                                                                                           </div>
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="1" class="text-left naming">
//                                                                                                                                           SMV 80%
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="1" class="text-left">
//                                                                                                                                           <div class="col-md-12 nopadding">
//                                                                                                                                             <input type="text" class="form-control pull-left" placeholder="">
//                                                                                                                                           </div>
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <!-- <tr class="mod-header total-costing">
//                                                                                                                                               <th colspan="10" class="text-left"><a class="add_item">Add New Item</a></th>
//                                                                                                                                             </tr>
//                                                                                                                                             <tr class="mod-header total-costing">
//                                                                                                                                               <th colspan="2" class="text-left">
//                                                                                                                                                 <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
//                                                                                                                                               </th>
//                                                                                                                                               <th colspan="7" class="text-right long-input">
//                                                                                                                                                 <input type="text" class="form-control" placeholder="Fixed Charge">
//                                                                                                                                               </th>
//                                                                                                                                               <th class="total-input margining"><input type="text" class="form-control" placeholder=""></th>
//                                                                                                                                             </tr>
//                                                                                                                                             <tr class="mod-header total-costing">
//                                                                                                                                               <th colspan="2" class="text-left">
//                                                                                                                                                 <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">clear</i></a>
//                                                                                                                                               </th>
//                                                                                                                                               <th colspan="7" class="text-right long-input">
//                                                                                                                                                 <input type="text" class="form-control" placeholder="CMT">
//                                                                                                                                               </th>
//                                                                                                                                               <th class="total-input margining"><input type="text" class="form-control" placeholder="42.90"></th>
//                                                                                                                                             </tr> -->
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <th colspan="9" class="text-right naming">Total Other cost</th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                     </tr>
                                                                                                              
//                                                                                                                                     <tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                                                         <th colspan="9" class="text-right percent-input">
//                                                                                                                                           <span class="percent-desc">Value Loss @ %</span>
//                                                                                                                                           <input type="text" class="form-control" placeholder="5">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                                                         <th colspan="9" class="text-right percent-input">
//                                                                                                                                           <span class="percent-desc">Contribution & to overheads</span>
//                                                                                                                                           <input type="text" class="form-control" placeholder="5">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                                                         <th colspan="9" class="text-right percent-input">
//                                                                                                                                           <span class="percent-desc">Customer Discont</span>
//                                                                                                                                           <input type="text" class="form-control" placeholder="">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                     </tr>
                                                                                                              
//                                                                                                                                     <tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                                                         <th colspan="9" class="currency-slct">
//                                                                                                                                           <select name="" class="form-control">
//                                                                                                                                             <option value="">Total Cost(INR)</option>
                                                                                                              
//                                                                                                                                           </select>
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                                                         <th colspan="8" class="currency-slct">
//                                                                                                                                           <select name="" class="form-control">
//                                                                                                                                             <option value="">Total Cost(USD)</option>
//                                                                                                                                             <option value="">Total Cost(GBP)</option>
//                                                                                                                                             <option value="">Total Cost(EUR)</option>
//                                                                                                                                           </select>
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="1">
//                                                                                                                                           <input type="text" class="form-control" name="" value="">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
//                                                                                                                                       <tr class="mod-header total-costing">
//                                                                                                                                         <!--<td class="price-input"><input type="text" class="form-control" placeholder="42.00"> <span>/pieces</span></td>-->
//                                                                                                                                         <th colspan="8" class="currency-slct">
                                                                                                              
//                                                                                                                                         </th>
//                                                                                                                                         <th colspan="1">
//                                                                                                                                           <input type="text" class="form-control" name="" value="" placeholder="Target Costing">
//                                                                                                                                         </th>
//                                                                                                                                         <th class="total-input margining">
//                                                                                                                                           <input type="text" class="form-control" placeholder="42.90">
//                                                                                                                                         </th>
//                                                                                                                                       </tr>
                                                                                                              
//                                                                                                                                     </tr>
                                                                                                              
//                                                                                                                                   </tbody>
//                                                                                                                                 </table>
                                                                                                              
//                                                                                                                                 <div class="col-md-12 step-one">
//                                                                                                                                   <div class="form-group">
//                                                                                                                                     <label for="item">Comments</label>
//                                                                                                                                     <textarea name="name" class="form-control" rows="4" cols="80"></textarea>
//                                                                                                                                   </div>
//                                                                                                                                 </div>
//                                                                                                                                 <div class="col-md-12 embroid-mul ">
//                                                                                                                                   <div class="col-md-2 step-one">
//                                                                                                                                     <p class="manage_permissions emb-chck">
//                                                                                                                                       <input type="checkbox" class="filled-in" id="filled-in-box6">
//                                                                                                                                       <label for="filled-in-box6">SMV Calculation</label>
//                                                                                                                                     </p>
//                                                                                                                                   </div>
//                                                                                                                                   <div class="col-md-2 step-one">
//                                                                                                                                     <p class="manage_permissions emb-chck">
//                                                                                                                                       <input type="checkbox" class="filled-in" id="filled-in-box7">
//                                                                                                                                       <label for="filled-in-box7">Based On Ratio</label>
//                                                                                                                                     </p>
//                                                                                                                                   </div>
//                                                                                                                                   <div class="col-md-2 step-one">
//                                                                                                                                     <p class="manage_permissions emb-chck">
//                                                                                                                                       <input type="checkbox" class="filled-in" id="filled-in-box8">
//                                                                                                                                       <label for="filled-in-box8">NET Sale Price</label>
//                                                                                                                                     </p>
//                                                                                                                                   </div>
//                                                                                                                                 </div>
//                                                                                                                                 <div class="col-md-12 profile-btn text-center">
//                                                                                                                                   <button class="primary" name="button">Duplicate</button>
//                                                                                                                                   <button class="primary" name="button">Update Costing</button>
//                                                                                                                                   <a href="costing-v2.html" class="primary">Back</a>
//                                                                                                                                 </div>
//                                                                                                                               </div>
                                                                                                              
//                                                                                                                             </div>
//                                                                                                                           </div>
//                                                                                                                         </div>
                                                                                                              
//                                                                                                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                           <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                             <div class="col-md-12 product-form">
//                                                                                                                               <h6 class="dev-title" style="padding-bottom:10px;">
//                                                                                                                                 <b>SMV Calculation</b>
//                                                                                                                                 <div class="printer pull-right">
//                                                                                                                                   <a href="#" class="primary">Print
//                                                                                                                                     <i class="material-icons">print</i>
//                                                                                                                                   </a>
//                                                                                                                                 </div>
//                                                                                                                               </h6>
//                                                                                                                               <div class="col-md-12 nopadding">
//                                                                                                                                 <div class="col-md-6 ">
//                                                                                                                                   <div class="smv-table">
//                                                                                                                                     <ul class="smv">
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Order Qty
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control orderQtyfirst" name="" value="" oninput="calculateQty()">
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>SMV
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control orderQty" name="" value="" oninput="calculateQty()">
//                                                                                                                                             <p>Mins</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>No of tailors
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control tailorsCount" name="" value="40">
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Cost Per Tailor
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control costPerTailor" name="" value="2800">
//                                                                                                                                             <p>Rs</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Revenue Per Machine
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control revenuePerMachine" name="" value="2800">
//                                                                                                                                             <p>Rs</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Minutes Per day
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control mins" name="" value="480" oninput="calculateQty()">
//                                                                                                                                             <p>Mins</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Set off Minutes
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control" name="" value="960">
//                                                                                                                                             <p>Mins</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li class="double">
//                                                                                                                                         <ul>
//                                                                                                                                           <li>SMV at
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <ul>
//                                                                                                                                               <li>
//                                                                                                                                                 <input type="number" class="form-control discount" name="" value="80" onInput="calculateQty()">
//                                                                                                                                                 <p>%</p>
//                                                                                                                                               </li>
//                                                                                                                                               <li>
//                                                                                                                                                 <input type="number" class="form-control showVal" name="" value="">
//                                                                                                                                               </li>
//                                                                                                                                             </ul>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li class="double">
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Target pcs at
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <ul>
//                                                                                                                                               <li>
//                                                                                                                                                 <input type="number" class="form-control" name="" value="80">
//                                                                                                                                                 <p>%</p>
//                                                                                                                                               </li>
//                                                                                                                                               <li>
//                                                                                                                                                 <input type="number" class="form-control showPcs" name="" value="">
//                                                                                                                                                 <p style="padding-top:0;">per day</p>
//                                                                                                                                               </li>
//                                                                                                                                             </ul>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Average output needed
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control avgOutput" name="" value="">
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Need of days for " " tailor line
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control daysForTailor" name="" value="">
//                                                                                                                                             <p>days</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Idle days
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control idleDay" name="" value="2" oninput="calculateQty()">
//                                                                                                                                             <p>days</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Total days
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control dayOutput" name="" value="">
//                                                                                                                                             <p>days</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                     </ul>
//                                                                                                                                   </div>
//                                                                                                                                 </div>
//                                                                                                                                 <div class="col-md-6 ">
//                                                                                                                                   <div class="smv-table">
//                                                                                                                                     <ul class="smv">
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Total COst based on tailor
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control totalCost" name="" value="">
//                                                                                                                                             <p>Rs</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>
//                                                                                                                                             <b style="color: red;">Per pc cost based on tailor </b>
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control perPcCost" name="" value="">
//                                                                                                                                             <p>Per Pc</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>Total cost based on revenue
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control totalRevenueCost" name="" value="">
//                                                                                                                                             <p>Rs</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                       <li>
//                                                                                                                                         <ul>
//                                                                                                                                           <li>
//                                                                                                                                             <b style="color: red;">Per pc cost based on revenue</b>
//                                                                                                                                             <span>:</span>
//                                                                                                                                           </li>
//                                                                                                                                           <li>
//                                                                                                                                             <input type="number" class="form-control perPcRevenue" name="" value="">
//                                                                                                                                             <p>Per Pc</p>
//                                                                                                                                           </li>
//                                                                                                                                         </ul>
//                                                                                                                                       </li>
//                                                                                                                                     </ul>
//                                                                                                                                   </div>
//                                                                                                                                 </div>
//                                                                                                                               </div>
//                                                                                                                             </div>
//                                                                                                                           </div>
//                                                                                                                         </div>
                                                                                                              
//                                                                                                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                           <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                             <div class="col-md-12 product-form">
//                                                                                                                               <h6 class="dev-title" style="padding-bottom:10px;">
//                                                                                                                                 <b>Retail Margin</b>
//                                                                                                                                 <div class="printer pull-right">
//                                                                                                                                   <a href="#" class="primary">Print
//                                                                                                                                     <i class="material-icons">print</i>
//                                                                                                                                   </a>
//                                                                                                                                 </div>
//                                                                                                                               </h6>
//                                                                                                                               <div class="col-md-6 col-md-offset-3">
//                                                                                                                                 <div class="smv-table">
//                                                                                                                                   <ul class="smv">
//                                                                                                                                     <!-- <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>MRP (INR)<span>:</span></li>
//                                                                                                                                             <li><input type="number" class="form-control" name="" value=""></li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li> -->
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Retail
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <select class="form-control" name="">
//                                                                                                                                                 <option value="">IN GBP</option>
//                                                                                                                                                 <option value="">IN USD </option>
//                                                                                                                                                 <option value="">IN EUR</option>
//                                                                                                                                               </select>
//                                                                                                                                             </li>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Less : VAT
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                               <p>%</p>
//                                                                                                                                             </li>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li></li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li></li>
//                                                                                                                                             <li style="float: right" class="right_simplText">
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>LESS : MARGIN
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                               <p>%</p>
//                                                                                                                                             </li>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li></li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li></li>
//                                                                                                                                             <li style="float: right" class="right_simplText">
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>LESS : DUTY
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                               <p>%</p>
//                                                                                                                                             </li>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li></li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li></li>
//                                                                                                                                             <li style="float: right" class="right_simplText">
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Less : FREIGHT
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                               <p></p>
//                                                                                                                                             </li>
//                                                                                                                                             <li></li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Target FOB Magnum
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <select class="form-control" name="">
//                                                                                                                                                 <option value="">IN GBP</option>
//                                                                                                                                                 <option value="">IN USD </option>
//                                                                                                                                                 <option value="">IN EUR</option>
//                                                                                                                                               </select>
//                                                                                                                                             </li>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Conversion</li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li></li>
//                                                                                                                                             <li style="float: right" class="right_simplText">
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
//                                                                                                                                     <li class="double">
//                                                                                                                                       <ul>
//                                                                                                                                         <li>Target fob Magnum
//                                                                                                                                           <span>:</span>
//                                                                                                                                         </li>
//                                                                                                                                         <li>
//                                                                                                                                           <ul>
//                                                                                                                                             <li>
//                                                                                                                                               <select class="form-control" name="">
//                                                                                                                                                 <option value="">IN GBP</option>
//                                                                                                                                                 <option value="">IN USD </option>
//                                                                                                                                                 <option value="">IN EUR</option>
//                                                                                                                                               </select>
//                                                                                                                                             </li>
//                                                                                                                                             <li>
//                                                                                                                                               <input type="number" class="form-control" name="" value="">
//                                                                                                                                             </li>
//                                                                                                                                           </ul>
//                                                                                                                                         </li>
//                                                                                                                                       </ul>
//                                                                                                                                     </li>
                                                                                                              
//                                                                                                                                   </ul>
//                                                                                                                                 </div>
//                                                                                                                               </div>
//                                                                                                                             </div>
//                                                                                                                           </div>
//                                                                                                                         </div>
                                                                                                              
//                                                                                                                         <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                           <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                             <div class="col-md-12 product-form">
//                                                                                                                               <h6 class="dev-title" style="padding-bottom:10px;">
//                                                                                                                                 <b>Ratio Costing</b>
//                                                                                                                                 <div class="printer pull-right">
//                                                                                                                                   <a href="#" class="primary">Print
//                                                                                                                                     <i class="material-icons">print</i>
//                                                                                                                                   </a>
//                                                                                                                                 </div>
//                                                                                                                               </h6>
//                                                                                                                               <div class="col-md-6 col-md-offset-3">
//                                                                                                                                 <table class="striped manage_permissions edit-costing white">
//                                                                                                                                   <thead>
//                                                                                                                                     <tr class="permission_head">
//                                                                                                                                       <th>Sizes</th>
//                                                                                                                                       <th>Quantity</th>
//                                                                                                                                       <th>Unit Price</th>
//                                                                                                                                       <th>Amount</th>
//                                                                                                                                       <th>Action</th>
//                                                                                                                                     </tr>
//                                                                                                                                   </thead>
//                                                                                                                                   <tbody>
//                                                                                                                                     <tr>
//                                                                                                                                       <td></td>
//                                                                                                                                       <td>
//                                                                                                                                         <select class="form-control" name="">
//                                                                                                                                           <option value="">PIECES</option>
//                                                                                                                                           <option value="">RATIO</option>
//                                                                                                                                         </select>
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <select class="form-control" name="">
//                                                                                                                                           <option value="">GBP</option>
//                                                                                                                                           <option value="">INR</option>
//                                                                                                                                           <option value="">USD</option>
//                                                                                                                                           <option value="">EUR</option>
//                                                                                                                                         </select>
//                                                                                                                                       </td>
//                                                                                                                                       <td></td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light green address-click-btn">
//                                                                                                                                           <i class="material-icons">add</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="">
//                                                                                                                                       </td>
//                                                                                                                                       <td>
//                                                                                                                                         <input type="text" class="form-control" name="" value="" placeholder="&pound 3.60">
//                                                                                                                                       </td>
//                                                                                                                                       <td>&pound 10.80</td>
//                                                                                                                                       <td>
//                                                                                                                                         <a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn">
//                                                                                                                                           <i class="material-icons">clear</i>
//                                                                                                                                         </a>
//                                                                                                                                       </td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td class="text-right">Total</td>
//                                                                                                                                       <td>12</td>
//                                                                                                                                       <td></td>
//                                                                                                                                       <td>&pound 300.55</td>
//                                                                                                                                     </tr>
//                                                                                                                                     <tr>
//                                                                                                                                       <td></td>
//                                                                                                                                       <td></td>
//                                                                                                                                       <td class="text-right">Average Price in GBP</td>
//                                                                                                                                       <td>&pound 34.55 </td>
//                                                                                                                                     </tr>
//                                                                                                                                   </tbody>
                                                                                                              
//                                                                                                                                 </table>
                                                                                                              
//                                                                                                                               </div>
//                                                                                                                             </div>
//                                                                                                                           </div>
//                                                                                                                         </div>
//                                                                                                                       </div>
//                                                                                                                     </div>
//                                                                                                                   </div>
//                                                                                                                 </div>
                                                                                                              
//                                                                                                                 <div class="scroll-up pull-right">
//                                                                                                                   <a href="#top" class="btn-floating btn-large black" title="Add multiple">
//                                                                                                                     <i class="fa fa-chevron-up"></i>
//                                                                                                                   </a>
//                                                                                                                   <!-- <span><a href="#top"><i class="fa fa-chevron-up"></i></a></span> -->
//                                                                                                                 </div>
//                                                                                                               </div>                                                                                                                                                                                                                                          <li style="float: right" class="right_simplText"><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                             <li class="double">
//                                                                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                                                                     <li>LESS : MARGIN<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control" name="" value=""><p>%</p></li>
//                                                                                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                                                                                                                                                                                                                                                                                                                                                             </li>
//                                                                                                                                                                                                                                                                                                                                                         </ul>
//                                                                                                                                                                                                                                                                                                                                                     </li>
//                                                                                                                                                                                                                                                                                                                                                     <li class="double">
//                                                                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                                                                             <li></li>
//                                                                                                                                                                                                                                                                                                                                                             <li>
//                                                                                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                                                                                     <li></li>
//                                                                                                                                                                                                                                                                                                                                                                     <li style="float: right" class="right_simplText"><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                                         <li class="double">
//                                                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                                                 <li>LESS : DUTY<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                                                                         <li><input type="number" class="form-control" name="" value=""><p>%</p></li>
//                                                                                                                                                                                                                                                                                                                                                                             <li><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                                                                                                                                                                                                                                                                                                                                                                         </li>
//                                                                                                                                                                                                                                                                                                                                                                     </ul>
//                                                                                                                                                                                                                                                                                                                                                                 </li>
//                                                                                                                                                                                                                                                                                                                                                                 <li class="double">
//                                                                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                                                                         <li></li>
//                                                                                                                                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                                                                 <li></li>
//                                                                                                                                                                                                                                                                                                                                                                                 <li style="float: right" class="right_simplText"><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                                                     <li class="double">
//                                                                                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                                                                                             <li>Less : FREIGHT<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                                                             <li>
//                                                                                                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                                                                                                     <li><input type="number" class="form-control" name="" value=""><p></p></li>
//                                                                                                                                                                                                                                                                                                                                                                                         <li></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                                                         <li class="double">
//                                                                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                                                                 <li>Target FOB Magnum<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                                                                 <li>
//                                                                                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                                                                                         <li><select class="form-control" name="">
//                                                                                                                                                                                                                                                                                                                                                                                             <option value="">IN GBP</option>
//                                                                                                                                                                                                                                                                                                                                                                                             <option value="">IN USD </option>
//                                                                                                                                                                                                                                                                                                                                                                                             <option value="">IN EUR</option>
//                                                                                                                                                                                                                                                                                                                                                                                         </select></li>
//                                                                                                                                                                                                                                                                                                                                                                                         <li><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                                                             <li class="double">
//                                                                                                                                                                                                                                                                                                                                                                                 <ul>
//                                                                                                                                                                                                                                                                                                                                                                                     <li>Conversion</li>
//                                                                                                                                                                                                                                                                                                                                                                                     <li>
//                                                                                                                                                                                                                                                                                                                                                                                         <ul>
//                                                                                                                                                                                                                                                                                                                                                                                             <li></li>
//                                                                                                                                                                                                                                                                                                                                                                                             <li style="float: right" class="right_simplText"><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                                                                                                                                                                                                                                                                                                                                                                                 <li class="double">
//                                                                                                                                                                                                                                                                                                                                                                                     <ul>
//                                                                                                                                                                                                                                                                                                                                                                                         <li>Target fob Magnum<span>:</span></li>
//                                                                                                                                                                                                                                                                                                                                                                                         <li>
//                                                                                                                                                                                                                                                                                                                                                                                             <ul>
//                                                                                                                                                                                                                                                                                                                                                                                                 <li><select class="form-control" name="">
//                                                                                                                                                                                                                                                                                                                                                                                                     <option value="">IN GBP</option>
//                                                                                                                                                                                                                                                                                                                                                                                                     <option value="">IN USD </option>
//                                                                                                                                                                                                                                                                                                                                                                                                     <option value="">IN EUR</option>
//                                                                                                                                                                                                                                                                                                                                                                                                 </select></li>
//                                                                                                                                                                                                                                                                                                                                                                                                 <li><input type="number" class="form-control" name="" value=""></li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>

//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//                                                                                                                                                                                                                                                                                                                                                             <div class="card-filter meeting-min-con" style="margin-bottom:.5%;">
//                                                                                                                                                                                                                                                                                                                                                                 <div class="row" style="padding:1% 0 1% 0;">
//                                                                                                                                                                                                                                                                                                                                                                     <div class="col-md-12 product-form">
//                                                                                                                                                                                                                                                                                                                                                                         <h6 class="dev-title" style="padding-bottom:10px;"><b>Ratio Costing</b>
//                                                                                                                                                                                                                                                                                                                                                                             <div class="printer pull-right">
//                                                                                                                                                                                                                                                                                                                                                                                 <a href="#" class="primary">Print <i class="material-icons">print</i></a>
//                                                                                                                                                                                                                                                                                                                                                                             </div>
//                                                                                                                                                                                                                                                                                                                                                                         </h6>
//                                                                                                                                                                                                                                                                                                                                                                         <div class="col-md-6 col-md-offset-3">
//                                                                                                                                                                                                                                                                                                                                                                             <table class="striped manage_permissions edit-costing white">
//                                                                                                                                                                                                                                                                                                                                                                                 <thead>
//                                                                                                                                                                                                                                                                                                                                                                                     <tr class="permission_head">
//                                                                                                                                                                                                                                                                                                                                                                                         <th>Sizes</th>
//                                                                                                                                                                                                                                                                                                                                                                                         <th>Quantity</th>
//                                                                                                                                                                                                                                                                                                                                                                                         <th>Unit Price</th>
//                                                                                                                                                                                                                                                                                                                                                                                         <th>Amount</th>
//                                                                                                                                                                                                                                                                                                                                                                                         <th>Action</th>
//                                                                                                                                                                                                                                                                                                                                                                                     </tr>
//                                                                                                                                                                                                                                                                                                                                                                                 </thead>
//                                                                                                                                                                                                                                                                                                                                                                                 <tbody>
//                                                                                                                                                                                                                                                                                                                                                                                     <tr>
//                                                                                                                                                                                                                                                                                                                                                                                         <td></td>
//                                                                                                                                                                                                                                                                                                                                                                                         <td>
//                                                                                                                                                                                                                                                                                                                                                                                             <select class="form-control" name="">
//                                                                                                                                                                                                                                                                                                                                                                                                 <option value="">PIECES</option>
//                                                                                                                                                                                                                                                                                                                                                                                                 <option value="">RATIO</option>
//                                                                                                                                                                                                                                                                                                                                                                                             </select>
//                                                                                                                                                                                                                                                                                                                                                                                         </td>
//                                                                                                                                                                                                                                                                                                                                                                                         <td>
//                                                                                                                                                                                                                                                                                                                                                                                             <select class="form-control" name="">
//                                                                                                                                                                                                                                                                                                                                                                                                 <option value="">GBP</option>
//                                                                                                                                                                                                                                                                                                                                                                                                 <option value="">INR</option>
//                                                                                                                                                                                                                                                                                                                                                                                                 <option value="">USD</option>
//                                                                                                                                                                                                                                                                                                                                                                                                 <option value="">EUR</option>
//                                                                                                                                                                                                                                                                                                                                                                                             </select>
//                                                                                                                                                                                                                                                                                                                                                                                         </td>
//                                                                                                                                                                                                                                                                                                                                                                                         <td></td>
//                                                                                                                                                                                                                                                                                                                                                                                     </tr>
//                                                                                                                                                                                                                                                                                                                                                                                     <tr>
//                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                     <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                     <td><a class="btn-floating float-btn btn-small waves-effect waves-light green address-click-btn"><i class="material-icons">add</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                 <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                 <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                 <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                             <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                             <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                             <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                         <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                         <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                     <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                 <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                             <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <td><input type="text" class="form-control" name="" value=""></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <td><input type="text" class="form-control" name="" value="" placeholder="&pound 3.60"></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td>&pound 10.80</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td><a class="btn-floating float-btn btn-small waves-effect waves-light red address-click-btn"><i class="material-icons">clear</i></a></td>
//                           </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td class="text-right">Total</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td>12</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td>&pound 300.55</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <tr>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td></td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td class="text-right">Average Price in GBP</td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <td>&pound 34.55 </td>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </tr>
//                         </tbody>

//                       </table>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <div class="scroll-up pull-right">
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <a href="#top" class="btn-floating btn-large black" title="Add multiple"><i class="fa fa-chevron-up"></i></a>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <!-- <span><a href="#top"><i class="fa fa-chevron-up"></i></a></span> -->
//       </div>
//     </div>
                   
//                 </div>
//             </Fragment>
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 );
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                         }
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                         export default EditCost;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
