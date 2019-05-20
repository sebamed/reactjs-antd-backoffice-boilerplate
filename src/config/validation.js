import React from 'react';
import { FormattedMessage } from "react-intl";

export class ValidationConfig {
    static Entity = {
        CREATE: {
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
            selectUser: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                }
            ],
            selectLetter: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                }
            ],
            description: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                }
            ]
        }
    }

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
                },
                {
                    min: 8,
                    message: <FormattedMessage id='validation.password' />
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
        },
        RESET_PASSWORD: {
            password: [
                {
                    required: true,
                    message: <FormattedMessage id='validation.required' />
                },
                {
                    min: 8,
                    message: <FormattedMessage id='validation.password' />
                }
            ]
        }
    }
}