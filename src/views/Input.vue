<template>
  
   <div>
    
    <h1>Input</h1>
    
    <div class="ct">
      <div class="head">
        <h2>기본 input</h2>
      </div>
      <div class="body">
        <InputText placeholder="검색어를 입력해주세요. ddddd" />
        <InputText type="text" placeholder="검색어를 입력해주세요." />
        <InputText type="password" placeholder="비밀번호를 입력해주세요." />
      </div>
    </div>
    <div class="ct">
      <div class="head">
        <h2>Disabled Input</h2>
      </div>
      <div class="body">
        <InputText placeholder="검색어를 입력해주세요." disabled />
      </div>
    </div>
    <div class="ct">
      <div class="head">
        <h2>Error Input</h2>
      </div>
      <div class="body">
        <InputText placeholder="검색어를 입력해주세요." error value="abcdefg" />
        <!-- <div class="input error"><input type="text" placeholder="input text" value="abcdefg" /></div> -->
      </div>
    </div>
    
    <div class="ct">
      <div class="head">
        <h2>Icon Input</h2>
      </div>
      <div class="body">
        
        <InputText placeholder="검색어를 입력해주세요." icon="search" />
        <InputText placeholder="검색어를 입력해주세요." icon="search" iconLocation="left" />

        <!-- <div class="input icon">
          <input type="text" placeholder="input text" value="" />
          <i class="icon fas fa-search"></i>
        </div> -->

      </div>
      <!-- <div class="body">
        <div class="input icon left">
          <input type="text" placeholder="input text" value="" />
          <i class="icon fas fa-search"></i>
        </div>
      </div> -->
    </div>

    <div class="ct">
      <div class="head">
        <h2>button Input</h2>
      </div>
      <div class="body">

        <InputText placeholder="검색어를 입력해주세요" submit />

        <!-- <div class="input submit">
          <input type="text" placeholder="input text" value="" />
          <button type="button"><i class="icon fas fa-search"></i></button>
        </div> -->

      </div>
    </div>

    <div class="ct">
      <div class="head">
        <h2>Label Input</h2>
      </div>
      <div class="body">
        <InputText placeholder="검색어를 입력해주세요" labelLeft="http://" />
        <InputText placeholder="검색어를 입력해주세요!!!!!" labelRight="kg" />
        <InputText placeholder="검색어를 입력해주세요!!!!!" labelLeft="무게" labelRight="kg" />
      </div>
    </div>

  </div>

</template>

<script>

  import InputText from '../components/common/InputText.vue' ;
  
  export default {
    name : 'Input' ,
    components : {
      InputText
    }
  }

</script>

<style lang="scss" scoped>
.input{
  margin-bottom: 10px ;
}
</style>