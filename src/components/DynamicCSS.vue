<template>
  <div class='dynamic_css'>
    <h1 v-once>{{ title }}</h1>
    <div 
      class='demo'
      @click='attachRed = !attachRed'
      :class='divClasses'
    ></div>
    <div class='demo' :class='divClasses'></div>
    <div class='demo'></div>
  </div>
</template>

<script>
export default {
  name: 'DynamicCSS',
  data() {
		return {
      title: 'DynamicCSS',
      attachRed: false
    }
  },
  computed: {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
}
</script>

<style>
  .demo {
    width: 100px;
    height:100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
</style>
