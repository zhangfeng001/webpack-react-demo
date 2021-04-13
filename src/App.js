import React, { Component } from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { ConfigProvider, DatePicker, message } from 'antd';
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
            <ConfigProvider locale={zhCN}>
              <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={handleChange} />
                <div style={{ marginTop: 16 }}>
                  当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
                </div>
              </div>
            </ConfigProvider>
        </div>
    );
  }
}
 
export default App;