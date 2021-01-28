<!--
 * @Author: your name
 * @Date: 2021-01-21 20:44:24
 * @LastEditTime: 2021-01-28 23:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\views\cars\index.vue
-->
<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="" alt="" />
          <div class="name"></div>
        </h4>
        <p>qwe</p>
      </header>
      <div class="cars-content"></div>
      <footer></footer>
    </section>
    <span @click="user">汽车列表</span>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  methods: {
    user() {
      this.$router.push({
        name: "User",
      });
    },
  },
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>
