/*
 * @Author: your name
 * @Date: 2021-01-19 21:35:44
 * @LastEditTime: 2021-01-19 23:07:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cars\web\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Index",
  component: Home,
  children: [{
    path: '/user',
    name: 'User',
    component: () => import("../views/user/index")
  }]
}, ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;