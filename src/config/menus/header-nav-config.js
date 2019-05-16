import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ROUTE_DASHBOARD } from "../../utils/consts/routing";

export const HEADER_NAV = {
    USER: [
        {
            id: 'user-settings',
            icon: 'setting',
            text: <FormattedMessage id='menu.header.user.settings' />,
            url: ROUTE_DASHBOARD
        }
    ],
    LANGUAGE: [
        {
            id: 'lang-english',
            icon: '🇬🇧',
            text: <FormattedMessage id='menu.header.lang.english' />,
            locale: 'en'
        },
        {
            id: 'lang-serbian',
            icon: '🇷🇸',
            text: <FormattedMessage id='menu.header.lang.serbian' />,
            locale: 'rs'
        }
    ]
}