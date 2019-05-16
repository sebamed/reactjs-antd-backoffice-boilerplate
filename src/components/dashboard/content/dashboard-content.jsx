import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Entity from './entity/entity';

const DashboardContent = props => {

    return (
        <div id='dashboard-content'>
            <Switch>
                <Route path='/dashboard/entity' render={() => <Entity />} />
            </Switch>
        </div>
    )

}

export default DashboardContent;