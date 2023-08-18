<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-02 15:40:19
 * @LastEditors: su99977 2267908873@qq.com
 * @LastEditTime: 2023-08-08 08:34:57
 * @FilePath: \伙伴匹配系统\qipao\src\pages\TeamPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" @search="onSearch" />
    <van-button class="createTeam" type="primary" icon="plus" @click="toCreateTeam"></van-button>
    <team-card-list :team-list="teamList"></team-card-list>
  </div>
</template>

<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import TeamCardList from '../components/TeamCardList.vue'
import {useStore} from 'vuex'
import { onMounted,ref } from 'vue';
const store = useStore();
const route = useRoute();
const router = useRouter();
const toCreateTeam = () => {
  router.push('/team/add')
}
const teamList = store.state.teamList;
const searchVal = ref('');
const onSearch = () => {
  [].forEach.call(teamList,(item,idx)=>{
    if((item.id !== Number(searchVal.value) && !item.description.includes(searchVal.value) && !item.name.includes(searchVal.value))) {
      teamList.splice(idx,1);
    }
  })
}
</script>

<style scoped>
.createTeam {
  position: fixed;
  bottom: 80px;
  right: 12px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 99;
}
</style>