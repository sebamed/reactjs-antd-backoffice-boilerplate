import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import EntityList from './list/entity-list';
import PageTitle from '../../../shared/title/page-title';
import { ROUTE_DASHBOARD_ENTITY_LIST } from '../../../../utils/consts/routing';
import { Card } from 'antd';
import { HeaderActions } from '../../../../config/header-actions';

const Entity = props => {

    const handleCreateNew = () => {
        console.log('create new');
    }

    return (
        <div>
            <PageTitle
                title={<FormattedMessage id='page-title.entity.title' />}
                subtitle={<FormattedMessage id='page-title.entity.subtitle' />}
                actions={[
                    HeaderActions.ENTITY.createNew(() => handleCreateNew())
                ]} />
            <div className='card-container'>
                <Card className='card-content'>
                    <Switch>
                        <Route path={ROUTE_DASHBOARD_ENTITY_LIST} render={() => <EntityList />} />
                        <Redirect to={ROUTE_DASHBOARD_ENTITY_LIST} />
                    </Switch>
                </Card>
            </div>
        </div>
    )

}

export default Entity;