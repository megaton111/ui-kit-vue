<template>
  <div>
    <h1>Accordion</h1>

    <div class="ct">
      <div class="head">
        <h2>Style 1</h2>
      </div>
      <div class="body">
        
        <div class="accordion styled-1">
          
          <div class="item">
            <input type="radio" id="accord-1" name="accord" checked>
            <label for="accord-1" class="title"><i class="fas fa-caret-right"></i>title 1</label>
            <div class="cont">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
            </div>
          </div>

          <div class="item">
            <input type="radio" id="accord-2" name="accord">
            <label for="accord-2" class="title"><i class="fas fa-caret-right"></i>title 2</label>
            <div class="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</div>
          </div>

          <div class="item">
            <input type="radio" id="accord-3" name="accord">
            <label for="accord-3" class="title"><i class="fas fa-caret-right"></i>title 3</label>
            <div class="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</div>
          </div>

        </div>

      </div>
      <div class="head">
        <h2>Style 2</h2>
      </div>
      <div class="body">
        
        <div class="accordion styled-2">
          
          <div class="item">
            <input type="radio" id="accord-2-1" name="accord_2" checked>
            <label for="accord-2-1" class="title"><i class="fas fa-caret-right"></i>title 1</label>
            <div class="cont">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</p>
            </div>
          </div>

          <div class="item">
            <input type="radio" id="accord-2-2" name="accord_2">
            <label for="accord-2-2" class="title"><i class="fas fa-caret-right"></i>title 2</label>
            <div class="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</div>
          </div>

          <div class="item">
            <input type="radio" id="accord-2-3" name="accord_2">
            <label for="accord-2-3" class="title"><i class="fas fa-caret-right"></i>title 3</label>
            <div class="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel.</div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name : 'Accordion' ,
  }
</script>

<style lang="scss" scoped>

</style>