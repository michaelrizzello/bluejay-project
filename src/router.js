import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PlayerList from "./views/PlayerList.vue";
import PlayerProfile from "./views/PlayerProfile.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/team", name: "team", component: PlayerList, props:true },
    { path: "/player", name: "player", component: PlayerProfile, props:true },
    { path: "*", redirect: "/" } // catch all use case
  ]
});
