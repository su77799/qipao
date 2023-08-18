<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-02 15:39:28
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 15:21:05
 * @FilePath: \伙伴匹配系统\qipao\src\pages\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-cell center title="心动模式">
      <template #right-icon>
        <van-switch v-model="isMatchModel" />
      </template>
    </van-cell>
    <user-card-list v-if="!isMatchModel" :user-list="totalUserList"></user-card-list>
    <user-card-list v-if="isMatchModel" :user-list="matchedUserList"></user-card-list>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import {useRoute} from 'vue-router'
import { useStore } from "vuex"
import UserCardList from '../components/UserCardList.vue'
const store = useStore();
const route = useRoute();
const totalUserList = store.state.userSearchResulList;
const isMatchModel = ref(false);
const userId = store.state.userData.id;
const mockUser = store.state.userSearchResulList;
//过滤所有数据，找到符合用户搜索信息的数据
const matchedUserList = mockUser.reduce((acc,curr)=>{
    [].forEach.call(store.state.userData.tags,(item)=>{
      if(curr.tags.includes(item) && curr.id !== userId) {
        if(!acc.includes(curr)) acc.push(curr);
      }
    })
    return acc;
  },[]);

</script>

<style>

</style>