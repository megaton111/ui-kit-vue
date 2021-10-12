import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // 글로벌로 관리될 상태 값
    title: 'Hello Vue Js',
    counter : 0 
  },
  getters: {  // 데이터를 가져오기만 할 수 있고 변경은 못한다.
    getTitle: state => state.title ,
  },
  mutations: {
    increment : state => ( state.counter += 1 ) ,
    decrement : state => ( state.counter -= 1 )
  },
  actions: {
    addCounter : context => context.commit( 'increment' ) ,
    subCounter : context => context.commit( 'decrement' )
  }
  
}); 