import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Card } from 'antd';

import EntityList from './list/entity-list';
import PageTitle from '../../../shared/title/page-title';
import { ROUTE_DASHBOARD_ENTITY_LIST, ROUTE_DASHBOARD_ENTITY_CREATE_NEW, ROUTE_DASHBOARD_ENTITY_EDIT_PLACEHOLDER } from '../../../../utils/consts/routing';
import { HeaderActions } from '../../../../config/header-actions';
import EntityCreateNew from './create/entity-create-new';
import history from '../../../../config/history';
import EntityEdit from './edit/entity-edit';

const Entity = props => {

    const handleCreateNew = () => {
        history.push(ROUTE_DASHBOARD_ENTITY_CREATE_NEW)
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
                        <Route path={ROUTE_DASHBOARD_ENTITY_EDIT_PLACEHOLDER} render={() => <EntityEdit />} />
                        <Route path={ROUTE_DASHBOARD_ENTITY_CREATE_NEW} render={() => <EntityCreateNew />} />
                        <Route path={ROUTE_DASHBOARD_ENTITY_LIST} render={() => <EntityList />} />
                        <Redirect to={ROUTE_DASHBOARD_ENTITY_LIST} />
                    </Switch>
                </Card>
            </div>
        </div>
    )

}

export default Entity;