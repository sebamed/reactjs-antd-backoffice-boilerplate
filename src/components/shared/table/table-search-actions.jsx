import React from 'react';
import PropTypes from 'prop-types';
import PageTitleActions from '../title/page-title-actions';
import { Table } from 'antd';

const TableSearchActions = props => {

    const { columns, actions, data, bordered } = props;

    return (
        <div>
            <div className="table-actions">
                
                <PageTitleActions key='page_title_extra_1' actions={actions} />
                <div className='clear-fix'></div>
            </div>
            <Table
                columns={columns}
                dataSource={data === undefined ? [] : data}
                bordered={bordered}
                loading={data === undefined}
                rowKey={record => record.login.uuid}
            />
        </div>)

}

TableSearchActions.propTypes = {
    columns: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired,
}

export default TableSearchActions;