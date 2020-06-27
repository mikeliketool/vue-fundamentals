<template>
  <div class="dynamic_css">
    <h1 v-once>
      {{ title }}
    </h1>
    <div 
      class="demo"
      :class="divClasses"
      @click="attachRed = !attachRed"
    />
    <div
      class="demo"
      :class="divClasses"
    />
    <div
      class="demo"
      :class="[color, {red: attachRed}]"
    />
    <div
      class="demo"
      :style="myStyle"
    />
    <div
      class="demo"
      :style="[myStyle, {height: `${width}px`}]"
    />
    <hr>
    <input
      v-model="color"
      type="text"
    >
    <input
      v-model="width"
      type="text"
    >
  </div>
</template>

<script>
export default {
  name: 'DynamicCSS',
  data() {
		return {
      title: 'DynamicCSS',
      attachRed: false,
      color: 'green',
      width: 100
    }
  },
  computed: {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle() {
      return {
        'background-color': this.color,
        width: `${this.width}px`
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
