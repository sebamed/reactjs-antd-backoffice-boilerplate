import React from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import history from '../../../../config/history';

const CancelButton = props => {
    return (
        <Button onClick={() => history.goBack()} type='danger' htmlType='button' className='button full-width'>
            <FormattedMessage id='button.cancel' />
        </Button>
    )
}

export default CancelButton;