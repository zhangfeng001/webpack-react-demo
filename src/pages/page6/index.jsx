/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 10:26:52
 */
import React from 'react'
import { getArticleList } from "@/api";
class httpDemo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:''
        }
    }
    componentDidMount() { // 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
        getArticleList().then(
            (res) => {
                console.log("成功:", res);
            },
           (error) => {
                console.log("失败：",error);
            }
         );
    }
    render(){
        return(
            <div>asdasdasd</div>
        )
    }
} 
export default httpDemo;