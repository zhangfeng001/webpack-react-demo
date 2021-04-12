/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 14:12:50
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-12 14:18:02
 */

// reducer合成,redux自身提供的一个方法
import { combineReducers } from 'redux'
import postReducer from './PostReducer'
export default combineReducers({
    // 这里写生成状态的方法,这个方法会最后合成一个大的reducer,会拆分多个小的
    posts:postReducer,//这里是引的posts.js中的state数据
})