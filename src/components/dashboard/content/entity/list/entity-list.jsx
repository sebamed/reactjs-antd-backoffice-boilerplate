import React from 'react';
import http from '../../../../../config/http';
import { Table, Tag } from 'antd';
import { doOnFilter, doSort } from '../../../../../utils/helper/table-helper';
import { TableConfig } from '../../../../../config/tables';
import PageTitleActions from '../../../../shared/title/page-title-actions';
import { HeaderActions } from '../../../../../config/header-actions';
import TableSearchActions from '../../../../shared/table/table-search-actions';
import history from '../../../../../config/history';
import { ROUTE_DASHBOARD_ENTITY_CREATE_NEW, ROUTE_DASHBOARD_ENTITY_EDIT } from '../../../../../utils/consts/routing';

class EntityList extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            entities: undefined,
            loading: true
        }
    }

    componentDidMount() {
        http
            .get('https://randomuser.me/api/?results=100')
            .then(response => {
                this.setState({ entities: response.data.results });
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    handleDelete(record) {
        console.log(record)
    }

    handleRestore(record) {
        console.log(record)
    }

    handleEdit(record) {
        console.log('edit')
        history.push(`${ROUTE_DASHBOARD_ENTITY_EDIT}/${record.login.uuid}`)
    }

    render() {
        return (
            <div>
                <TableSearchActions
                    columns={
                        TableConfig.ENTITY((record) => this.handleEdit(record), (record) => this.handleDelete(record), (record) => this.handleRestore(record))
                    }
                    actions={[
                        HeaderActions.ENTITY.createNew(() => { history.push(ROUTE_DASHBOARD_ENTITY_CREATE_NEW) })
                    ]}
                    data={this.state.entities}
                    bordered={true}
                    search={true}
                />
            </div>
        )
    }
}

export default EntityList;