import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main';
import Button from '../views/Button';
import Input from '../views/Input';
import Sub from '../views/Sub';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/main", component: Main } ,
    { path: "/button", component: Button } ,
    { path: "/input", component: Input } ,
    { path: "/sub", component: Sub } ,
  ]
});

export default router; 