/*
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-04 10:35:34
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-04 10:44:02
 * @FilePath: \伙伴匹配系统\qipao\src\plugins\myAxios.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
const myAxios = axios.create({
  baseURL: 'https://localhost:8080/api'
});

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
  console.log('我要发请求了',config)
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
  console.log('我收到你的响应了',response)
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default myAxios;