import React from 'react';
import { FormattedMessage } from "react-intl";

export class ValidationConfig {
    static Auth = {
        SIGN_IN: {
            email: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                },
                {
                    type: 'email',
                    message: <FormattedMessage id='validation.email' />
                }
            ],
            password: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                }
            ]
        },
        FORGOT_PASSWORD: {
            email: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                },
                {
                    type: 'email',
                    message: <FormattedMessage id='validation.email' />
                }
            ]
        }
    }
}