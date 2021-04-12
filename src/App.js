/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:53:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-12 14:11:11
 */

import React, { Component } from 'react';
// 状态管理
import { Provider } from 'react-redux';
// 引入store
import {store} from './store'
// 子组件
// import Posts from './components/Posts'
// import PostFrom from './components/PostFrom'
 
class App extends Component {
  render() {
    return (
      // 用Provider把所有的组件内容包裹起来
      <Provider store={store}>
        <div className="App">
            123
          {/* <PostFrom />
          <Posts /> */}
        </div>
      </Provider>
    );
  }
}
 
export default App;