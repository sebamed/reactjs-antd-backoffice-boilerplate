import React from 'react';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import UsersContainer from './users/users-container';
import Home from './home/home';
import '../style/_base.scss'
import Auth from './auth/auth';
import '../config/messages';
import { ROUTE_AUTH, ROUTE_DASHBOARD } from '../utils/consts/routing';
import Dashboard from './dashboard/dashboard';

const App = props => {

    return (
        <div>
            <Switch>
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/home" render={() => <Home />} />
                <Route path={ROUTE_AUTH} render={() => <Auth />} />
                <Route path={ROUTE_DASHBOARD} render={() => <Dashboard />} />
                <Route path="/home" render={() => <Home />} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );

}

export default withRouter(App);