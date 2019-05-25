import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../../../assets/images/logo.svg';

const DashboardSiderLogo = props => {
    return (
        <div className='logo' id="logo">
            <img src={logo} alt="logo" />
            <h1><FormattedMessage id='app.title' /></h1>
        </div>
    )
}

export default DashboardSiderLogo;