/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-27 17:11:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 17:19:14
 */
import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';
export const routerView = (array)=>{
    return <Switch>
        {
            array.map((route,key)=>{
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
} 