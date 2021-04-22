/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-21 15:59:38
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Demo1 from '../components/demo1/todoList'
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