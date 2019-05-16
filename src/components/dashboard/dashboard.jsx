import React from 'react';
import { Layout } from 'antd';
import DashboardSider from './sider/dashboard-sider';
import DashboardHeader from './header/dashboard-header';
import DashboardContent from './content/dashboard-content';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarCollapsed: false
        }
    }

    handleToggleSidebar(toggle) {
        this.setState({
            sidebarCollapsed: toggle
        });
    }

    render() {

        const { sidebarCollapsed } = this.state;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <DashboardSider sidebarCollapsed={sidebarCollapsed} toggleSidebarOpen={(e) => this.handleToggleSidebar(e)} />
                <Layout>
                    <DashboardHeader sidebarCollapsed={sidebarCollapsed} toggleSidebarOpen={(e) => this.handleToggleSidebar(e)} />
                    <Layout.Content>
                        <DashboardContent />
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default Dashboard;