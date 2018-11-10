/* eslint-disable import/no-unresolved */
import React from 'react';
import { HashRouter, Route, Switch } from 'jeem/router';

import One from '../one/one';
import Two from '../two/two';

import styles from './left.less';

export default class left extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div className = { styles.left }>
          <ul>
            <li><a className={ styles.a } href="#/center">Go Center</a></li>
            <li><a className={ styles.a } href="#/center/one">Go One</a></li>
            <li><a className={ styles.a } href="#/center/two">Go Two</a></li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/center">
                <Route path="/center/one" component={One}/>
                <Route path="/center/two" component={Two}/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
