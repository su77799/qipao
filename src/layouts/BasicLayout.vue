<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-02 12:28:20
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-07 14:58:11
 * @FilePath: \伙伴匹配系统\qipao\src\components\layouts\BasicLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <div id="content">
    <router-view></router-view>
    </div>

    <!-- 底部栏 -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
      <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import {showToast} from 'vant'
import {useRouter} from 'vue-router'
import routes from '../config/route';
import {ref} from 'vue'
const router = useRouter();
const title = ref("伙伴匹配")
const onClickLeft = () => {
  //点击顶部返回标，返回上一个页面
  router.back();
};
const onClickRight = () => {
  router.push('/search')
};
// const active = ref('index');
const onChange = (index) => showToast(`标签 ${index}`);
router.beforeEach((to,from)=>{
  title.value = routes.find((item)=>{
    return item.path === to.path;
  }).title;
})
</script>

<style>

</style>