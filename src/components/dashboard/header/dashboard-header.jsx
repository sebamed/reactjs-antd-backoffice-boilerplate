import React from 'react';
import { Layout } from 'antd';
import DashboardHeaderNavBar from './dashboard-header-nav-bar';

const { Header } = Layout;

const DashboardHeader = props => {
    return (
        <Header id='dashboard-header'>
            <DashboardHeaderNavBar />
        </Header>
    )
}

export default DashboardHeader;