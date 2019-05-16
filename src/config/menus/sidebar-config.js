import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ROUTE_DASHBOARD } from "../../utils/consts/routing";

export const SIDEBAR_MENU = [
    {
        id: 'entity',
        icon: 'radar-chart',
        text: <FormattedMessage id='menu.sidebar.entity' />,
        url: ROUTE_DASHBOARD
    },
    {
        id: 'exceptions',
        icon: 'warning',
        text: <FormattedMessage id='menu.sidebar.exceptions' />,
        children: [
            {
                id: 'excentpions-404',
                text: <FormattedMessage id='menu.sidebar.exceptions-404' />,
                url: ROUTE_DASHBOARD
            }
        ]
    }
]