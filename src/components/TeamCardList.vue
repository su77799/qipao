<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-05 14:12:29
 * @LastEditors: 25328wurao 2267908873@qq.com
 * @LastEditTime: 2023-08-18 17:24:21
 * @FilePath: \伙伴匹配系统\qipao\src\components\teamCardList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="team" style="padding-bottom: 80px">
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
      v-show="team.membersId.includes(userId) || team.status !== '私密' "
      v-for="team in props.teamList"
      :key="team.id"
      :desc="team.description"
      :title="team.name"
      thumb="https://pic1.zhimg.com/80/v2-98740680ae4b18bfa57601d7b7a2f5bb_1440w.webp?source=1940ef5c"
    >
      <template #tags>
        <van-tag plain type="primary" style="marginRight:4px;marginTop:6px">{{team.status}}</van-tag>
      </template>
      <template #bottom>
        <div style="padding-top:4px">
          现有成员：{{team.membersId}}
        </div>
        <div style="padding-top:2px">
          最大人数：{{team.maxNum}}
        </div>
      </template>
      <template #footer>
        <van-button v-if="team.createUserId === userId" plain type="small" @click="updateTeam(userId,team)">更新队伍</van-button>
        <van-button v-if="!team.membersId.includes(userId)" plain type="small" @click="addTeam(team)">加入队伍</van-button>
        <van-button v-if="team.membersId.includes(userId)" plain type="small" @click="quitTeam(userId,team)">退出队伍</van-button>
        <van-button v-if="team.createUserId === userId" plain type="small" @click="deleteTeam(userId,team)">解散队伍</van-button>
      </template>
    </van-card>
    <van-empty v-if="props.teamList.length === 0" description="空" />
    <van-dialog v-model:show="showPasswordDialog" title="请输入密码" show-cancel-button>
      <van-field v-model="password" placeholder="请输入密码" />
    </van-dialog>

  </div>
</template>

<script setup lang="ts">
import {TeamType} from '../models/team'
import {showToast} from 'vant'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { computed,ref,onMounted } from 'vue';
const store = useStore();
const router = useRouter();
const showPasswordDialog = ref(false)
const password = ref('')
const userId = store.state.userData.id;
const  loading= ref(false);
onMounted(() => {
  loading.value = false;
});
interface TeamCardListProps {
  teamList: TeamType[];
}
const props = defineProps<TeamCardListProps>();
//用户加入队伍
const addTeam = (team) => {
  if(team.membersId.length < team.maxNum) {
    team.status === '加密' ? showPasswordDialog.value = true : '';
    if(team.status === '加密' && password.value === team.password) {
      store.dispatch('userAddTeam',team);
      showToast('加入成功');
      return ;
    }
    if(team.status !== '加密') {
      store.state.teamList.forEach((item,idx)=>{
        if(item.id === team.id && !item.membersId.includes(userId)) {
          store.commit('USERADDTEAM',{idx,userId});
          showToast('加入成功');
        }
      })
    }
  }else{
    showToast('加入失败')
  }
}
const updateTeam = (userId,team) => {
  if(team.createUserId === userId) {
    router.push({
      path: '/team/update',
      query:{teamId: team.id}
      }
    )
  }
}
//退出队伍
const quitTeam = (userId,team) => {
  if(team.membersId.includes(userId)) {
    team.membersId = team.membersId.filter((item) => {
      return item !== userId;
    })
    showToast('退队成功')
  }
}
//解散队伍
const deleteTeam = (userId,team) => {
  if(team.createUserId === userId) {
    store.state.teamList = store.state.teamList.filter((item) => {
      return item.id !== team.id;
    })
    showToast('解散成功')
    router.back()
  }
}
</script>

<style scoped>
#team :deep(.van-image__img) {
  height: 106px;
  object-fit: unset;
}
</style>