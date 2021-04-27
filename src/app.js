/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 15:33:00
 */
import React from 'react'
import { HashRouter, Route,Switch,Redirect } from 'react-router-dom';
import router  from "@/router/routerMap";

export default () => (
  <HashRouter>
      <Switch>
        {
          router.map((route,key)=>{
            if (route.redirect){
              return <Route key={key} exact={!route.childen} path={route.path} render={()=>(
                  <Redirect to={route.redirect}/>
              )}/>
            }else {
              return <Route key={key} exact={!route.childen} path={route.path} render={props=>(
                  <route.component {...props} childen={route.childen}/>
              )}/>
            }
          })
        }
      </Switch>
  </HashRouter>
)
