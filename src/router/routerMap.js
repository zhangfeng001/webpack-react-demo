/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 15:45:53
 */
import Home from '@/pages/Home' 
import Login from '@/pages/login'
import page1 from '@/pages/page1/index' 
import page2 from '@/pages/page2/index' 
import page3 from '@/pages/page3/index' 
import page4 from '@/pages/page4/index' 
import page5 from '@/pages/page5/index' 
import page6 from '@/pages/page6/index' 
import redux from '@/components/Test' 
import Antv1 from '@/components/antv/index'
import Antv2 from '@/components/antv/index1'
import Antv3 from '@/components/antv/index2'
import Antv4 from '@/components/antv/index3'
import Antv5 from '@/components/antv/index4'
import Antv6 from '@/components/antv/index5'
import one from '@/components/antv/one'
import two from '@/components/antv/two'
const router = [
    {
        path:'/',
        redirect:'/home',
    },
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/Page1',
        component:page1,
    },
    {
        path:'/Page2',
        component:page2,
    },
    {
        path:'/Page3',
        component:page3,
        childen:[
            {
                path:'/page3/Antv1',
                component:Antv1,
            },{
                path:'/page3/Antv2',
                component:Antv2,
            },{
                path:'/page3/Antv3',
                component:Antv3,
            },{
                path:'/page3/Antv4',
                component:Antv4,
            },{
                path:'/page3/Antv5',
                component:Antv5,
            },{
                path:'/page3/Antv6',
                component:Antv6,
                childen:[{
                    path:'/page3/Antv6/one',
                    component:one,
                },{
                    path:'/page3/Antv6/two',
                    component:two,
                }]
            }
        ]
    },
    {
        path:'/Page4',
        component:page4,
    },
    {
        path:'/Page5',
        component:page5,
    },
    {
        path:'/Page6',
        component:page6,
    },
    {
        path:'/Page7',
        component:redux,
    },
]
export default router