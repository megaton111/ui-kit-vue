<template>
   <div>
     
     <button type="button">토스트 팝업 버튼</button>

    <div style="width:300px" class="toast-layer-point">
      <InputText placeholder="검색어를 입력해주세요" submit @clickEvt="$showToastLayer('toast-layer-01')" />
      <ToastLayer 
        id="toast-layer-01"
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

    <br>
    <br>
    <br>
    <br>

    <div style="width:300px" class="toast-layer-point">
      <InputText placeholder="검색어를 입력해주세요" submit @clickEvt="$showToastLayer('toast-layer-02')" />
      <ToastLayer 
        id="toast-layer-02"
        title="토스트레이어 22222222222222222222222222222"
        size="600"
      >
        <!-- <div slot="body">Vbodybodybodybodybodybodybodybodybodybodybody</div> -->
        <div class="aa">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, pariatur.</p>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatum nostrum ab pariatur voluptatibus blanditiis delectus excepturi dolorem voluptatem iure?</div>
        </div>
      </ToastLayer>
    </div>


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
.toast-layer-point{
  position: relative;
}
</style>