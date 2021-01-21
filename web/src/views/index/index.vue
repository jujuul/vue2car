<template>
  <div>
    <!-- cars data渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 会员 -->
    <div id="children-view" :class="[show ? 'open' : '']">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "../amap/index";
import Cars from "../cars/index";
export default {
  name: "Index",
  components: { Map, Cars },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        const routerName = newVal.name;
        this.show = routerName === "Index" ? false : true;
      },
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
