<template>
  <div class="toggle type-1" :class="{ 'disabled' : this.$props.disabled, 'type-switch' : this.$props.switch }">
    <input type="radio" :id="$id('radio')" :disabled="this.$props.disabled" :name="this.$props.name" :checked="this.$props.checked" />
    <label :for="$id('radio')">{{ this.$props.title ? this.$props.title : '타이틀을 입력하세요'  }}</label>
  </div>
</template>

<script>
  export default {
    name : 'radioToggle' , 

    /* Props 데이터 검증 및 기본 값 설정 방법
      https://vuejs.org/v2/guide/components-props.html#Prop-Validation */
    props : {
      title : String , 
      disabled: {
        type: Boolean,
        default: false
      } ,
      name : String ,
      checked : {
        type : Boolean , 
        default : false 
      },
      switch : {
        type : Boolean , 
        default : false 
      }
    } ,
    data () {
      return {
      }
    } , 
    created(){
      // console.log( 'disabled : ', this.$props.disabled ) ; 
    }
  }
</script>