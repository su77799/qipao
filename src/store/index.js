import { createStore } from "vuex";
import { getUserData,getTeamData } from '../api'
export default createStore({
  // 需要存储的值都放在这里面
  state() {
    return {
      //用户搜索结果数据
      userSearchResulList: [],
      //所有的队伍信息
      teamList: [],
      //登录的用户数据
      userData: {
        id: 0,
        username: "小柒",
        userAccount: 'qi',
        avatarUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.rzOnPOD33QBn7uGN3-2aMwAAAA?w=116&h=128&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        gender: '女',
        tags: ['女','前端','求职'],
        phone: '121212',
        email: '2212@qq.com',
        planetCode: '25328',
        createTime:  new Date()
      }
    };
  },
  // 在其他视图中通过 $store.commit('setState', 10) 使用，用于修改stor存的值
  mutations: {
    SETUSERDATA(state,idx) {
      state.userData = state.userSearchResulList[idx];
    },
    //用户请求加入队伍
    USERADDTEAM(state,data) {
      state.teamList[data.idx].membersId.push(data.userId);
    },
    SETUSERINFO(state,data) {
      state.userData[data.key] = data.value;
    },
    SETUSERSEARCHRESULTLIST(state,data) {
      state.userSearchResulList = data;
    },
    SETTEAMLIST(state,data) {
      state.teamList = data;
    }
  },
  // 异步任务 不会改变state 通过 $store.dispath('doubleCount') 使用
  actions: {
    //登录后，将userResultList总的数据请求，显示出来
    setUserSearchResultList(context) {
      getUserData().then(({data})=>{
        context.commit('SETUSERSEARCHRESULTLIST',data);
      })
    },
    //用户登录后，获取所有队伍信息
    setTeamList(context) {
      getTeamData().then(({data})=>{
        context.commit('SETTEAMLIST',data);
      })
    },
    //登录后，将userData换成登录的用户信息
    setUserData(context,data) {
      context.state.userSearchResulList.forEach((item,idx)=>{
        if(item.userAccount === data) {
          context.commit("SETUSERDATA",idx);
        }
      })
    },
    //修改用户某一项信息
    setUserInfo(context,data) {
      context.commit('SETUSERINFO',data);
    },
    userAddTeam(context,team) {
      const userId = context.state.userData.id;
      context.state.teamList.forEach((item,idx)=>{
        if(item.id === team.id && !item.membersId.includes(userId)) {
          context.commit('USERADDTEAM',{idx,userId});
        }
      })
    }
  },
  // 相当于组件的计算属性 通过 $store.getters.doubleCount 获取计算后的值
  getters: {
    //获取用户创建的队伍
    userTeamCreateInfo(state) {
      return state.teamList.filter((item) => {
        return item.createUserId === state.userData.id;
      })
    },
    //获取用户已加入的队伍
    userTeamJoinInfo(state) {
      return state.teamList.filter((item) => {
        return item.membersId.includes(state.userData.id);
      })
    },
    //获取所有用户的账号信息
    userAccounts(state) {
      state.userSearchResulList.reduce((acc,curr)=>{
        acc.push(curr.userAccount);
        return acc;
      },[])
    },
  },
  // store的下级store 方便大型项目复杂数据管理，这里面相当于可以在放置一个和外面这些一样的模块
  modules: {},
});
