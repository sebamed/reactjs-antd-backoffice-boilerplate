import React from 'react';
import { Typography } from 'antd';

const AuthTitle = props => {

    const { title, subtitle = '' } = props;
    const { Title } = Typography;

    return (
        <div className='auth-title'>
            <Title level={1}>{title}</Title>
            <Title level={4}>{subtitle}</Title>
        </div>
    )

}

export default AuthTitle;