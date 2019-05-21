import React from 'react';
import { Form, Input, Icon, Select, Radio, Checkbox, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import { checkForm } from '../../../../../utils/helper/form-helper';
import ValidatedField from '../../../../shared/form/field/validated-field';
import { ValidationConfig } from '../../../../../config/validation';
import FormTitle from '../../../../shared/form/title/form-title';
import FormButton from '../../../../shared/form/button/form-button';
import http from '../../../../../config/http';
import RadioGroup from 'antd/lib/radio/group';
import TextArea from 'antd/lib/input/TextArea';
import CancelButton from '../../../../shared/form/button/back-button';
import history from '../../../../../config/history';
import { ROUTE_DASHBOARD_ENTITY_LIST } from '../../../../../utils/consts/routing';

class EntityEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        http
            .get('https://randomuser.me/api/')
            .then(response => {
                this.setState({user: response.data.results[0]})
            })
            .catch(error => {
                if(error.response.data.status === 404) {
                    // throw 404 page
                }
            })
    }

    handleSubmit = values => {
        const body = {
            email: values.email,
            description: values.description,
            agreement: values.agreement
        }

        http
            .put('http://', body)
            .then(response => {
                history.push(ROUTE_DASHBOARD_ENTITY_LIST)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { intl } = this.props;
        const { user } = this.state;

        return (
            <div>
                <Form onSubmit={(e) => checkForm(e, this.props.form, this.handleSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <FormTitle title='Edit entity' />
                            <ValidatedField
                                name='email'
                                hasFeedback
                                value={user.email}
                                rules={ValidationConfig.Entity.CREATE.email}
                                form={this.props.form}
                                Component={(
                                    <Input
                                        id='email'
                                        type='email'
                                        name='email'
                                        placeholder={intl.formatMessage({ id: "form.input.placeholder.email" })}
                                        autoComplete='email'
                                        addonBefore={
                                            <Icon type="mail" />
                                        }
                                    />
                                )}
                            />                            
                            <ValidatedField
                                name='description'
                                hasFeedback
                                rules={ValidationConfig.Entity.CREATE.description}
                                form={this.props.form}
                                Component={(
                                    <TextArea placeholder={intl.formatMessage({ id: "form.input.placeholder.email" })} maxLength={100} rows={4} />
                                )}
                            />
                            <ValidatedField
                                name='agreement'
                                rules={[]}
                                form={this.props.form}
                                value={false}
                                Component={(
                                    <Checkbox className='full-width'>
                                        I have read the agreement
                                    </Checkbox>
                                )}
                            />
                            <p className='form-info'><FormattedMessage id='label.form-required' /></p>
                            <FormButton
                                loading={this.state.loading}
                                text={<FormattedMessage id='button.sign-in' />}
                                fullWidth
                                type='submit'
                            />
                            <CancelButton />
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default withRouter(injectIntl(Form.create({ name: 'create-entity' })(EntityEdit)));