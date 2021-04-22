/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 15:46:59
 */
import React from 'react'
import { HashRouter, Route,Switch,Redirect } from 'react-router-dom';
import Antv1 from '../../components/antv/index'
import Antv2 from '../../components/antv/index1'
import Antv3 from '../../components/antv/index2'
import Antv4 from '../../components/antv/index3'
import Antv5 from '../../components/antv/index4'
class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'antv 练习',
            page:''
        }
    }
    componentWillMount() {
        // console.log('this.props.location.pathname',this.props.location.pathname)
    }
    componentWillReceiveProps(nextProps) { // 前进后退可以到此
        this.setState({
            page:nextProps.location.pathname
        })
    }
    toPage(page){
        this.props.history.push(page)
    }
    render(){
        const style = {
            box:{
                display:'flex',
                height:'40px'
            },
            content:{
                margin:'0 10px 0 10px',
                cursor:'pointer'
            }
        }
        return(
            <div>
                <div style={style.box}>
                    <div style={style.content} className={this.state.page=='/page3/Antv1'?'textRed':''} onClick={this.toPage.bind(this,'/page3/Antv1')}>查看demo1</div>
                    <div style={style.content} className={this.state.page=='/page3/Antv2'?'textRed':''} onClick={this.toPage.bind(this,'/page3/Antv2')}>查看demo2</div>
                    <div style={style.content} className={this.state.page=='/page3/Antv3'?'textRed':''} onClick={this.toPage.bind(this,'/page3/Antv3')}>查看demo3</div>
                    <div style={style.content} className={this.state.page=='/page3/Antv4'?'textRed':''} onClick={this.toPage.bind(this,'/page3/Antv4')}>查看demo4</div>
                    <div style={style.content} className={this.state.page=='/page3/Antv5'?'textRed':''} onClick={this.toPage.bind(this,'/page3/Antv5')}>查看demo5</div>
                </div>
                <Route path='/' render={()=>(
                    <Redirect to='/page3/Antv1'/>
                )}/>
                <Route path="/page3/Antv1" component={Antv1} />
                <Route path="/page3/Antv2"  component={Antv2} />
                <Route path="/page3/Antv3" component={Antv3} />
                <Route path="/page3/Antv4" component={Antv4} />
                <Route path="/page3/Antv5" component={Antv5} />
            </div>
        )
    }
} 
export default List;