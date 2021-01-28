<!--
 * @Author: your name
 * @Date: 2021-01-21 22:22:34
 * @LastEditTime: 2021-01-28 23:06:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\components\navbar\index.vue
-->
<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-help"></i></li>
      <li>
        <a href="javascript:void()" class="select-car-btn"> 选择车辆 </a>
      </li>
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
  .icon {
    margin: 0 17px;
    vertical-align: middle;
    cursor: pointer;
  }
}
.select-car-btn {
  display: inline-block;
  height: 80px;
  width: 240px;
  margin: 0 17px;
  line-height: 84px;
  text-align: center;
  border-radius: 100px;
  color: #fff;
  background-color: $color_main;
  font-size: 26px;
  font-weight: 300;
}
</style>
