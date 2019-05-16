import React from 'react';
import { PageHeader } from 'antd';
import history from '../../../config/history';


const PageTitle = props => {
    const { title = '', subtitle = '' } = props;

    return (
        <PageHeader className='page-title' onBack={() => history.goBack()} title={title} subTitle={subtitle} />
    )
}

export default PageTitle;