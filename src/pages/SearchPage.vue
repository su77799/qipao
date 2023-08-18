<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-03 08:50:50
 * @LastEditors: su99977 2267908873@qq.com
 * @LastEditTime: 2023-08-08 08:29:58
 * @FilePath: \伙伴匹配系统\qipao\src\pages\SearchPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: su77799 2267908873@qq.com
 * @Date: 2023-08-03 08:50:50
 * @LastEditors: su77799 2267908873@qq.com
 * @LastEditTime: 2023-08-04 08:58:27
 * @FilePath: \伙伴匹配系统\qipao\src\pages\Search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <form action="/">
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    </form>
    <van-divider content-position="left">已选标签</van-divider>
    <van-row gutter="10">
      <van-col span="4" v-for="(tag,index) in activeIds" :key="index">
        <van-tag closeable size="small" type="primary" @close="doClose(tag)">
          {{tag}}
        </van-tag>
      </van-col>
    </van-row>
    <div v-if="activeIds.length === 0">请选择标签</div>
    
    <van-divider content-position="left">选择标签</van-divider>
    <!-- 标签列表 -->
    <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
    />
    <div style="padding:12px;">
      <van-button block @click="toSearchResult" type="primary">搜索</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import { useRouter } from 'vue-router'
const router = useRouter();
const originTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '小学', id: '小学' },
      { text: '中学', id: '中学' },
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' },
      { text: '大四', id: '大四' },
    ],
  },
  {
    text: '目标',
    children: [
      { text: '春招', id: '春招' },
      { text: '秋招', id: '秋招' },
      { text: '考研', id: '考研' },
    ],
  },
  {
    text: '状态',
    children: [
      { text: '打工中', id: '打工中' },
      { text: '求职', id: '求职' },
      { text: '考研', id: '考研' },
    ]
  },
  {
    text: '方向',
    children: [
      { text: '前端', id: '前端' },
      { text: '后端', id: '后端' },
      { text: '算法', id: '算法' },
      { text: '测试', id: '测试'}
    ]
  }
];
let tagList = ref(originTagList);
const searchText = ref('');
//搜索标签
const onSearch = () => {
  //直接用item过滤会影响originTagList，这样重构一下，就不会了
  tagList.value = originTagList.map(item => {
    const parentTag = {...item}
    const childTag = [...item.children];
    parentTag.children = childTag.filter(item => item.text.includes(searchText.value));
    return parentTag;    
  })
};
//取消搜索
const onCancel = () => {
  searchText.value = "";
  tagList.value = originTagList;
};
//已选标签
const activeIds = ref([]);
const activeIndex = ref(0);
//标签列表

//关闭标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter((item)=>{
    return item !== tag;
  })
}
//以用户选好的标签为搜索条件，跳转到用户搜索结果页面
const toSearchResult = () => {
  router.push({
    path: '/user/list',
    query: {
      tags:activeIds.value
    }
  })
}
</script>

<style>

</style>