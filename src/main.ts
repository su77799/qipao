/*
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-02 11:40:18
 * @LastEditors: 25328wurao 2267908873@qq.com
 * @LastEditTime: 2023-08-18 16:14:20
 * @FilePath: \伙伴匹配系统\qipao\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import * as VueRouter from 'vue-router'
import routes from './config/route';
import store from './store'
import './api/mock'
const app = createApp(App)
app.use(Vant)
//创建router实例
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(),
  routes, // `routes: routes` 的缩写
})

app.use(router)
app.use(store)
app.mount('#app')
