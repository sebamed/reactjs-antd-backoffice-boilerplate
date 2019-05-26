import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ROUTE_DASHBOARD_ENTITY_LIST, ROUTE_EXCEPTION_404, ROUTE_EXCEPTION_403, ROUTE_EXCEPTION_500, ROUTE_DASHBOARD, ROUTE_DASHBOARD_ENTITY, ROUTE_DASHBOARD_ENTITY_CREATE_NEW, ROUTE_DASHBOARD_ENTITY_EDIT } from "../../utils/consts/routing";

export const SIDEBAR_MENU = [
    {
        id: 'dashboard',
        icon: 'dashboard',
        text: <FormattedMessage id='menu.sidebar.dashboard' />,
        url: ROUTE_DASHBOARD,
        activeUrls: [ROUTE_DASHBOARD]
    },
    {
        id: 'entity',
        icon: 'radar-chart',
        text: <FormattedMessage id='menu.sidebar.entity' />,
        url: ROUTE_DASHBOARD_ENTITY_LIST,
        activeUrls: [ROUTE_DASHBOARD_ENTITY, ROUTE_DASHBOARD_ENTITY_LIST, ROUTE_DASHBOARD_ENTITY_CREATE_NEW, ROUTE_DASHBOARD_ENTITY_EDIT]     
    },
    {
        id: 'exceptions',
        icon: 'warning',
        text: <FormattedMessage id='menu.sidebar.exceptions' />,
        children: [
            {
                id: 'excentpions-404',
                text: <FormattedMessage id='menu.sidebar.exceptions-404' />,
                url: ROUTE_EXCEPTION_404,                
            },
            {
                id: 'excentpions-403',
                text: <FormattedMessage id='menu.sidebar.exceptions-403' />,
                url: ROUTE_EXCEPTION_403,                
            },
            {
                id: 'excentpions-500',
                text: <FormattedMessage id='menu.sidebar.exceptions-500' />,
                url: ROUTE_EXCEPTION_500,                
            }
        ]
    }
]