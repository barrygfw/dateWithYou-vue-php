/* eslint-disable import/no-unresolved */
import React from 'react';
import { HashRouter, Route, Switch } from 'jeem/router';

import One from '../one/one';
import Two from '../two/two';

import styles from './center.less';

export default class center extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div className = { styles.center }>
          center
        </div>
      </div>
    );
  }
}
