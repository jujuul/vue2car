/*
 * @Author: your name
 * @Date: 2021-01-20 21:06:29
 * @LastEditTime: 2021-01-20 21:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\plugin\aMap.js
 */
import Vue from "vue";
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "08335014c84a922bf4433162932282b6",
  plugin: [
    "Autocomplete",
    "PlaceSearch",
    "Scale",
    "OverView",
    "ToolBar",
    "MapType",
    "PolyEditor",
    "AMap.CircleEditor",
  ],
  v: "1.4.4",
});
