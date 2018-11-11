/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'jeem/router';
import { Menu, Dropdown, Icon, Layout } from 'antd';

import styles from './headnav.less'

const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu>
      <Menu.Item key="0">
          <Link className={ styles.a } to='/infos'>UserInfos</Link>
      </Menu.Item>
      <Menu.Item key="1">
          <span className={ styles.a }>LogOut</span>
      </Menu.Item>
  </Menu>
);

export default class headnav extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div className = {styles.avatar}>
        </div>
        <div className = { styles.head_nav }>
          <div className = { styles.logo }></div>
          {/* <div className={ styles.title }> LAP ManageSystem </div> */}
          <h1 style={{ display: 'inline-block', margin: '0 auto' }} >LAP ManageSystem</h1>
          <div className = { styles.logout }>
            <Dropdown overlay={menu}>
              <Link className={ styles.a } to="/infos">
                User <Icon type="down" />
              </Link>
            </Dropdown></div>
        </div>
      </div>
    );
  }
}
