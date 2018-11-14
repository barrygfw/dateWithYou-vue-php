/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { Route, Link, Switch } from 'jeem/router';// react-router-dom

import {
  Layout, Menu, Icon, Dropdown,
} from 'antd';

import HeadNav from '../../component/headnav/headnav';
import Left from '../../component/left/left';
import Center from '../../component/center/center'
import One from '../../component/one/one';
import Two from '../../component/two/two';
import Details from '../../component/details/details'
import Nav from '../../component/nav/nav'
import User from '../../component/user/user'
import Eating from '../../component/eating/eating'
import Money from '../../component/money/money'

import styles from './index.less';


const {
  Header, Content, Footer, Sider,
} = Layout;

const Home = () => (
	<div>
		<div>
			<HeadNav/>
			<Nav/>
			<div className={ styles.lay }>
				<Layout className={ styles.layout }>
					<Header className={ styles.header }>
						<Switch>
							<Route path='/home'><span>Home</span></Route>
							<Route path='/eating'><span>Eating</span></Route>
							<Route path='/fundus'><span>Fundus</span></Route>
							<Route path='/user'><span>User</span></Route>
						</Switch>
					</Header>
					<Content style={{ margin: '24px 16px 0' }} className={ styles.divcontent }>
						<div className={ styles.content }>
							<Switch>
								<Route path='/home'><div>home</div></Route>
								<Route path='/eating' component={ Eating }></Route>
								<Route path='/user' component={User}></Route>
								<Route exact path='/fundus/money' component={Money} />
								<Route path='/fundus/one' component={One}/>
								<Route path='/fundus/two' component={Two}/>
							</Switch>
						</div>
					</Content>
					<Footer className={ styles.footer }>
							ManageSystem Design ©2018 Created by LAP
					</Footer>
				</Layout>
			</div>
		</div>
	</div>
);

export default Home;
