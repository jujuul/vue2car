<!--
 * @Author: your name
 * @Date: 2021-01-21 22:22:34
 * @LastEditTime: 2021-01-21 23:36:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\components\navbar\index.vue
-->
<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
      <li></li>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped >
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  bottom: 86px;
  text-align: center;
  li {
    display: inline-block;
  }
}
</style>
