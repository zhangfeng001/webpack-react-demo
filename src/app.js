/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 16:27:40
 */
import React from 'react'
import { HashRouter, Route,Switch,Redirect } from 'react-router-dom';

import Home from './pages/Home' 
import Login from './pages/login'
import Page1 from '@pages/page1/index' 
import Page2 from '@pages/page2/index' 
import page3 from '@pages/page3/index' 
import page4 from '@pages/page4/index' 
import page5 from '@pages/page5/index' 

export default () => (
  <HashRouter>
      <Switch>
        <Route path='/' exact render={()=>(
            <Redirect to='/home'/>
        )}/>
         {/* // 登录页（使用sessionStorage模拟登录） */}
        <Route path="/login" component={Login} />
        {/* // 首导航页 */}
        <Route path="/home"  component={Home} />
        {/* // jsx语法 */}
        <Route path="/page1" component={Page1} />
        {/* // 生命周期 */}
        <Route path="/page2" component={Page2} />
        {/* // antv调研（包含嵌套路由） */}
        <Route path="/page3" component={page3} />
        {/* // antd调研 （包含分页列表案例） */}
        <Route path="/page4" component={page4} />
        {/* // todoList经典案例（组件化开发） */}
        <Route path="/page5" component={page5} />
      </Switch>
  </HashRouter>
)
