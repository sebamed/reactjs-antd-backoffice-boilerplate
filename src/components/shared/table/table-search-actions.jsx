import React from 'react';
import PropTypes from 'prop-types';
import PageTitleActions from '../title/page-title-actions';
import { Table } from 'antd';

class TableSearchActions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        }, ()=> console.log(this.state))
    }

    render() {
        const { columns, actions, bordered, search = false } = this.props;
        const { data } = this.state;

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

}

TableSearchActions.propTypes = {
    columns: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired,
}

export default TableSearchActions;