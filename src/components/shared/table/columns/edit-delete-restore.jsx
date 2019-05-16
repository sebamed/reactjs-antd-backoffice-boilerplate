import React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';
import { Tooltip, Button, Popconfirm } from 'antd';

const TableEditDeleteRestoreActions = props => {

    const { record, condition, equalsTo, recordInfo, handleDelete, handleEdit, handleRestore } = props;

    return (
        <ButtonGroup>
            {condition.toString() == equalsTo ?
                <React.Fragment>
                    <Button type="primary" icon="edit" />
                    <Popconfirm okText='Yes' title="Are You sure You want to delete?" onConfirm={handleEdit}>
                        <Button onClick={handleDelete} type="primary" icon="delete" />
                    </Popconfirm>
                </React.Fragment>
                :
                <Popconfirm title="Are You sure You want to restore?" onConfirm={handleRestore}>
                    <Button type="primary" icon="undo" />
                </Popconfirm>
            }

        </ButtonGroup>

    )

}

export default TableEditDeleteRestoreActions;