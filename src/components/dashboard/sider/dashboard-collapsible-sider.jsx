import React from 'react';
import { Layout} from 'antd';
import DashboardSiderLogo from './dashboard-sider-logo';
import DashboardSiderMenu from './dashboard-sider-menu';

const { Sider } = Layout;

const DashboardCollapsibleSider = props => {
    const { isMobile, collapsed, onCollapse } = props;

    return (
        <Sider trigger={null} id='dashboard-sider' width={256} collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth={isMobile ? '0' : '80px'} breakpoint="md"
        >
            <DashboardSiderLogo isMobile={isMobile} />
            <DashboardSiderMenu className='sider-menu' />
        </Sider>
    )
};

export default DashboardCollapsibleSider;