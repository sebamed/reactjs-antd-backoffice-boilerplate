import React from 'react';
import { Layout } from 'antd';
import DashboardSider from './sider/dashboard-sider';

const Dashboard = props => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <DashboardSider />
        </Layout>
    )
}

export default Dashboard;