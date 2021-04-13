/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 11:28:32
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-13 10:14:15
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 状态管理 Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux';
// 引入store
import store from './store/index'
import App from './App'

const AppView = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(AppView, document.getElementById("root"))