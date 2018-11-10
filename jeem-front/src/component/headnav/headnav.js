/* eslint-disable import/no-unresolved */
import React from 'react';

import { HashRouter, Route, Switch } from 'jeem/router';

import styles from './headnav.less'

export default class headnav extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div className = {styles.avatar}>
        </div>
        <div className = { styles.head_nav }>
          headnav
        </div>
      </div>
    );
  }
}
