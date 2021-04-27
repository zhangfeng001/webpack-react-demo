/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 15:58:34
 */
import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu
import './style.css'
const { Header, Sider, Content } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons';
class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            collapsed: false,
            page:['']
        }
    }
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    menuClick(e){
        this.props.history.push(e.key)
        this.setState({
            page:[e.key]
        })
    }
    componentWillMount() {// 页面刷新会到此
        this.setState({
            page:[this.props.location.pathname]
        })
    }
    componentWillReceiveProps(nextProps) { // 前进后退可以到此
        this.setState({
            page:[nextProps.location.pathname]
        })
    }
    render(){
        return(
            <Layout className='layout'>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.page} onClick={this.menuClick.bind(this)}>
                        <Menu.Item key="/page3/Antv1" icon={<UserOutlined />}>
                            查看demo1
                        </Menu.Item>
                        <Menu.Item key="/page3/Antv2" icon={<VideoCameraOutlined />}>
                            查看demo2
                        </Menu.Item>
                        <Menu.Item key="/page3/Antv3" icon={<UploadOutlined />}>
                            查看demo3
                        </Menu.Item>
                        <Menu.Item key="/page3/Antv4" icon={<UploadOutlined />}>
                            查看demo4
                        </Menu.Item>
                        <Menu.Item key="/page3/Antv5" icon={<UploadOutlined />}>
                            查看demo5
                        </Menu.Item>
                        {/* <Menu.Item key="/page3/Antv6" icon={<UploadOutlined />}>
                            查看demo6
                        </Menu.Item> */}
                        <SubMenu key="sub1" icon={<MailOutlined />} title="子目录">
                            <Menu.Item key="/page3/Antv6/one">one</Menu.Item>
                            <Menu.Item key="/page3/Antv6/two">two</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle.bind(this),
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        <Switch>
                            {
                                this.props.childen.map((route,key)=>{
                                    if (route.redirect){
                                    return <Route key={key} exact={!route.childen} path={route.path} render={()=>(
                                        <Redirect to={route.redirect}/>
                                    )}/>
                                    }else {
                                    return <Route key={key} exact={!route.childen} path={route.path} render={props=>(
                                        <route.component {...props} childen={route.childen}/>
                                    )}/>
                                    }
                                })
                            }
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
} 
export default List;