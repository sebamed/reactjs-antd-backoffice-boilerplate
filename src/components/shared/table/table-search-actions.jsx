import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import Search from 'antd/lib/input/Search';
import { injectIntl } from 'react-intl';
import uuid from 'uuid'
import PageTitleActions from '../title/page-title-actions';
import { doSearch } from '../../../utils/helper/table-helper';

class TableSearchActions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            searchQuery: ''
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        });
    }

    handleSearch(value) {
        this.setState({
            searchQuery: value
        });
    }

    render() {
        const { columns, actions, bordered, search = false, intl } = this.props;
        const { data, searchQuery } = this.state;

        return (
            <div>
                <div className="table-actions">
                    {search ? <div className="search">
                        <Search placeholder={intl.formatMessage({ id: 'form.input.placeholder.search-table' })} onSearch={value => this.handleSearch(value)} enterButton />
                    </div> : null}
                    <PageTitleActions key='page_title_extra_1' actions={actions} />
                    <div className='clear-fix'></div>
                </div>
                <Table
                    columns={columns}
                    dataSource={data === undefined ? [] : data.filter(record => doSearch(searchQuery, record, columns))}
                    bordered={bordered}
                    loading={data === undefined}
                    rowKey={record => uuid.v4()}
                />
            </div>)
    }

}

TableSearchActions.propTypes = {
    columns: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired,
}

export default injectIntl(TableSearchActions);