import React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button, Tooltip } from 'antd';

const PageTitleActions = props => {
    const { actions } = props;
    return (
        <ButtonGroup>
            {actions.map(action => {
                return (
                    <Tooltip key={action.id} title={action.tooltip} placement='bottomLeft'>
                        <Button className={action.class} type={action.type} onClick={() => action.onClick()} icon={action.icon}>{action.text}</Button>
                    </Tooltip>
                )
            })}
        </ButtonGroup>
    )
}

export default PageTitleActions;