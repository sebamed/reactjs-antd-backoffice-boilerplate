import React from 'react';
import { Icon } from 'antd';

const DashboardHeaderNavBar = props => {
    const { sidebarCollapsed, toggleSidebarOpen } = props;

    return (

        <div>
            <Icon
              className="trigger"
              type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggleSidebarOpen(!sidebarCollapsed)}
            />
        </div>
    );

}

export default DashboardHeaderNavBar;