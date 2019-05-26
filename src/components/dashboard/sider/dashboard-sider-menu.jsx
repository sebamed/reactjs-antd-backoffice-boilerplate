import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { SIDEBAR_MENU } from '../../../config/menus/sidebar-config';
import history from '../../../config/history';

const { SubMenu, Item } = Menu;

const DashboardSiderMenu = props => {

    const renderMenu = () => {
        return SIDEBAR_MENU.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.url + 'url_submenu'}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.text}</span>
                            </span>
                        }
                    >
                        {item.children.map(child => {
                            return <Item className={props.location.pathname == child.url ? 'ant-menu-item-selected' : ''} onClick={() => history.push(child.url)} key={child.url}>{child.icon ? <Icon type={child.icon} /> : null}{child.text}</Item>
                        })}
                    </SubMenu>
                )
            } else {
                return <Item className={item.activeUrls.includes(props.location.pathname) ? 'ant-menu-item-selected' : '' } onClick={() => history.push(item.url)} key={item.url}>{item.icon ? <Icon type={item.icon} /> : null}{item.text}</Item>
            }
        })
    }

    return (
        <Menu
            theme="light"
            className='menu'
            mode="inline">
            {renderMenu()}
        </Menu>
    )
}

export default withRouter(DashboardSiderMenu);