import Vue from 'vue';

const toastLayerMethods = {

  showToastLayer: ( showLayer ) => {

    let
        parentLayer = event.target.closest('.toast-layer-point')
    ,   targetLayer = document.getElementById(showLayer)
    ;
    
    console.log('parentLayer --------? :', parentLayer );
    console.log('targetLayer --------? :', targetLayer );
    
    if (
      parentLayer == null || targetLayer == null || targetLayer.classList.contains('show')
    ) return;

    let
        parentX = parentLayer.getBoundingClientRect().left                              // 부모요소 위치값 X
    ,   parentR = parentLayer.getBoundingClientRect().right                            // 부모요소 위치값 Right
    ,   parentY = parentLayer.getBoundingClientRect().top                                // 부모요소 위치값 Y
    // ,   parentB = parentLayer.getBoundingClientRect().bottom                          // 부모요소 위치값 Bottom
    ,   parentWidth = parentLayer.getBoundingClientRect().width                        // 부모요소 높이값
    ,   parentHeight = parentLayer.getBoundingClientRect().height                        // 부모요소 높이값
    ,   targetLayerWidth = window.getComputedStyle(targetLayer).width.replace(/[^0-9]/g, "")   // 레이어 Width
    ,   targetLayerHeight = targetLayer.offsetHeight
    ,   maxZindex = null
    ,   allToastLayer = document.querySelectorAll(".drag-layer")
    ,   openX = null
    ,   openY = null
    ,   checkBottom = null 
    ,   checkRight = null 
    ,   winHeight = null 
    ,   winWidth = null 
    ;
    
    // console.log('parentLayer : ', parentLayer.getBoundingClientRect()); 
    // console.log('parentX :', parentX); 
    // console.log('parentY :', parentY); 

    // 레이어 높이 체크하여 하단에 위치한 경우 위로 뜨게 하기 위한 코드 시작
    // if (targetLayer.classList.contains('show')) return;  //위에서 같이 처리함

    maxZindex = Math.max.apply(
      null,
      Array.prototype.map.call(allToastLayer, (item) => Number(window.getComputedStyle(item).zIndex) ) 
    );

    targetLayer.classList.add("show");
    
    targetLayerHeight = targetLayer.offsetHeight;
    targetLayerWidth = targetLayer.offsetWidth; 
    winHeight = window.innerHeight;
    winWidth = window.innerWidth;
    checkBottom = winHeight - parentY - parentHeight;
    checkRight = winWidth - parentR + parentWidth  ;
    
    console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
    console.log('레이어 가로 사이즈 :', targetLayerWidth );
    console.log('레이어 세로 사이즈 :', targetLayerHeight );
    console.log('Window 세로 사이즈 :' , winHeight )
    console.log('Window 가로 사이즈 :' , winWidth )
    console.log('부모 영역 X 좌표 :' , parentR )
    console.log('부모 영역 Y 좌표 :' , parentY )
    console.log('부모 영역 가로 사이즈 :', parentWidth);
    console.log('부모 영역 세로 사이즈 :', parentHeight);
    console.log('부모와 화면 하단 사이 공간 ==============> :', checkBottom)
    console.log('부모와 화면 우측 사이 공간 ==============> :', checkRight)
    
    if (targetLayerHeight >  checkBottom) {
      openX = parentX;
      openY = parentY;
      if (targetLayerWidth > checkRight) {
        targetLayer.style.transform = 'translate(' + -(targetLayerWidth - parentWidth) + 'px , calc( -100% - 5px ) )';
        console.log( '우측에 공간이 없어 레이어를 좌측으로 띄웁니다.' ); 
      } else {
        targetLayer.style.transform = 'translateY( calc( -100% - 5px ) )'; 
      }
      console.log( '아래에 공간이 없어 레이어를 위로 띄웁니다.' ); 
    } else if (targetLayerWidth > checkRight) { // 우측에 공간이 없을 경우
      openX = parentX;
      openY = parentY + parentHeight + 5;
      targetLayer.style.transform = 'translateX('+ -(targetLayerWidth - parentWidth) +'px )'; 
      console.log( '우측에 공간이 없어 레이어를 좌측으로 띄웁니다.' ); 
    } else {
      openX = parentX;
      openY = parentY + parentHeight + 5;
      console.log( '레이어를 아래로 띄웁니다.' ); 
    }
    console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

    targetLayer.style.left = openX + 'px';
    targetLayer.style.top = openY + 'px';
    targetLayer.style.zIndex = maxZindex + 1;

    // 레이어 높이 체크하여 하단에 위치한 경우 위로 뜨게 하기 위한 코드 끝

    // 4579 7269 8608 2025
    // 0425
    // 057

    // if (targetLayer.classList.contains('show')) return;

    // maxZindex = Math.max.apply(
    //   null,
    //   Array.prototype.map.call(allToastLayer, (item) =>
    //     Number(window.getComputedStyle(item).zIndex)
    //   )
    // );

    // if (directive == 'bottomleft') {

    //   console.log('directive -----> bottomleft'); 
    //   openX = parentR - Number(targetLayerWidth);
    //   openY = parentY + parentHeight + 5;
    // } else if (directive == 'topright') {
    //   console.log('directive -----> topright'); 
    //   openX = parentX;
    //   openY = parentY;
    //   targetLayer.style.transform = 'translateY( calc( -100% - 5px ) )'; 
    // } else if (directive == 'topleft') {
    //   console.log('directive -----> topleft'); 
    //   openX = parentR - Number(targetLayerWidth);
    //   openY = parentY;
    //   targetLayer.style.transform = 'translateY( calc( -100% - 5px ) )'; 
    // } else {
    //   console.log('directive -----> bottomright'); 
    //   openX = parentX;
    //   openY = parentY + parentHeight + 5;
    // }

    // console.log('targetLayer : --------------- > ', targetLayer); 
    // console.log('targetLayerHeight : --------------- > ', targetLayerHeight); 
    // console.log('parentX :', parentX); 
    // console.log('parentR :', parentR); 
    // console.log('----------------> targetLayerWidth :', targetLayerWidth); 

    // targetLayer.style.left = openX + 'px';
    // targetLayer.style.top = openY + 'px';
    // targetLayer.style.zIndex = maxZindex + 1;
    // targetLayer.classList.add("show");
  },
  hideToastLayer: () =>  {
    let targetLayer = event.target.closest('.toast-layer');
    if (targetLayer.classList.contains('show')) {
      targetLayer.classList.remove("show");
      targetLayer.style.transform = null; 
    }
    // let targetLayer = document.getElementById(target);
    // targetLayer.classList.remove("show");
  }

}

Vue.prototype.$showToastLayer = toastLayerMethods.showToastLayer;
Vue.prototype.$hideToastLayer = toastLayerMethods.hideToastLayer;