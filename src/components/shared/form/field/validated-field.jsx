import React from 'react';
import { Form } from 'antd';

const ValidatedField = props => {

    const { name, label, rules, Component, form, hasFeedback, value } = props;
    const { getFieldDecorator } = form;

    return (
        <Form.Item className={rules.length > 0 ? 'required-form-item' : ''} hasFeedback={hasFeedback ? true : false} label={label ? label : ''}>
            {getFieldDecorator(name, {
                rules: rules,
                initialValue: value
            })(Component)}
        </Form.Item>
    )
}

export default ValidatedField;