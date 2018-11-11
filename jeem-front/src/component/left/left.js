/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'jeem/router';
import { Menu, Dropdown, Icon } from 'antd';

import One from '../one/one';
import Two from '../two/two';

import styles from './left.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
        <Link className={ styles.a } to='/fundus/other'>other</Link>
    </Menu.Item>
    <Menu.Item key="1">
        <Link className={ styles.a } to='/fundus/other/one'>otherone</Link>
    </Menu.Item>
    <Menu.Item key="2">
        <Link className={ styles.a } to='/fundus/other/two'>othertwo</Link>
    </Menu.Item>
  </Menu>
);

export default class left extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div className = { styles.left }>
          <ul>
              <li><Link className={ styles.a } to='/home'>Home</Link></li>
              <li><Link className={ styles.a } to='/eating'>Eating</Link></li>
              <li>
              <Dropdown overlay={menu}>
              <Link className={ styles.a } to="/home/other">
                other <Icon type="down" />
              </Link>
              </Dropdown>
              </li>
              <li><Link className={ styles.a } to='/infos'>infos</Link></li>
              <li><Link className={ styles.a } to="/nav">nav</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
