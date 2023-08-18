<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-07 07:18:38
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 07:41:20
 * @FilePath: \伙伴匹配系统\qipao\src\pages\UserTeamCreate.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <team-card-list :team-list="userTeamCreateInfo"></team-card-list>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {useStore} from 'vuex'
import TeamCardList from '../components/TeamCardList.vue'
const store = useStore();
const userTeamCreateInfo = store.getters.userTeamCreateInfo;

</script>

<style>

</style>