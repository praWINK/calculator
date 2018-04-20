import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { HomePage, LogInPage, ListCustomer, AddNewCustomer, EditCustomer, ViewCustomer, ListMeetingRoom, 
AddMeetingImage, AddMultipleMeeting, ViewMeeting, EditMeeting, Dashboard, Calendar, Communication, Chat, 
ListStyle, AddNewStyle, CreateIB, Smv_Ov_List, AddNewSmv_Ob, ListThreadConsumption, AddThreadConsumption, 
  TechnicalIssues, ListSample, AddNewSample, CostList, ViewCost, EditCost, ListPermissions, AddPermission, 
  ViewPermission
} from './pages';
import createBrowserHistory from 'history/createBrowserHistory';
//import 'semantic-ui-css/semantic.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/master.css';

class Routes extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history} >
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route  path="/listCustomer" component={ListCustomer} />
          <Route  path="/addNewCustomer" component={AddNewCustomer} />
          <Route path="/editCustomer" component={EditCustomer} />
          <Route path="/viewCustomer" component={ViewCustomer} />
          <Route path="/listMeetingRoom" component={ListMeetingRoom} />
          <Route path="/log-in" component={LogInPage} />
          <Route path="/addMeetingImage" component={AddMeetingImage} />
          <Route path="/addMultipleMeeting" component={AddMultipleMeeting} />
          <Route path="/viewMeeting" component={ViewMeeting} />
          <Route path="/editMeeting" component={EditMeeting} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/communication" component={Communication} />
          <Route path="/chat" component={Chat} />
          <Route path="/listStyle" component={ListStyle} />
          <Route path="/addNewStyle" component={AddNewStyle} />
          <Route path="/createIB" component={CreateIB} />
          <Route path="/smv_ov_list" component={Smv_Ov_List} />
          <Route path="/addNewSmv_Ob" component={AddNewSmv_Ob} />
          <Route path="/listThreadConsumption" component={ListThreadConsumption} />
          <Route path="/addThreadConsumption" component={AddThreadConsumption} />
          <Route path="/technicalIssues" component={TechnicalIssues} />
          <Route path="/listSample" component={ListSample} />
          <Route path="/addNewSample" component={AddNewSample} />
          <Route path="/listCost" component={CostList} />
          <Route path="/viewCost" component={ViewCost} />
          <Route path="/editCost" component={EditCost} />
          <Route path="/listPermissions" component={ListPermissions} />
          <Route path="/addPermission" component={AddPermission} />
          <Route path="/viewPermission" component={ViewPermission} />

          
          
          
          
        </div>
      </Router>
    );
  }
}

export default Routes;