<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-05 17:18:45
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 06:34:03
 * @FilePath: \伙伴匹配系统\qipao\src\pages\TeamCreatePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="updateTeamData.name"
          name="name"
          label="队伍名"
          placeholder="请输入队伍名称"
          :rules="[{ required: true, message: '请填写队伍名称' }]"
        />
        <van-cell-group >
        <van-field
          v-model="updateTeamData.description"
          rows="4"
          autosize
          label="队伍描述"
          type="textarea"
          placeholder="请填写队伍的描述文字"
        />
        </van-cell-group>
        <van-field name="stepper" label="最大人数">
          <template #input>
            <van-stepper v-model="updateTeamData.maxNum" max=20 min=2 />
          </template>
        </van-field>
        <van-field name="radio" label="队伍状态">
          <template #input>
            <van-radio-group v-model="updateTeamData.status" direction="horizontal">
              <van-radio name="公开">公开</van-radio>
              <van-radio name="私有">私有</van-radio>
              <van-radio name="加密">加密</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-if="updateTeamData.status === '加密' "
          v-model="updateTeamData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          保存
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
import {showToast} from 'vant'
const store = useStore();
const route = useRoute();
const router = useRouter();
const updateTeamIdx = ref(0);
//修改之前的用户信息
//注意这里取第0项，updateTeamInfo是个数组
const updateTeamInfo = store.state.teamList.filter((item,idx)=>{
   updateTeamIdx.value= idx;
  return item.id === Number(route.query.teamId);
});
//需要用户填写的表单数据
const updateTeamData = ref({...updateTeamInfo[0]})
const onSubmit = () => {
  store.state.teamList.splice(updateTeamIdx.value,1,updateTeamData.value);
  showToast('修改成功');
  router.replace('/team');
}
</script>

<style>

</style>