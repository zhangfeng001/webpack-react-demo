/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 14:08:42
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-12 14:20:40
 */
// 导入中间件
import { createStore ,applyMiddleware} from 'redux';
// 导入thunk
import thunk from "redux-thunk";
// reducer不至一个,所以我们需要对reducer折分,新建一个文件
import rootReducer from './reducer'
 
// 定义state
const initialState = {};
/**
 * 中间件,
 * redux-thunk中间件可以让action创建函数先不返回一个action对象，
 * 而是返回一个函数，函数传递两个参数(dispatch,getState),在函数体内进行业务逻辑的封装
 * 激活redux-thunk中间件，只需要在createStore中加入applyMiddleware(thunk)就可以
 *  */
const middleware = [thunk]
/**
 * 创建store：
 * rootReducer 代表Reducer为一个数组
 * initialState 代表 state,先定义空对象到时会返回新状态
 * applyMiddleware(...middleware) 代表中间件,里的middleware是从thunk中引过来的,
 * 作用是将所有的中间件组成一个数组依次执行,基本操作就是一个异步
 *  */
export const store = createStore(rootReducer,initialState,applyMiddleware(...middleware))