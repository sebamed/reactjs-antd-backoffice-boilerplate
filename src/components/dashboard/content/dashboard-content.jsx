import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTE_DASHBOARD_ENTITY, ROUTE_EXCEPTION_PLACEHOLDER } from '../../../utils/consts/routing';
import Entity from './entity/entity';
import Exception from '../exception/exception';

const DashboardContent = props => {

    return (
        <div id='dashboard-content'>
            <Switch>
                <Route path={ROUTE_DASHBOARD_ENTITY} render={() => <Entity />} />
                <Route path={ROUTE_EXCEPTION_PLACEHOLDER} render={() => <Exception />} />
            </Switch>
        </div>
    )

}

export default DashboardContent;