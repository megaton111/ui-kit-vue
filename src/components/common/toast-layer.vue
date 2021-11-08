<template>
  <div class="toast-layer" :style="this.styleObject" >
    <div class="header" @mousedown.prevent="mouseDownEvent">
      <h1 class="title">{{ this.$props.title }}</h1>
      <button class="close" type="button" @click="$hideToastLayer">x</button>
    </div>
    <div class="body">
      <!-- <slot name="body"></slot> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'ToastLayer' , 
    data () {
      return {
        styleObject : {
          width : '700px' , 
        } ,
        zIdx: 1000,
        positions: {
          clientX: undefined,
          clientY: undefined,
          moveX: 0,
          moveY: 0,
        },
      }
    } ,
    methods : {
      mouseDownEvent: function (e) {
        console.log("mouseDownEvent in");

        let allLayer = document.querySelectorAll(".toast-layer");

        let maxZ = Math.max.apply(
          null,
          Array.prototype.map.call(allLayer, (item) =>
            Number(window.getComputedStyle(item).zIndex)
          )
        );
        this.zIdx = maxZ + 1;
        this.$el.style.zIndex = this.zIdx;

        console.log( '------------>', this.$el ) ; 
        console.log( '------------>', this.$el.getBoundingClientRect().left ) ; 

        this.positions.clientX = e.clientX;
        this.positions.clientY = e.clientY;

        // console.log( 'clientX :', e.clientX , 'clientY :', e.clientY ) ; 

        // move,up 이벤트 적용
        document.onmousemove = this.elementDrag;
        document.onmouseup = this.closeDragElement;
      },
      elementDrag: function (e) {
        e.preventDefault();
        this.positions.moveX = this.positions.clientX - e.clientX;
        this.positions.moveY = this.positions.clientY - e.clientY;
        this.positions.clientX = e.clientX;
        this.positions.clientY = e.clientY;
        this.$el.style.top = this.$el.offsetTop - this.positions.moveY + "px";
        this.$el.style.left = this.$el.offsetLeft - this.positions.moveX + "px";

        // console.log( 'moveX :', this.positions.moveX, 'moveY : ', this.positions.moveY )
      },
      closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      },
    } ,
    props : {
      title : String , 
      size : String, 
    } ,
    created () {
      console.log("-------------------------" , this.styleObject.width ) ; 
      console.log("-------------------------" , this.$props.size ) ; 
      this.styleObject.width = this.$props.size ? this.$props.size +'px' : this.styleObject.width ; 
    }
  }
</script>

<style lang="scss" scoped>
  
  .toast-layer{
    
    display: none;
    position: fixed;
    left: 0px;
    top: 100% ;
    transform: translateY( 10px );
    border:1px solid #333 ; 
    background-color: #fff;
    z-index: 1000;
    flex-direction: column;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    opacity: 0 ;
    
    &.show{
      display: flex;
      opacity: 1 ;
      transition-property: opacity ;
      transition-delay: 0.5s ;
      transition-duration: 0.1s ;
    }
    .header{
      display: flex;
      height: 34px ;
      align-items: center ;
      padding:0 10px; 
      background-color: #333;
      cursor: pointer;
      .title {
        display: flex;
        margin-bottom: 0 ;
        font-size:12px; 
        color:#fff ; 
      }
      .close{
        display: inline-flex;
        padding:5px; 
        margin-left: auto ;
        cursor: pointer;
        background-color:transparent ;
        border: 0;
        font-size:13px;
        color:#fff ; 
      }
    }
    .body{
      padding:10px;
    }

  }
</style>