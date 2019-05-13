import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Input, Icon, Divider, Typography, message } from 'antd';

import AuthTitle from '../auth-title';
import { checkForm } from '../.././../utils/helper/form-helper';
import ValidatedField from '../../shared/form/field/validated-field';
import { ValidationConfig } from '../../../config/validation';
import FormButton from '../../shared/form/button/form-button';
import http from '../../../config/http';
import {  API_AUTH_FORGOT_PASSWORD } from '../../../utils/consts/api';
import history from '../../../config/history';
import { ROUTE_AUTH_SIGN_IN } from '../../../utils/consts/routing';

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    handleSubmit = values => {
        const { email, password } = values;
        const { intl } = this.props;

        this.toggleLoading(true);

        http
            .post(`${API_AUTH_FORGOT_PASSWORD}`, { email, password })
            .then(response => {
                message.success(intl.formatMessage({ id: "message.forgot-password-success" }))
            })
            .catch(error => {
                message.error(intl.formatMessage({ id: "message.forgot-password-error" }))
            })
            .finally(() => {
                this.toggleLoading(false);
            })
    }

    toggleLoading = value => {
        this.setState({ loading: value });
    }

    render() {
        const { intl } = this.props;

        const { Text } = Typography;

        return (
            <div>
                <AuthTitle title={<FormattedMessage id='title.forgot-password' />} subtitle={<FormattedMessage id='subtitle.forgot-password' />} />
                <Form onSubmit={(e) => checkForm(e, this.props.form, this.handleSubmit)}>
                    <ValidatedField
                        name='email'
                        hasFeedback
                        rules={ValidationConfig.Auth.FORGOT_PASSWORD.email}
                        form={this.props.form}
                        Component={(
                            <Input
                                id='email'
                                type='email'
                                name='email'
                                size='large'
                                placeholder={intl.formatMessage({ id: "form.input.placeholder.email" })}
                                autoComplete='email'
                                addonBefore={
                                    <Icon type="mail" />
                                }
                            />
                        )}
                    />
                    <FormButton
                        loading={this.state.loading}
                        text={<FormattedMessage id='button.forgot-password' />}
                        fullWidth
                        type='submit'
                    />

                </Form>
                <Divider><span className='divide-text'><FormattedMessage id='label.divide-forgot-password' /></span></Divider>
                <div className="options">
                    <Text onClick={() => history.push(ROUTE_AUTH_SIGN_IN)}type="secondary"><FormattedMessage id='label.back-to-sign-in' /></Text>
                </div>
            </div>
        )
    }
}

export default injectIntl(Form.create({ name: 'sign-in ' })(ForgotPassword));