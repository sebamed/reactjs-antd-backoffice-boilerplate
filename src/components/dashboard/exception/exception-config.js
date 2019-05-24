import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import history from '../../../config/history';
import { ROUTE_DASHBOARD } from '../../../utils/consts/routing';

export const ExceptionConfig = {
    '404': {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
        status: '404',
        description: <FormattedMessage id='exception.404.description' />,
        button: <Button type='primary' onClick={() => history.push(ROUTE_DASHBOARD)}><FormattedMessage id='exception.404.button' /></Button>
    },
    '403': {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
        status: '403',
        description: <FormattedMessage id='exception.403.description' />,
        button: <Button type='primary' onClick={() => history.push(ROUTE_DASHBOARD)}><FormattedMessage id='exception.403.button' /></Button>

    },
    '500': {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
        status: '500',
        description: <FormattedMessage id='exception.500.description' />,
        button: <Button type='primary' onClick={() => history.push(ROUTE_DASHBOARD)}><FormattedMessage id='exception.500.button' /></Button>
    }
}