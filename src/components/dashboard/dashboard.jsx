import React from 'react';
import { Layout } from 'antd';
import DashboardSider from './sider/dashboard-sider';
import DashboardHeader from './header/dashboard-header';
import DashboardContent from './content/dashboard-content';
import history from '../../config/history';
import { ROUTE_AUTH_SIGN_IN } from '../../utils/consts/routing';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarCollapsed: false
        }
    }

    componentWillReceiveProps(props) {
        if(props.auth.token === undefined) {
            history.push(ROUTE_AUTH_SIGN_IN);
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