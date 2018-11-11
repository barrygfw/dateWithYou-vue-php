import React from 'react';

import { HashRouter, Route, Switch } from 'jeem/router';// react-router-dom

import Home from './layouts/home/index';
import Todo from './pages/Todo/index';
import Nav from './component/nav/nav';
import Center from './component/center/center';
import One from './component/one/one';
import Two from './component/two/two';
import Test from './component/test/test';

export default function () {
  return (
    <HashRouter>
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/home" component={Home}/>
            {/* <Route path="/other" component={Details}/>
                <Route exact path='/other/one' component={One}/>
                <Route exact path='/other/two' component={Two}/>
            <Route/> */}
        </Switch>
    </HashRouter>
  );
}
