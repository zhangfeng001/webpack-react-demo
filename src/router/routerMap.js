import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import App from '../App' 
import Login from '../pages/login'
import Page1 from '@pages/page1/index' 
import Page2 from '@pages/page2/index' 
import List from '@pages/list/index' 

export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login"  component={Login} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/list" component={List} />
      </Switch>
  </BrowserRouter>
)
