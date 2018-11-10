import React from 'react';

import { HashRouter, Route, Switch } from 'jeem/router';// react-router-dom

import Home from './layouts/home/index';
import Todo from './pages/Todo/index';
import Details from './component/details/details';
import Center from './component/center/center';
import One from './component/one/one';
import Two from './component/two/two';
import Test from './component/test/test';

export default function () {
  return (
    <div>
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/center" component={Center}>
              <Route exact path="/center/one" component={One}/>
              <Route exact path="/center/two" component={Two}/></Route>
          </Switch>
      </HashRouter>
    </div>
  );
}
