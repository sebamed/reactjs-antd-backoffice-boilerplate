import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import { Card } from 'antd';

const Auth = props => {

    return (
        <div id="auth-container">
            <div className="overlay"></div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6" style={{height: '100vh'}}>
                        <Card className='card'>
                            <Switch>
                                <Route path='/auth/sign-in' render={() => <SignIn />} />
                                <Redirect to='/auth/sign-in' />
                            </Switch>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Auth;