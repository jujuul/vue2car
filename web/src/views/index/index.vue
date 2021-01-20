<!--
 * @Author: your name
 * @Date: 2021-01-19 22:07:08
 * @LastEditTime: 2021-01-20 21:17:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\views\index\index.vue
-->
<template>
  <div class="amap-wrap">
    <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo">
    </el-amap>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      zoom: 16,
      center: [116.404765, 39.918052],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss'>
.amap-wrap {
  height: 100vh;
}
</style>
