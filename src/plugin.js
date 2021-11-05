import Vue from 'vue';

const toastLayerMethods = {

  showTarget: (...target) => {

    console.log('showTarget inininininin'); 

    let
        targetLayer = document.getElementById(target[0])                                 // 레이어의 기준이되는 부모요소
    ;

    if (targetLayer.classList.contains('show')) return;
    targetLayer.classList.add("show");
  },
  hideTarget: (event) => {
    // console.log('hideTarget inininininin', target); 
    // let targetLayer = document.getElementById(target);
    // targetLayer.classList.remove("show");
    console.log('----------------------', event.target);
    let targetLayer = event.target.closest('.toast-layer'); 
    targetLayer.classList.remove("show");
    console.log('----------------------', targetLayer);
  }

}

Vue.prototype.$showTarget = toastLayerMethods.showTarget;
Vue.prototype.$hideTarget = toastLayerMethods.hideTarget;