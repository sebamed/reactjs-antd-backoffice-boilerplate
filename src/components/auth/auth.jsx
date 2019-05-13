import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import { Card } from 'antd';
import ForgotPassword from './forgot-password/forgot-password';
import { ROUTE_AUTH_FORGOT_PASSWORD, ROUTE_AUTH_SIGN_IN } from '../../utils/consts/routing';

const Auth = props => {

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

export default Auth;