import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Input, Icon, Divider, Typography, message } from 'antd';
import queryString from 'querystring';
import { withRouter } from 'react-router-dom';

import AuthTitle from '../auth-title';
import { checkForm } from '../.././../utils/helper/form-helper';
import ValidatedField from '../../shared/form/field/validated-field';
import { ValidationConfig } from '../../../config/validation';
import FormButton from '../../shared/form/button/form-button';
import http from '../../../config/http';
import { API_AUTH_FORGOT_PASSWORD } from '../../../utils/consts/api';
import history from '../../../config/history';
import { ROUTE_AUTH_SIGN_IN } from '../../../utils/consts/routing';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            email: '',
            token: ''
        }
    }

    componentDidMount() {
        if (this.props.location.search != '') {
            let values = queryString.parse(this.props.location.search);
            for (const key in values) {
                if (key.startsWith('?')) {
                    values[key.slice(1)] = values[key];
                    delete values[key];
                    break;
                }
            }

            if (values.email && values.token) {
                this.setState({
                    email: values.email,
                    token: values.token
                })
            } else {
                this.goBackWithError();
            }
        } else {
            this.goBackWithError();
        }
    }

    goBackWithError() {
        const { intl } = this.props;

        message.error(intl.formatMessage({ id: "message.reset-password-form-error" }))
        history.push(ROUTE_AUTH_SIGN_IN);
    }

    handleSubmit = values => {
        const { password } = values;
        const { intl } = this.props;
        const { email, token } = this.state;

        this.toggleLoading(true);

        http
            .post(`${API_AUTH_FORGOT_PASSWORD}?email=${email}&token=${token}`, { password })
            .then(response => {
                message.success(intl.formatMessage({ id: "message.reset-password-success" }))
            })
            .catch(error => {
                message.error(intl.formatMessage({ id: "message.reset-password-error" }))
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
                <AuthTitle title={<FormattedMessage id='title.reset-password' />} subtitle={<FormattedMessage id='subtitle.reset-password' />} />
                <Form onSubmit={(e) => checkForm(e, this.props.form, this.handleSubmit)}>
                    <ValidatedField
                        name='password'
                        hasFeedback
                        rules={ValidationConfig.Auth.RESET_PASSWORD.password}
                        form={this.props.form}
                        Component={(
                            <Input
                                id='password'
                                type='password'
                                name='password'
                                size='large'
                                placeholder={intl.formatMessage({ id: "form.input.placeholder.new-password" })}
                                autoComplete='password'
                                addonBefore={
                                    <Icon type="lock" />
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
                    <Text onClick={() => history.push(ROUTE_AUTH_SIGN_IN)} type="secondary"><FormattedMessage id='label.back-to-sign-in' /></Text>
                </div>
            </div>
        )
    }
}

export default withRouter(injectIntl(Form.create({ name: 'sign-in ' })(ResetPassword)));