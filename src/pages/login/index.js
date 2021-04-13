
import React, { Component } from 'react'
import { BrowserRouter, Route,Switch,withRouer } from 'react-router-dom';
import { Spin, Form, Input, Button, Row, Col, message } from 'antd'
import md5 from 'md5'

const FormItem = Form.Item
class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      isCertificates: false,
      show: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {}
  // #region 收缩业务代码功能
  handleSubmit(e, isCertificates) {
    this.props.history.push('/page1');
  }

  render() {
    return (
      <div className="login-container">
        <div className="extraLink" />
        <div className="flexcolumn">
          <div className="login-main">
            <Form onSubmit={e => this.handleSubmit(e, this.state.isCertificates)}>
                <div>
                    <FormItem hasFeedback>
                        <Input  placeholder="请输入用户名" type="text" />
                    </FormItem>
                    <FormItem hasFeedback>
                        <Input  placeholder="请输入密码" type="password" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="cert-btn">登录</Button>
                    </FormItem>
                </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;