import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './sign-in/sign-in';

const Auth = props => {

    return (
        <Switch>
            <Route path='/auth/sign-in' render={() => <SignIn />} />
            <Redirect to='/auth/sign-in' />
        </Switch>
    );

}

export default Auth;