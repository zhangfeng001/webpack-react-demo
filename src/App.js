/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:53:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-13 11:41:50
 */
import React, { Component } from 'react';
// import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './style/base.scss'
import './style/App.scss'
// 子组件
// import Text from './pages/Test'
// import Hello from './components/hello'
import Demo1 from './components/demo1/TestFar'
 
class App extends Component {
  render() {
    return (
        <div className="App">
            {/* <Text /> */}
            {/* <Hello /> */}
            <Demo1 />
        </div>
    );
  }
}
 
export default App;