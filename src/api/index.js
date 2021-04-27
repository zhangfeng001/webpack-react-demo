/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-25 14:07:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 10:26:28
 */
import http from '@/utils/http';
/**
 * 获取首页列表
 */
 function getArticleList(){
    return new Promise((resolve, reject) => {
      http("get",'/article/home/index').then(res => {
        resolve (res);
      },error => {
        reject(error)
      })
    }) 
  }
  
export {
    getArticleList
}