import React from 'react';
import { Layout } from 'antd';
import DashboardSider from './sider/dashboard-sider';
import DashboardHeader from './header/dashboard-header';

const Dashboard = props => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <DashboardSider />
            <Layout>
                <DashboardHeader />
            </Layout>
        </Layout>
    )
}

export default Dashboard;