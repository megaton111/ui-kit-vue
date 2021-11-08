import Vue from 'vue';

const toastLayerMethods = {

  showToastLayer: (...target) => {

    console.log('showToastLayer inininininin'); 

    let
        targetLayer = document.getElementById(target[0])                                 // 레이어의 기준이되는 부모요소
    ;

    if (targetLayer.classList.contains('show')) return;
    targetLayer.classList.add("show");
  },
  hideToastLayer: (event) => {
    // console.log('hideTarget inininininin', target); 
    // let targetLayer = document.getElementById(target);
    // targetLayer.classList.remove("show");
    console.log('----------------------', event.target);
    let targetLayer = event.target.closest('.toast-layer'); 
    targetLayer.classList.remove("show");
    targetLayer.style.left = null ;
    targetLayer.style.top = null ;

    console.log('----------------------', targetLayer);
  }

}

Vue.prototype.$showToastLayer = toastLayerMethods.showToastLayer;
Vue.prototype.$hideToastLayer = toastLayerMethods.hideToastLayer;