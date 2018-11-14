/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'jeem/router';

import {
  Layout, Menu, Icon, Dropdown,
} from 'antd';

import styles from './nav.less';

const {
  Header, Content, Footer, Sider,
} = Layout;

const menu = (
    <Menu>
      <Menu.Item key="0">
          <Link to='/fundus/money'>Money</Link>
      </Menu.Item>
    </Menu>
);

export default class nav extends React.Component {
  render() {
    return (<Layout className={ styles.sider }>
        <Sider theme="dark"
          breakpoint="xs"
          collapsible="false"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to='/home'>
                    <Icon type="appstore" />
                    <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/eating'>
                    <Icon type="rocket" />
                    <span className="nav-text">Eating</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="wallet" />
              <span className="nav-text"><Link to='/fundus'>Fundus</Link></span>
            <Dropdown overlay={menu}>
                <Icon type="down" />
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to='/user'>
              <Icon type="user" />
              <span className="nav-text">User</span>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}
