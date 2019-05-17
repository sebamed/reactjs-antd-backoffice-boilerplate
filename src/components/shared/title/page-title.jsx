import React from 'react';
import { PageHeader } from 'antd';
import history from '../../../config/history';
import PageTitleActions from './page-title-actions';


const PageTitle = props => {
    const { title = '', subtitle = '', actions = [] } = props;

    return (
        <PageHeader
            className='page-title'
            onBack={() => history.goBack()}
            title={title} subTitle={subtitle}
            extra={[
                <PageTitleActions key='page_title_extra_1' actions={actions} />
            ]} />
    )
}

export default PageTitle;