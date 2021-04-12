/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 14:13:43
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-12 14:14:02
 */
// reducer的作用: 返回新的状态
// 定义一个变量,
const initialState ={
    //存储你想要获取的状态 
    items:[]//1.访问到当前的文件中的时候定义一个初始状态
 
}
export default function(state = initialState,action ){//reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
    switch(action.type){//2.在switch的时候会传过来对应的数据,在此修改状态,返回给到初始定义的属性中最终返回到组件中去
        default:
            return state;
    }
}