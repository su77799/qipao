import myAxios from "./request.js";
//获取首页数据
//用户一登录，获取总的用户数据
export const getUserData = ()=>{
  //返回一个promise对象
  return myAxios.get('/user/login/getUserData');
}
//用户一登录，获取总的队伍数据
export const getTeamData = ()=>{
  return myAxios.get('/user/login/getTeamData');
}