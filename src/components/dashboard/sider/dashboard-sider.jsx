import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Media from 'react-media';
import DashboardCollapsibleSider from './dashboard-collapsible-sider';

const DashboardSider = props => {

    const { sidebarCollapsed, toggleSidebar } = props;

    return (
        <Media query="(max-width: 599px)">
            {isMobile =>
                <DashboardCollapsibleSider onCollapse={(e) => toggleSidebar(e)} collapsed={sidebarCollapsed} isMobile={isMobile} />
            }
        </Media>
    )

}

export default DashboardSider;