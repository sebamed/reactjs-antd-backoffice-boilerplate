import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Input, Icon, Divider, Typography, message } from 'antd';

import AuthTitle from '../auth-title';
import { checkForm } from '../.././../utils/helper/form-helper';
import ValidatedField from '../../shared/form/field/validated-field';
import { ValidationConfig } from '../../../config/validation';
import FormButton from '../../shared/form/button/form-button';
import http from '../../../config/http';
import { API_AUTH_SIGN_IN } from '../../../utils/consts/api';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    handleSubmit = values => {
        const { email, password } = values;

        this.toggleLoading(true);

        http
            .post(`${API_AUTH_SIGN_IN}`, { email, password })
            .then(response => {
                message.success(<FormattedMessage id='message.sign-in-success' />)
            })
            .catch(error => {
                message.error(<FormattedMessage id='message.sign-in-error' />)
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
                <AuthTitle title={<FormattedMessage id='title.sign-in' />} subtitle={<FormattedMessage id='subtitle.sign-in' />} />
                <Form onSubmit={(e) => checkForm(e, this.props.form, this.handleSubmit)}>
                    <ValidatedField
                        name='email'
                        hasFeedback
                        rules={ValidationConfig.Auth.SIGN_IN.email}
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
                    <ValidatedField
                        name='password'
                        rules={ValidationConfig.Auth.SIGN_IN.password}
                        form={this.props.form}
                        Component={(
                            <Input.Password
                                password='true'
                                id='password'
                                type='password'
                                size='large'
                                name='password'
                                placeholder={intl.formatMessage({ id: "form.input.placeholder.password" })}
                                className="input-text with-border"
                                autoComplete='password'
                                addonBefore={
                                    <Icon type="lock" />
                                }
                            />
                        )}
                    />
                    <FormButton
                        loading={this.state.loading}
                        text={<FormattedMessage id='button.sign-in' />}
                        fullWidth
                        type='submit'
                    />

                </Form>
                <Divider><span className='divide-text'><FormattedMessage id='label.divide-sign-in' /></span></Divider>
                <div className="options">
                    <Text type="secondary"><FormattedMessage id='label.forgot-password-sign-in' /></Text>
                    <Text type="secondary"><FormattedMessage id='label.create-sign-in' /></Text>
                </div>
            </div>
        )
    }
}

export default injectIntl(Form.create({ name: 'sign-in ' })(SignIn));