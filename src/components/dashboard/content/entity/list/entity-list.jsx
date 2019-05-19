import React from 'react';
import http from '../../../../../config/http';
import { Table, Tag } from 'antd';
import { doOnFilter, doSort } from '../../../../../utils/helper/table-helper';
import { TableConfig } from '../../../../../config/tables';
import PageTitleActions from '../../../../shared/title/page-title-actions';
import { HeaderActions } from '../../../../../config/header-actions';

class EntityList extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            entities: [],
            loading: true
        }
    }

    componentDidMount() {
        http
            .get('https://randomuser.me/api/?results=100')
            .then(response => {
                this.setState({ entities: response.data.results });
                console.log(response.data.results)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    handleDelete(record) {
        console.log(record)
    }



    render() {

        return (
            <div>
                <div className="table-actions">
                    <PageTitleActions key='page_title_extra_1' actions={[
                        HeaderActions.ENTITY.createNew(() => { console.log('kliks') })

                    ]} />
                    <div className='clear-fix'></div>
                </div>
                <Table
                    columns={TableConfig.ENTITY((record) => this.handleDelete(record), (record) => this.handleDelete(record), (record) => this.handleDelete(record))}
                    dataSource={this.state.entities}
                    bordered
                    loading={this.state.loading}
                    rowKey={record => record.login.uuid}
                />
            </div>
        )
    }
}

export default EntityList;