/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:53:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-12 15:17:36
 */

import React, { Component } from 'react';
// 状态管理
import { Provider } from 'react-redux';
// 引入store
import store from './store/index'
import Text from './pages/Test'
// 子组件
import Hello from './components/hello'
 
class App extends Component {
  render() {
    return (
      // Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
      <Provider store={store}>
        <div className="App">
            <Text />
            <Hello />
        </div>
      </Provider>
    );
  }
}
 
export default App;