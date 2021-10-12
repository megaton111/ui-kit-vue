<template>
  
   <div>
    
    <h1>Input</h1>
    
    <div class="ct">
      <div class="head">
        <h2>기본 버튼</h2>
      </div>
      <div class="body">
        <div class="input"><input type="text" placeholder="input text"></div>
        <div class="input"><input type="text" placeholder="input text" disabled></div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name : 'Button' ,
    data(){
      return {
      }
    } , 
    methods : {
    } , 
    computed : {
    } , 
    watch : {
    }
  }
</script>

<style lang="scss" scoped>
  .ct {
    
    button {
      margin: 0 2px ; 
    }
  }
</style>