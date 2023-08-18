<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-03 08:23:16
 * @LastEditors: 25328wurao 2267908873@qq.com
 * @LastEditTime: 2023-08-18 17:17:07
 * @FilePath: \伙伴匹配系统\qipao\src\pages\UserPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username)"/>
    <van-cell title="账号" is-link to="/user/edit" :value="user.userAccount" @click="toEdit('userAccount','账号',user.userAccount)" />
    <van-cell title="头像" to="/user/edit" is-link @click="toEdit('avatarUrl','头像',user.avatarUrl)">
      <img :src="user.avatarUrl" style="width:50px; height: 50px" alt="pic">
    </van-cell>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender"  @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)" />
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)" />
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime" />
  </div>
</template>

<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'
import { useStore } from "vuex"
const store = useStore();
const router = useRouter();
const user = store.state.userData;
//跳转到用户编辑页面
const toEdit = (editKey: string,username: string,currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      username,
      currentValue
    }
  })
}

</script>

<style>

</style>