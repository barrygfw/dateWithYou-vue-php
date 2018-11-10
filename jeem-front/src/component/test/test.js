import React from 'react';
import {
  Layout, Button, Row, Col, Switch,
} from 'antd';

import One from '../one/one';
import Two from '../two/two';

import styles from './test.less';

const Test = ({
  list, onAdd, onChange, onDel, onAddAsync,
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <div style={ styles.test }>
      test
      <ul>
        <li><a href="">go one</a></li>
        <li><a href="">go two</a></li>
      </ul>
    </div>
  );
};

export default Test;
