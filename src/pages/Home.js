/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 11:31:51
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Demo1 from '../components/lifeCycle/TestFar'
class Home extends React.Component{
	render(){
		return(
			<div>
				{/* <div>This is Home!</div>
				<Link to='/login'>
					<span>登录</span> 
				</Link> */}
				<Demo1 />
			</div>
		);
	}
}
 
export default Home;