import React from 'react';
import { HashRouter, Route, Switch } from 'jeem/router';// react-router-dom
import {
  Layout, Button, Row, Col,
} from 'antd';

import HeadNav from '../../component/headnav/headnav';
import Left from '../../component/left/left';
import Center from '../../component/center/center'
import One from '../../component/one/one';
import Two from '../../component/two/two';

import styles from './index.less';


const Home = ({
  list, onAdd, onChange, onDel, onAddAsync,
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <div>
      <HeadNav/>
      <Left/>
      <Center>
      </Center>
    </div>
  );
};

export default Home;
