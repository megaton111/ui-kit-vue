<template>
  <div>
    <h1>Checkbox</h1>
    
    <div class="ct">
      <div class="head">
        <h2>체크박스</h2>
      </div>
      <div class="body">
        <checkbox title="체크박스 1" />
      </div>
      <div class="head">
        <h2>비활성화 체크박스</h2>
      </div>
      <div class="body">
        <checkbox title="disabled 체크박스" disabled />
      </div>
    </div>

    <div class="ct">
      <div class="head">
        <h2>Toggle style type 1</h2>
      </div>
      <div class="body">
        <checkboxToggle title="Toggle style Type"  />
        <checkboxToggle title="disabled Toggle Type" disabled />
      </div>
      <div class="body">
        <radioToggle title="radio Toggle 1" name="radio-tg-1" />
        <radioToggle title="radio Toggle 2" name="radio-tg-1" />
        <radioToggle title="radio Toggle 3" name="radio-tg-1" />
      </div>
      <div class="head">
        <h2>Toggle style type 2</h2>
      </div>
      <div class="body">
        <checkboxToggle title="Toggle Style Type 2" switch />
        <checkboxToggle title="Toggle Style Type 2" switch disabled />
        <radioToggle title="radio Toggle Style Type 2" name="radio-tg-2" switch checked />
        <radioToggle title="radio Toggle Style Type 2" name="radio-tg-2" switch />
      </div>
    </div>

     <div class="ct">
      <div class="head">
        <h2>라디오박스</h2>
      </div>
      <div class="body">
        <radio title="라디오 박스 1" name="radio-origin-1" checked />
        <radio title="라디오 박스 2" name="radio-origin-1" />
        <radio title="라디오 박스 3" name="radio-origin-1" disabled />
      </div>
    </div>

  </div>
</template>

<script>
  import checkbox from '../../components/common/checkbox.vue' ;
  import checkboxToggle from '../../components/common/checkbox-toggle.vue' ;
  import radio from '../../components/common/radio.vue' ;
  import radioToggle from '../../components/common/radio-toggle.vue' ;

  export default {
    name : 'Checkbox' ,
    components : {
      checkbox , checkboxToggle , radioToggle, radio
    }
  }
</script>

<style lang="scss" scoped>
.checkbox, .toggle, .radio {
  margin-bottom: 10px ;
}
</style>