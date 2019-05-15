import React from 'react';
import { Layout } from 'antd';
import DashboardHeaderNavBar from './dashboard-header-nav-bar';

const { Header } = Layout;

const DashboardHeader = props => {
    const { sidebarCollapsed, toggleSidebarOpen } = props;
    console.log(props)

    return (
        <Header id='dashboard-header'>
            <DashboardHeaderNavBar {...props} />
        </Header>
    )
}

export default DashboardHeader;