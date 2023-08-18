<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-05 08:42:46
 * @LastEditors: 25328wurao 2267908873@qq.com
 * @LastEditTime: 2023-08-18 17:30:29
 * @FilePath: \伙伴匹配系统\qipao\src\pages\UserLoginPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="userAccount"
      name="userAccount"
      label="账号"
      placeholder="请输入账号"
      :rules="[{ required: true, message: '请填写账号' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="请输入密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>

</template>

<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import {ref,nextTick} from 'vue'
import {showToast} from 'vant'
import { useStore } from "vuex"
import { getUserData } from '../api'
const store = useStore();
const userAccount = ref('');
const password = ref('');
const router = useRouter();
const route = useRoute();
//所有用户的账号
const onSubmit = () => {
  store.dispatch('setUserSearchResultList');
  store.dispatch('setTeamList');
  if(userAccount.value && password.value) {
    if(store.state.userSearchResulList.reduce((acc,curr)=>{
      acc.push(curr.userAccount);
      return acc;
    },[]).includes(userAccount.value)) {
      store.dispatch('setUserData', userAccount.value)
      showToast('登录成功');
      router.replace({
        path: '/',
      })
    }
  }
}
</script>

<style>

</style>