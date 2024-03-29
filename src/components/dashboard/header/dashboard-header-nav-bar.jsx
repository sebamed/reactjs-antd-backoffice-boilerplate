import React from 'react';
import { Icon, Tooltip, Menu, Avatar, message } from 'antd';
import { connect } from 'react-redux';
import DashboardHeaderDropdown from './dashboard-header-dropdown';
import { HEADER_NAV } from '../../../config/menus/header-nav-config';
import history from '../../../config/history';
import { ROUTE_DASHBOARD } from '../../../utils/consts/routing';
import { FormattedMessage, injectIntl } from 'react-intl';
import store from '../../../store/store';
import * as actions from '../../../store/actions';
import { clearSignIn, changeLang } from '../../../utils/helper/local-storage';

const { Item, Divider } = Menu;

const DashboardHeaderNavBar = props => {
    const { sidebarCollapsed, toggleSidebarOpen, auth } = props;

    const changeLanguage = language => {
        if(language.locale == props.lang.locale) return;
        const { intl } = props;
        changeLang(language.locale)
        message.info(intl.formatMessage({id: 'message.language-changed'}))
    }

    const userDropdown = () => {
        return (
            <Menu selectedKeys={[]}>
                {HEADER_NAV.USER.map(item => {
                    return (
                        <Item key={item.id} onClick={() => history.push(ROUTE_DASHBOARD)}>
                            <Icon type={item.icon} />
                            {item.text}
                        </Item>
                    )
                })}
                <Divider />
                <Item key='logout' onClick={() => {
                    store.dispatch(actions.signOut());
                    clearSignIn();
                }}>
                    <Icon type='logout' />
                    <FormattedMessage id='menu.header.user.logout' />
                </Item>
            </Menu>
        )
    }

    const langDropdown = () => {
        return (
            <Menu className='menu' selectedKeys={[]}>
                {HEADER_NAV.LANGUAGE.map(language => {
                    return (
                        <Item className={props.lang.locale == language.locale ? 'active-language' : ''} key={language.id} onClick={() => changeLanguage(language)}>
                            <span role="img" aria-label={language.text}>
                                {language.icon}
                            </span>{' '}
                            {language.text}
                        </Item>
                    )
                })}
            </Menu>
        )

    }

    return (

        <div>
            <Icon
                className="trigger"
                type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => toggleSidebarOpen(!sidebarCollapsed)}
            />
            <div className="right">
                <Tooltip title='help'>
                    <a
                        target="_blank"
                        href="https://ant.design/docs/react/introduce"
                        rel="noopener noreferrer"
                        className='action'
                    >
                        <Icon type="question-circle-o" />
                    </a>
                </Tooltip>
                <DashboardHeaderDropdown overlay={userDropdown}>
                    <span className='action account'>
                        <Avatar
                            size="small"
                            className='avatar'
                            src={auth.user && auth.user.avatar ? auth.user.avatar : `https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`}
                            alt="avatar"
                        />
                        <span className='name'>{auth.user ? auth.user.email : ''}</span>
                    </span>
                </DashboardHeaderDropdown>
                <DashboardHeaderDropdown overlay={langDropdown} placement="bottomRight">
                    <span className='action account'>
                        <Icon type="global" title='languages' />
                    </span>
                </DashboardHeaderDropdown>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    console.log(state)
    return {
        lang: state.lang
    }
}

export default injectIntl(connect(mapStateToProps, null)(DashboardHeaderNavBar));