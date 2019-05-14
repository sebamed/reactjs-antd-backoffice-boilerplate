import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Media from 'react-media';
import DashboardCollapsibleSider from './dashboard-collapsible-sider';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashboardSider extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        }
    }

    handleOnCollapse(collapsed) {
        this.setState({ collapsed });
    };

    render() {
        const { collapsed} = this.state;

        return (
            <Media query="(max-width: 599px)">
                {isMobile =>
                   <DashboardCollapsibleSider onCollapse={(e) => this.handleOnCollapse(e)} collapsed={collapsed} isMobile={isMobile} />
                }
            </Media>
        )
    }
}

export default DashboardSider;