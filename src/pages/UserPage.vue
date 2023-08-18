<!--
 * @Author: su99977 2267908873@qq.com
 * @Date: 2023-08-07 07:18:48
 * @LastEditors: su99977 2267908873@qq.com
 * @LastEditTime: 2023-08-08 08:40:23
 * @FilePath: \伙伴匹配系统\qipao\src\pages\UserPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>
      <img class="pic" :src="userInfo.avatarUrl" alt="pic">
    </div>
    <van-cell title="当前用户" :value="userInfo.username" size="large" />
    <van-cell title="用户信息" is-link to="/user/update" />
    <van-cell title="已创建的队伍" is-link to="/user/team/create" />
    <van-cell title="已加入的队伍" is-link to="/user/team/join" />
  </div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {onMounted} from 'vue'
const store = useStore();
const router = useRouter();
//已登录的用户信息
const userInfo = store.state.userData;
onMounted(()=>{
  if(userInfo.id === 0) {
    router.push({
      path: '/user/login'
    })
  }
})
</script>

<style scoped>
.pic {
  width: 200px;
  height: auto;
  border-radius: 50%;
  padding: 0 87px;
}
</style>