/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-27 17:11:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 18:04:22
 */
import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';

import { Menu } from 'antd';
const { SubMenu } = Menu
import {
    MailOutlined
  } from '@ant-design/icons';

/**
 * @name: 嵌套路由规则
 * @msg: 
 * @param {*} array
 * @return {*}
 */  
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
/**
 * @name: 根据路由表配置侧边导航栏
 * @msg: 
 * @param {*} array
 * @return {*}
 */
export const deepMenuList = (array)=> {// 根据配置路由生成侧边栏
    return array.map(element => {
        return element.childen ? 
        <SubMenu key={element.path} icon={element.icon} title={element.name}>
            { // 递归查找
                deepMenuList(element.childen)
            }
        </SubMenu> :
        <Menu.Item key={element.path} icon={element.icon}>
            {element.name}
        </Menu.Item>
    })
}