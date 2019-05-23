import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import UsersContainer from './users/users-container';
import Home from './home/home';
import '../style/_base.scss'
import Auth from './auth/auth';
import '../config/messages';
import { ROUTE_AUTH, ROUTE_DASHBOARD, ROUTE_AUTH_SIGN_IN } from '../utils/consts/routing';
import Dashboard from './dashboard/dashboard';
import { getSignIn } from '../utils/helper/local-storage';
import store from '../store/store';
import * as actions from '../store/actions';
import history from '../config/history';
import { message } from 'antd';
import { injectIntl } from 'react-intl';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = getSignIn();

        if (data !== false) {
            store.dispatch(actions.signIn(data.user, data.token));
        } else {
            this.redirectToAuth();
        }
    }

    redirectToAuth() {
        const { intl } = this.props;
        history.push(ROUTE_AUTH_SIGN_IN);
        if(!this.props.location.pathname.includes(ROUTE_AUTH)) {
            message.error(intl.formatMessage({ id: "message.auth-error" }));
        }
    }

    render() {
        const { auth } = this.props;

        return (
            <div>
                <Switch>
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/home" render={() => <Home />} />
                    <Route path={ROUTE_AUTH} render={() => <Auth auth={auth} />} />
                    <Route path={ROUTE_DASHBOARD} render={() => <Dashboard auth={auth} />} />
                    <Route path="/home" render={() => <Home />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default injectIntl(withRouter(connect(mapStateToProps, null)(App)));