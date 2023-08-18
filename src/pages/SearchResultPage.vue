<template>
  <div>
    <user-card-list :user-list="searchResult"></user-card-list>
  </div>
</template>

<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'
import {onBeforeMount, onMounted, ref} from 'vue'
import { useStore } from "vuex"
import UserCardList from '../components/UserCardList.vue'
const store = useStore();
const route = useRoute();
const { tags } = route.query;
const userList = ref([]);
//测试数据
const mockUser = store.state.userSearchResulList;
//过滤所有数据，找到符合用户搜索信息的数据
const searchResult = mockUser.reduce((acc,curr)=>{
    [].forEach.call(tags,(item)=>{
      if(curr.tags.includes(item)) {
        if(!acc.includes(curr)) acc.push(curr);
      }
    })
    return acc;
  },[]);

</script>

<style>

</style>