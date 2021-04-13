import React, { Component } from 'react'
import { Button } from 'antd';
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
        return (
            <div id='container'>
                <Button type="primary">Button</Button>
                <p><a href="javascript:;" className="weui_btn weui_btn_primary" 
                onClick={this.propsChange.bind(this)}>负传子改变</a></p>
                <p><a href="javascript:;" className="weui_btn weui_btn_primary" 
                onClick={this.setLifeCycleState.bind(this)}>调用子方法修改子的数据</a></p>
                <p><a href="javascript:;" className="weui_btn weui_btn_primary" 
                onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a></p>
                <p><a href="javascript:;" className="weui_btn weui_btn_primary" 
                onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a></p>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

export default Demo
