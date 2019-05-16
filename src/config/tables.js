import React from 'react';
import { Tag, Button, Tooltip } from "antd";
import { doOnFilter, doSort } from "../utils/helper/table-helper";
import ButtonGroup from 'antd/lib/button/button-group';
import TableEditDeleteRestoreActions from '../components/shared/table/columns/edit-delete-restore';

export class TableConfig {
    static ENTITY = (handleEdit, handleDelete, handleRestore) => {
        return [
            {
                title: 'Name',
                dataIndex: 'name.first',
                key: 'name',
                sorter: (a, b) => doSort(a.name.title, b.name.title),
            },
            {
                title: 'Surname',
                dataIndex: 'name.last',
                key: 'surname'
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: 'City',
                dataIndex: 'location.city',
                key: 'city'
            },
            {
                title: 'Post code',
                dataIndex: 'location.postcode',
                key: 'postcode'
            },
            {
                title: 'Street',
                dataIndex: 'location.street',
                key: 'street'
            },
            {
                title: 'Title',
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