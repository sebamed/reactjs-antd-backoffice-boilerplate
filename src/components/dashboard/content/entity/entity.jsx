import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EntityList from './list/entity-list';
import PageTitle from '../../../shared/title/page-title';
import { ROUTE_DASHBOARD_ENTITY_LIST } from '../../../../utils/consts/routing';
import { Card } from 'antd';

const Entity = props => {

    return (
        <div>
            <PageTitle title='Entity' subtitle='subtitle goes here' />
            <div className='card-container'>
                <Card className='card-content'>
                    <Switch>
                        <Route path={ROUTE_DASHBOARD_ENTITY_LIST} render={() => <EntityList />} />
                    </Switch>
                </Card>
            </div>
        </div>
    )

}

export default Entity;