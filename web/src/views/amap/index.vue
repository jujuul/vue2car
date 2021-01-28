<!--
 * @Author: your name
 * @Date: 2021-01-21 20:44:24
 * @LastEditTime: 2021-01-28 23:00:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\views\amap\index.vue
-->
<template>
  <div class="amap-wrap">
    <el-amap vid="amapContainer" :events="events" class="amap-demo"> </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map: null,
      zoom: 12,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom,
      });
    });
  },
  methods: {},
};
</script>

<style lang='scss'>
.amap-wrap {
  height: 100vh;
}
</style>
