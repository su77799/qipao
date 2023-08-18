/*
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-02 18:52:06
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 09:27:06
 * @FilePath: \伙伴匹配系统\qipao\src\config\route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
import Index from '../pages/Index.vue'
import TeamPage from '../pages/TeamPage.vue'
import UserPage from '../pages/UserPage.vue'
import UserUpdatePage from '../pages/UserUpdatePage.vue'
import UserTeamJoinPage from '../pages/UserTeamJoinPage.vue'
import UserTeamCreatePage from '../pages/UserTeamCreatePage.vue'
import SearchPage from '../pages/SearchPage.vue'
import UserEditPage from '../pages/UserEditPage.vue'
import SearchResultPage from '../pages/SearchResultPage.vue'
import UserLoginPage from '../pages/UserLoginPage.vue'
import TeamCreatePage from '../pages/TeamCreatePage.vue'
import TeamUpdatePage from '../pages/TeamUpdatePage.vue'
//定义路由
const routes = [
  { path: '/', component: Index,title: "找伙伴" },
  { path: '/team', component: TeamPage,title: "找队伍" },
  { path: '/user', component: UserPage,title: "用户主页" },
  { path: '/user/update', component: UserUpdatePage,title: "用户信息" },
  { path: '/user/team/join',component: UserTeamJoinPage,title: "加入的队伍" },
  { path: '/user/team/create',component: UserTeamCreatePage,title: "创建的队伍" },
  { path: '/search', component: SearchPage,title: "搜索" },
  { path: '/user/edit', component: UserEditPage,title: "编辑信息" },
  { path: '/user/list', component: SearchResultPage,title: "搜索结果" },
  { path: '/user/login', component: UserLoginPage,title: "登录" },
  { path: '/team/add', component: TeamCreatePage,title: "创建队伍" },
  { path: '/team/update', component: TeamUpdatePage,title: "修改队伍" },
]
export default routes;