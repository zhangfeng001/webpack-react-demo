/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:53:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-12 17:01:40
 */

import React, { Component } from 'react';
// 状态管理
import { Provider } from 'react-redux';
// 引入store
import store from './store/index'
// 子组件
// import Text from './pages/Test'
// import Hello from './components/hello'
import Demo1 from './components/demo1/TestFar'
 
class App extends Component {
  render() {
    return (
      // Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
      <Provider store={store}>
        <div className="App">
            {/* <Text /> */}
            {/* <Hello /> */}
            <Demo1 />
        </div>
      </Provider>
    );
  }
}
 
export default App;