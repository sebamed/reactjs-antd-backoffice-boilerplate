import React from 'react';
import { Tag } from "antd";
import { FormattedMessage } from 'react-intl';
import { doOnFilter, doSort } from "../utils/helper/table-helper";
import TableEditDeleteRestoreActions from '../components/shared/table/columns/edit-delete-restore';

export class TableConfig {
    static ENTITY = (handleEdit, handleDelete, handleRestore) => {
        return [
            {
                title: <FormattedMessage id='table.column.entity.name' />,
                dataIndex: 'name.first',
                key: 'name',
                sorter: (a, b) => doSort(a.name.title, b.name.title),
            },
            {
                title: <FormattedMessage id='table.column.entity.surname' />,
                dataIndex: 'name.last',
                key: 'surname'
            },
            {
                title: <FormattedMessage id='table.column.entity.email' />,
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: <FormattedMessage id='table.column.entity.city' />,
                dataIndex: 'location.city',
                key: 'city'
            },
            {
                title: <FormattedMessage id='table.column.entity.postcode' />,
                dataIndex: 'location.postcode',
                key: 'postcode'
            },
            {
                title: <FormattedMessage id='table.column.entity.street' />,
                dataIndex: 'location.street',
                key: 'street'
            },
            {
                title: <FormattedMessage id='table.column.entity.title' />,
                dataIndex: 'name.title',
                filters: [{ text: 'Male', value: 'mr' }, { text: 'Female', value: 'miss' }, , { text: 'Young Female', value: 'ms' }],
                onFilter: (value, record) => doOnFilter(record.name.title, value),
                sorter: (a, b) => doSort(a.name.title, b.name.title),
                key: 'title',
                render: (tag) => (
                    <Tag color='blue' key={tag}>
                        {tag}
                    </Tag>
                )
            },
            {
                title: 'Actions',
                key: 'actions',
                align: 'center',
                render: (text, record) =>
                    <TableEditDeleteRestoreActions
                        record={record}
                        condition={record.name.title}
                        equalsTo='mr'
                        recordInfo={record.name.first + ' ' + record.name.last}
                        handleEdit={() => handleEdit(record)}
                        handleDelete={() => handleDelete(record)}
                        handleRestore={() => handleRestore(record)}
                    />

            }
        ]
    }
}