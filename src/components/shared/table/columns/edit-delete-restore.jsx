import React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';
import { FormattedMessage } from 'react-intl';
import { Button, Popconfirm } from 'antd';

const TableEditDeleteRestoreActions = props => {

    const { record, condition, equalsTo, recordInfo, handleDelete, handleEdit, handleRestore } = props;

    return (
        <ButtonGroup>
            {condition.toString() == equalsTo ?
                <React.Fragment>
                    <Button type="primary" icon="edit" />
                    <Popconfirm placement='topLeft' okText={<FormattedMessage id='popconfirm.button.ok' />} cancelText={<FormattedMessage id='popconfirm.button.cancel' />} title={<FormattedMessage id='popconfirm.entity.delete' />} onConfirm={handleEdit}>
                        <Button onClick={handleDelete} type="danger" icon="delete" />
                    </Popconfirm>
                </React.Fragment>
                :
                <Popconfirm placement='topLeft' okText={<FormattedMessage id='popconfirm.button.ok' />} cancelText={<FormattedMessage id='popconfirm.button.cancel' />} title={<FormattedMessage id='popconfirm.entity.delete' />} onConfirm={handleRestore}>
                    <Button type="ghost" icon="undo" />
                </Popconfirm>
            }

        </ButtonGroup>

    )

}

export default TableEditDeleteRestoreActions;