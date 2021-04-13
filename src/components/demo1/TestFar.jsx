import React, { Component } from 'react'
import { Button } from 'antd';
import '../../style/cmtlist.scss' //样式
import LifeCycle from './TestSon'
class Demo  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        const itemStyle = {margin: '10px'};
        return (
            <div id='container'>
                <Button type="primary" onClick={this.propsChange.bind(this)}>负传子改变</Button>
                <Button type="primary" style = { { margin: '10px', } } onClick={this.setLifeCycleState.bind(this)}>调用子方法修改子的数据</Button>
                <Button type="primary" style = {itemStyle} onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</Button>
                <Button type="primary" className='buttonss' onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</Button>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

export default Demo
