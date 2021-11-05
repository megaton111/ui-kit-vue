<template>
  <div class="toast-layer" :style="this.styleObject" >
    <div class="header">
      <h1 class="title">{{ this.$props.title }}</h1>
      <button class="close" type="button" @click="$hideTarget">x</button>
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
        }
      }
    } , 
    props : {
      title : String , 
      size : String, 
    } ,
    created () {
      console.log("-------------------------" , this.styleObject) ; 
    }
  }
</script>

<style lang="scss" scoped>
  .toast-layer{
    display: none;
    &.show{ display: block; }
    .close{
      cursor: pointer;
    }
  }
</style>