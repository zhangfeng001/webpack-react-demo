/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-21 15:10:31
 */
import React from 'react'
import { HashRouter, Route,Switch } from 'react-router-dom';

import home from '../pages/Home' 
import Login from '../pages/login'
import Page1 from '@pages/page1/index' 
import Page2 from '@pages/page2/index' 
import List from '@pages/list/index' 

export default () => (
  <HashRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/login"  component={Login} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/list" component={List} />
      </Switch>
  </HashRouter>
)
