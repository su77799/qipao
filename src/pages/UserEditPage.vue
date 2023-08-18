<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-03 15:27:02
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 15:29:56
 * @FilePath: \伙伴匹配系统\qipao\src\pages\UserEditPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="editInfo.currentValue"
        :name="editInfo.editKey"
        :label="editInfo.username"
        :placeholder="`请输入${editInfo.username}`"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {showToast} from 'vant'
const store = useStore();
const route = useRoute();
const router = useRouter();
//要改的用户信息
const editInfo = ref({
  //要编辑的项，例：username
  editKey: route.query.editKey,
  //要编辑的项的名称，例：昵称
  username: route.query.username,
  //要编辑的项的目前的值，例：小柒
  currentValue: route.query.currentValue
})
const onSubmit = () => {
  // todo：将editKey，username，currentValue 发送给后台
  store.dispatch('setUserInfo',{key:route.query.editKey,value:editInfo.value.currentValue})
  router.back();
  showToast('修改成功');
};
</script>

<style>

</style>