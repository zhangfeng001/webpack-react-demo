import React, { Component } from 'react';
import { Provider } from 'react-redux';// 状态管理
import store from './store/index'// 引入store
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Router, Route, hashHistory } from 'react-router';//路由跳转

// 子组件
import Text from './pages/Test'
import Hello from './components/hello'
import Home from './pages/Home'
 
class App extends Component {
  render() {
    return (
      // Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
      <Provider store={store}>
        <div className="App">
            <Text />
            <Hello />
            <Home />
        </div>
      </Provider>
    );
  }
}
 
export default App;