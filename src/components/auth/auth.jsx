import React from 'react';
import { injectIntl } from 'react-intl';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import { Card, message } from 'antd';
import ForgotPassword from './forgot-password/forgot-password';
import { ROUTE_AUTH_FORGOT_PASSWORD, ROUTE_AUTH_SIGN_IN, ROUTE_AUTH_RESET_PASSWORD, ROUTE_DASHBOARD, ROUTE_AUTH } from '../../utils/consts/routing';
import ResetPassword from './reset-password/reset-password';
import history from '../../config/history';
import { getSignIn } from '../../utils/helper/local-storage';

class Auth extends React.Component {

    componentDidMount() {
        const data = getSignIn();
        if(data !== false) {
            const { intl } = this.props;
            history.push(ROUTE_DASHBOARD);
            message.info(intl.formatMessage({id: 'message.already-signed-in'}));
        }
    }

    render() {

        return (
            <div id="auth-container">
                <div className="overlay"></div>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6" style={{ height: '100vh' }}>
                            <Card className='card'>
                                <Switch>
                                    <Route path={ROUTE_AUTH_RESET_PASSWORD} render={() => <ResetPassword />} />
                                    <Route path={ROUTE_AUTH_FORGOT_PASSWORD} render={() => <ForgotPassword />} />
                                    <Route path={ROUTE_AUTH_SIGN_IN} render={() => <SignIn />} />
                                    <Redirect to={ROUTE_AUTH_SIGN_IN} />
                                </Switch>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(withRouter(Auth));