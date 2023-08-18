<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-05 14:12:29
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 14:36:36
 * @FilePath: \伙伴匹配系统\qipao\src\components\UserCardList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style="padding-bottom: 80px">
    <van-skeleton :loading="loading">
      <template #template>
        <div :style="{ display: 'flex', width: '100%' }">
          <van-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <van-skeleton-paragraph row-width="60%" />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </div>
      </template>
    </van-skeleton>
    <van-card
      :key="userInfo.id"
      :desc="userInfo.profile"
      :title="`${userInfo.username} (${userInfo.planetCode})`"
    >
      <template #tags>
        <van-tag v-for="(tag,index) in userInfo.tags" :key="index" plain type="primary" style="marginRight:4px;marginTop:6px">{{tag}}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">联系我</van-button>
      </template>
    </van-card>
    <van-card
      v-for="user in props.userList"
      :key="user.id"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
    >
      <template #tags>
        <van-tag v-for="(tag,index) in user.tags" :key="index" plain type="primary" style="marginRight:4px;marginTop:6px">{{tag}}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">联系我</van-button>
      </template>
    </van-card>
    <van-empty v-if="props.userList.length === 0" description="空" />
  </div>
</template>

<script setup lang="ts">
import {UserType} from '../models/user'
import { useStore } from "vuex"
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';
const  loading= ref(false);
onMounted(() => {
  loading.value = false;
});
const store = useStore();
const router = useRouter();
interface UserCardListProps {
  userList: UserType[];
}
const props = defineProps<UserCardListProps>();
const userInfo = store.state.userData;
</script>

<style>

</style>