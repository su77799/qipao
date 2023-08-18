import Mock from 'mockjs'
import userSearchResultData from './userSearchResultData.js'
import teamList from './teamList.js'
//定义mock请求拦截
Mock.mock("/api/user/login/getUserData",userSearchResultData);
Mock.mock("/api/user/login/getTeamData",teamList)