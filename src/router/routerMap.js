/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 17:48:18
 */
import empty from '@/pages/empty'
import Login from '@/pages/login'
import layout from '@/pages/layout/index' 
import page1 from '@/pages/page1/index' 
import page2 from '@/pages/page2/index' 
import page4 from '@/pages/page4/index' 
import page5 from '@/pages/page5/index' 
import page6 from '@/pages/page6/index' 
import Antv1 from '@/components/antv/index'
import Antv2 from '@/components/antv/index1'
import Antv3 from '@/components/antv/index2'
import Antv4 from '@/components/antv/index3'
import Antv5 from '@/components/antv/index4'
import {
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
const router = [
    {
        path:'/',
        redirect:'/home/Page1',
    },
    {
        path:'/login',
        name:'登录页',
        component:Login,
    },
    {
        path:'/home',
        name:'首页',
        icon:MenuUnfoldOutlined,
        component:layout,
        childen:[
                {
                    path:'/home/Page1',
                    name:'jsx语法练习',
                    icon:MenuUnfoldOutlined,
                    component:page1,
                },
                {
                    path:'/home/Page2',
                    name:'生命周期',
                    icon:MenuUnfoldOutlined,
                    component:page2,
                },
                {
                    path:'/home/antv',
                    name:'antv系列',
                    icon:MenuUnfoldOutlined,
                    component:empty,
                    childen:[
                        {
                            path:'/home/antv/Antv1',
                            name:'柱状图',
                            icon:MenuUnfoldOutlined,
                            component:Antv1,
                        },{
                            path:'/home/antv/Antv2',
                            name:'拖拽',
                            icon:MenuUnfoldOutlined,
                            component:Antv2,
                        },{
                            path:'/home/antv/Antv3',
                            name:'层级',
                            icon:MenuUnfoldOutlined,
                            component:Antv3,
                        },{
                            path:'/home/antv/Antv4',
                            name:'加虚框',
                            icon:MenuUnfoldOutlined,
                            component:Antv4,
                        },{
                            path:'/home/antv/Antv5',
                            name:'加组',
                            icon:MenuUnfoldOutlined,
                            component:Antv5,
                        }
                    ]
                },
                {
                    path:'/home/Page4',
                    name:'antd列表',
                    icon:MenuUnfoldOutlined,
                    component:page4,
                },
                {
                    path:'/home/Page5',
                    name:'TODOLIST',
                    icon:MenuUnfoldOutlined,
                    component:page5,
                },
                {
                    path:'/home/Page6',
                    name:'封装axios测试',
                    icon:MenuUnfoldOutlined,
                    component:page6,
                },
        ]
    },
]
export default router