import Vue from 'vue'
import App from './App.vue'
import router from './router/index'; 
import store from './store/index'; 
import UniqueId from 'vue-unique-id';
import * as plugin from './plugin.js'
console.log('###### main.js call ########');

Vue.config.productionTip = false;
Vue.use(UniqueId);
Vue.use(plugin);

import "@/assets/scss/_index.scss" ; 

new Vue({
  router ,
  store ,
  render: h => h(App) ,
}).$mount('#app')
