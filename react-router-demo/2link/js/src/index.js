
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './containers/home';
import Factors from './containers/factors';
import Login from './containers/login';

render(
    (<Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/factors" component={Factors}/>
        <Route path="/login" component={Login}/>
    </Router>),
    document.getElementById('app'));