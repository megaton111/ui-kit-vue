<template>
   <div>
     
     <button type="button">토스트 팝업 버튼</button>

    <div style="width:300px">
      <InputText placeholder="검색어를 입력해주세요" submit @clickEvt="$showTarget('toast-layer-01')" />
    </div>

    <ToastLayer 
      id="toast-layer-01"
      name="toast-layer-01"
      title="제목입니다다다다."
      size="400"
    >
      <!-- <div slot="body">Vbodybodybodybodybodybodybodybodybodybodybody</div> -->
      <div class="aa">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, pariatur.</p>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatum nostrum ab pariatur voluptatibus blanditiis delectus excepturi dolorem voluptatem iure?</div>
      </div>
    </ToastLayer>

  </div>
</template>

<script>

  // import InputText from '../components/common/InputText.vue' ;
  import InputText from '../components/common/InputText.vue' ;
  import ToastLayer from '../components/common/toast-layer.vue' ;
  
  export default {
    name : 'DragLayer' ,
    components : {
      InputText, ToastLayer
    }
  }

</script>

<style lang="scss" scoped>
.input{
  margin-bottom: 10px ;
}
</style>