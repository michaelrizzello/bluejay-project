import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.$API = 'https://statsapi.mlb.com';
Vue.prototype.$TOKEN = 'RM4QlKbrLm90FMBbxMZrM7HHk7d6sMUy712C8SaH';


var JaysApp = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");