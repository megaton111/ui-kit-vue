<template>
  
   <div>
    
    <h1>Button</h1>
    
    <div class="ct">
      <div class="head">
        <h2>기본 버튼</h2>
      </div>
      <div class="body">
        <button type="button" class="button">Default Button</button>
        <button type="button" class="button primary">Primary Button</button>
        <button type="button" class="button positive">Positive Button</button>
        <button type="button" class="button negative">Negative Button</button>
      </div>
    </div>
    <!-- baic 클래스 라인형태 디자인 -->
    <div class="ct">
      <div class="head">
        <h2>라인형태 디자인</h2>
      </div>
      <div class="body">
        <button type="button" class="button basic">Default Button</button>
        <button type="button" class="button basic primary">Primary Button</button>
        <button type="button" class="button basic positive">Positive Button</button>
        <button type="button" class="button basic negative">Negative Button</button>
      </div>
    </div>
    <div class="ct">
      <div class="head">
        <h2>버튼 사이즈</h2>
      </div>
      <div class="body">
        <button type="button" class="button xsm">xs Button</button>
        <button type="button" class="button sm">sm Button</button>
        <button type="button" class="button md">md Button</button>
        <button type="button" class="button lg">lg Button</button>
        <button type="button" class="button xlg">xlg Button</button>
      </div>
      <div class="body">
        <button type="button" class="button basic xsm">Default Button</button>
        <button type="button" class="button basic primary sm">Primary Button</button>
        <button type="button" class="button basic positive lg">Positive Button</button>
        <button type="button" class="button basic negative xlg">Negative Button</button>
      </div>
    </div>
    <div class="ct">
      <div class="head">
        <h2>아이콘 버튼</h2>
      </div>
      <div class="body">
        <button type="button" class="button basic xsm"><i class="icon fas fa-camera"></i>Default Button</button>
        <button type="button" class="button basic sm"><i class="icon fas fa-camera"></i>Default Button</button>
        <button type="button" class="button basic"><i class="icon fas fa-camera"></i>Default Button</button>
        <button type="button" class="button basic lg"><i class="icon fas fa-camera"></i>Default Button</button>
        <button type="button" class="button basic xlg"><i class="icon fas fa-camera"></i>Default Button</button>
      </div>
      <div class="body">
        <button type="button" class="button primary"><i class="icon fas fa-camera"></i>Default Button</button>
        <button type="button" class="button positive"><i class="icon fas fa-camera"></i>Default Button</button>
        <button type="button" class="button negative"><i class="icon fas fa-camera"></i>Default Button</button>
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