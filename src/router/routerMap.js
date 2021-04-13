import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'

import App from './src/App' 
import Login from '@pages/login/index'
import Page1 from '@pages/page1/index' 
import Page1 from '@pages/page1/index' 
import Page2 from '@pages/page2/index' 
import List from '@pages/list/index' 

export default () => (
  <Router history={hashHistory}>
    {/* 嵌套子路由 */}
    {/* <Route path="/" component={App} >
      <IndexRoute component={base.example} />
      <Route path="/desk$/index" component={base.example} />
      <Route path="/echarts" component={menu.echarts} />
      <Route path="/editor" component={menu.editor} />
      <Route path={`/${set}/userManage`} component={sysSet.userManage} />
      <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
      <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
    </Route> */}
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/list" component={List} />
  </Router>
)
