/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:53:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-13 11:41:50
 */
import React, { Component } from 'react';
<<<<<<< HEAD
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
// import 'antd/dist/antd.css';
// import { ConfigProvider, DatePicker, message } from 'antd';
=======
// import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './style/base.scss'
import './style/App.scss'
>>>>>>> 300b497ffddd5d68b8a1438ce8a07d0a3e3f782c
// 子组件
// import Text from './pages/Test'
// import Hello from './components/hello'
import {Link} from 'react-router-dom';

import Demo1 from './components/demo1/TestFar'
 
class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div className="App">
            <Link to='/login'>
                <span>登录</span> 
            </Link>
            {/* <Text /> */}
            {/* <Hello /> */}
            <Demo1 />
<<<<<<< HEAD
            {/* <ConfigProvider locale={zhCN}>
              <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={handleChange} />
                <div style={{ marginTop: 16 }}>
                  当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
                </div>
              </div>
            </ConfigProvider> */}
=======
>>>>>>> 300b497ffddd5d68b8a1438ce8a07d0a3e3f782c
        </div>
    );
  }
}
 
export default App;