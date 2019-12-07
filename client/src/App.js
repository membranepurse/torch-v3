/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from 'views/Dashboard.jsx'

import Graph from 'components/graph/Graph';
import EditGraphs from 'components/profile-forms/EditGraphs';
import CreateGraphs from 'components/profile-forms/CreateGraphs';

import UserProfile from "views/UserProfile.jsx";

import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";

import EditProfile from 'components/profile-forms/EditProfile';
import CreateProfile from 'components/profile-forms/CreateProfile';
import Landing from 'components/layout/Landing';
import Register from 'components/auth/Register';
import Login from 'components/auth/Login';
import Alert from 'components/layout/Alert';

import { Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
      <Provider store={store}>
      <Router history={hist}>
        <Fragment>
        <Route exact path="/" component={Landing} />
          <Alert/>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Route exact path="/admin/dashboard"  component={Dashboard} />

            <Route path="/user-profile"  component={UserProfile} />
            <Route path="/edit-profile" component={EditProfile} />

            <Route exact path="/graph/:id" component={Graph} />

            <Route path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-graphs" component={EditGraphs} />
            <PrivateRoute exact path="/create-graphs" component={CreateGraphs} />

          </Switch>
        </Fragment>
      </Router>
      </Provider>
  );
}

export default App;
