import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Home from '../pages/home'
import Compra from '../pages/compra'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={Compra} exact path="/Compra"/>
        </Switch>
    </Router>
)

export default Routes