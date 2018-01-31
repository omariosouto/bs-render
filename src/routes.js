import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import RandomPageRedux from './RandomPageRedux'

export const routes = (
            <Switch>
                <Route path="/" exact={true} component={App}/>
                <Route path="/random" component={RandomPageRedux}/>
            </Switch>
        )