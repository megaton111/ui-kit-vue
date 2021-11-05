import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main';
import Button from '../views/Button';
import Input from '../views/Input';
import Checkbox from '../views/checkbox/checkbox';
import Accordion from '../views/Accordion';
import DragLayer from '../views/DragLayer';
import Sub from '../views/Sub';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/main", component: Main } ,
    { path: "/button", component: Button } ,
    { path: "/input", component: Input } ,
    { path: "/checkbox", component: Checkbox } ,
    { path: "/accordion", component: Accordion } ,
    { path: "/draglayer", component: DragLayer } ,
    { path: "/sub", component: Sub } ,
  ]
});

export default router; 