import React from 'react';
import { FormattedMessage } from 'react-intl';

export class HeaderActions {

    static ENTITY = {
        createNew: (handleOnClick) => {
            return {
                id: 'entity-create-new-action',
                icon: 'plus',
                text: '',
                type: 'primary',
                class: 'action-btn',
                tooltip: <FormattedMessage id='header-actions.entity.create-new.tooltip' />,
                onClick: handleOnClick
            }
        }
    }

}