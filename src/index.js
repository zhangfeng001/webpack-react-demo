/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 11:28:32
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-21 15:26:44
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 状态管理 Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root'
import Routes from '@router/routerMap'

import 'antd/dist/antd.css'; //antd
import './style/base.scss' //css初始化
import './style/App.scss' // 全局样式
import './style/cmtlist.scss' // 全局公共样式

// 引入store
import store from './store/index'

const HotRoutes = hot(Routes)

const AppView = (
    <Provider store={store}>
        <HotRoutes />
    </Provider>
)
ReactDOM.render(AppView, document.getElementById("root"))