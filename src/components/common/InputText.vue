<template>
  <div class="input" 
    :class="{ 
      'disabled' : this.$props.disabled , 
      'error' : this.$props.error, 
      'icon' : this.$props.icon, 
      'left' : this.$props.iconLocation == 'left' ,
      'submit' : this.$props.submit ,
      'label' : this.$props.labelLeft || this.$props.labelRight ,
      'left' : this.$props.labelLeft ,
      'right' : this.$props.labelRight ,
    }"
  >

    <div class="label" v-if="this.$props.labelLeft">{{ this.$props.labelLeft }}</div>
    <input :type="this.$props.type" :placeholder="this.$props.placeholder" :disabled="this.$props.disabled" :value="this.$props.value" />
    <i 
      class="icon" v-if="this.$props.icon"
      :class="{ 
        'fas fa-search' : this.$props.icon == 'search' 
      }"
    ></i>
    <div class="label" v-if="this.$props.labelRight">{{ this.$props.labelRight }}</div>
    <button v-if="this.$props.submit" type="button" @click="$emit('clickEvt')"><i class="icon fas fa-search"></i></button>
  </div>
</template>

<script>
  export default {
    name : 'InputText' , 
    props : {
      type : { type : String , default : 'text' } , 
      disabled: { type: Boolean, default: false },
      error: { type: Boolean, default: false },
      submit : { type: Boolean, default: false },
      placeholder : String ,
      value : String ,
      icon : String ,
      iconLocation : String ,
      label : String ,
      labelLeft : String ,
      labelRight : String ,
      clickEvt : Function , 
    } ,
    created() {
      console.log( 'created in' , this.$props.icon ) ; 
    }
  }
</script>

<style lang="scss" scoped>

</style>