<!--
 * @Author: your name
 * @Date: 2021-01-19 22:07:08
 * @LastEditTime: 2021-01-21 22:43:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\views\index\index.vue
-->
<template>
  <div>
    <!-- cars data渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <Navbar />
    <!-- 会员 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar";
export default {
  name: "Index",
  components: { Map, Cars, Navbar },
  data() {
    return {};
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },

  methods: {},
};
</script>

<style lang='scss'>
#children-view {
  position: fixed;
  top: 0;
  right: -600px;
  bottom: 0;
  width: 410px;
  background-color: #34393f;
  z-index: 101;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0px;
  }
}
</style>
