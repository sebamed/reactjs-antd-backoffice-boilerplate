import React from 'react';
import { Form, Button } from 'antd';

const FormButton = props => {
    const { disabled, loading, type, fullWidth, text, onClick } = props;

    return (
        <Form.Item>
            <Button
                disabled={disabled ? true : false}
                loading={loading}
                className={`button ${fullWidth ? 'full-width' : ''}`}              type="primary"
                htmlType={type}
                onClick={onClick}
            >
                {text}
            </Button>
        </Form.Item>
    );
}

export default FormButton;