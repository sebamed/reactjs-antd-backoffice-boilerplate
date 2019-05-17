import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Drawer } from 'antd';
import Media from 'react-media';
import DashboardCollapsibleSider from './dashboard-collapsible-sider';

const DashboardSider = props => {

    const { sidebarCollapsed, toggleSidebarOpen } = props;

    return (
        <Media query="(max-width: 599px)">
            {isMobile => !isMobile ?
                <DashboardCollapsibleSider onCollapse={(e) => toggleSidebarOpen(e)} collapsed={sidebarCollapsed} isMobile={isMobile} />
                :
                <Drawer
                    visible={sidebarCollapsed}
                    placement="left"
                    onClose={() => toggleSidebarOpen(false)}
                    style={{
                        padding: 0,
                        height: '100vh',
                    }}
                >
                    <DashboardCollapsibleSider isMobile={isMobile} />
                </Drawer>
            }
        </Media>
    )

}

export default DashboardSider;