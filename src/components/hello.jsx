/*
 * @Descripttion: jsx语法练习
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 15:15:45
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 11:46:34
 */
import React, { Component } from 'react'
class Hello extends Component {
    constructor(props){
      super(props);
      this.state = {
        value:'000'
      }
    }
    componentDidMount() {
        console.log('欢迎使用后台管理平台欢迎使用后台管理平台')
    }
    changeValue(e){
      let a = e.target.value
      this.setState({value : a})
      console.log(this.state.value)
    }
    render() {
      // 1. 基本用法
      let poetry = '满地斜阳，翠色和烟老。'
      let jsx = <div>落尽梨花春事了。{poetry}</div>
      // 2. 三目运算
      let bolean = false
      let jsx2 = (
        <div>
          {bolean ? <p>把酒送春春不语。黄昏却下潇潇雨。</p> : <p>凤凰山上雨初晴，水风清，晚霞明。</p>}
        </div>
      )
      // 3.遍历数组
      let poetrys = [
        '天不老，情难绝。心似双丝网，中有千千结。',
        '试上高峰窥皓月，偶开天眼觑红尘。可怜身是眼中人。',
        '可怜今夕月，向何处，去悠悠？是别有人间，那边才见，光影东头？',
        '东风恶。欢情薄。一怀愁绪，几年离索。错错错。',
        '月桥边、青柳朱门。断钟残角，又送黄昏。奈心中事，眼中泪，意中人。'
      ]
      let jsx3 = (
        <div>
          {poetrys.map((poetry,index) => <p key={index}>{poetry}</p>)}
        </div>
      )
      // 4.组件/函数
      function Poetry(){
        return <p>笑渐不闻声渐悄。多情却被无情恼。</p>
      }
      return (
        <div>
          <div>你好，react,jsx语法练习：</div>
          <div>{jsx}</div>
          <div>{jsx2}</div>
          <div>{jsx3}</div>
          <Poetry />
          <div>简单语法demo</div>
          <input 
            type='text' 
            value={this.state.value} 
            onChange={this.changeValue.bind(this)} 
          />
        </div>
      );
    }
  }
   
  export default Hello;