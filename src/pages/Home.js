/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-25 14:32:40
 */
import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component{
	constructor(props, context) {
		super(props)
		this.state = {
		  username: '',
		}
	  }
	componentWillMount() {
		const sessinUser = sessionStorage.getItem('user')
		// this.props.match.params.user
		// this.props.location.query
		const {query} = this.props.location
		if (sessinUser || query && query.user) {
			this.setState({
			username:sessinUser || query.user},()=>{
				console.log('赋值完毕')
			})
		}else {
			this.props.history.push('/login')
		}
    }
	render(){
    	console.log('this.propssss',this.props)
		const style = {
			link:{
				width:'120px',
				lineHeight:'100px',
				height:'100px',
				textAlign:'center',
				borderRadius:'10px',
				margin:'10px',
				backgroundColor:'#eee'
			}
		}
		return(
			<div>
				<h1>欢迎你：{this.state.username}</h1>
				<div style={{display:'flex'}}>
					<Link style={style.link} to='/page1'>
						<span>jsx语法练习</span> 
					</Link>
					<Link style={style.link} to='/page2'>
						<span>认识生命周期</span> 
					</Link>
					<Link style={style.link} to='/page3'>
						<span>antv系列学习</span> 
					</Link>
					<Link style={style.link} to='/page4'>
						<span>antd系列学习</span> 
					</Link>
					<Link style={style.link} to='/page5'>
						<span>todoList经典案例</span> 
					</Link>
					<Link style={style.link} to='/page6'>
						<span>axios封装练习</span> 
					</Link>
					<Link style={style.link} to='/page7'>
						<span>redux练习</span> 
					</Link>
				</div>
			</div>
		);
	}
}
 
export default Home;