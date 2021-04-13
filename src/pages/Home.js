import React from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale/zh_CN';
// import 'antd/dist/antd.css';
// import { ConfigProvider, DatePicker, message } from 'antd';
// 子组件
// import Text from './pages/Test'
// import Hello from './components/hello'
import Demo1 from './components/demo1/TestFar'
import { Route,HashRouter, Link} from 'react-router-dom';

import Page1 from './page1/index'
import Page2 from './page2/index'

class Home extends React.Component{
	render(){
		return(
			<div>
				<div>This is Home!</div>
				<Demo1 />
			</div>
		);
	}
}
 
export default Home;