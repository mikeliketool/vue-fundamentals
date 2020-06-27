<template>
  <div class="dynamic_css_exercise">
    <h1 v-once>
      {{ title }}
    </h1>
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div>
      <button @click="toggleEffect">
        Toggle Effect
      </button>
      <div
        id="effect"
        :class="divClasses"
      />
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div :class="['text-style', 'div-size']">
      I got no class :(
    </div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
      <input
        v-model="userStyle"
        type="text"
      >
      <div :class="[userStyle, 'div-size']" />
    </div>
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
      <input
        v-model="userStyle"
        type="text"
      >
      <input
        v-model="showClassInput"
        type="text"
      >
      <div :class="[userStyle, {shrink: showClass}, 'div-size']" />
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
      <input
        v-model="userStyle"
        type="text"
      >
      <div :style="myStyle" />
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button @click="toggleProgress">
        Start Progress
      </button>
      <div id="progress">
        <div :style="progressStyle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicCSSExercise',
  data() {
		return {
      title: 'DynamicCSSExercise',
      highlight: true,
      startEffect: false,
      effectInterval: undefined,
      userStyle: 'green',
      showClassInput: undefined,
      startProgress: false,
      progressInterval: undefined,
      progressWidth: 0,
      height: 50
    }
  },
  computed: {
    divClasses() {
      return {
        highlight: this.highlight && this.startEffect,
        shrink: !this.highlight && this.startEffect
      }
    },
    showClass() {
      return this.showClassInput === 'true'
    },
    myStyle() {
      return {
        'background-color': this.userStyle,
        'width': `${100}px`,
        'height': `${this.height}px`
      }
    },
    progressStyle() {
      return {
        'background-color': 'green',
        'width': `${this.progressWidth}px`,
        'height': `${this.height}px`
      }
    }
  },
  watch: {
    startEffect() {
      if (this.startEffect) {
        this.effectInterval = setInterval(() => {
          this.highlight = !this.highlight;
        }, 1000);
      } else {
        clearInterval(this.effectInterval);
      }
    },
    startProgress() {
      if (this.startProgress) {
        this.progressInterval = setInterval(() => {
          if(this.progressWidth <= 790){
            this.progressWidth += 10;
          } else {
            this.progressWidth = 0;
          } 
        }, 100);
      } else {
        clearInterval(this.progressInterval);
        this.progressWidth = 0;
      }
    }
  },
  methods: {
    toggleEffect() {
      this.startEffect = !this.startEffect;
    },
    toggleProgress() {
      this.startProgress = !this.startProgress;
    }
  }
}
</script>

<style>
  #effect {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }

  #progress {
    width: 800px;
    height: 50px;
    border: 1px solid black;
  }

  .highlight {
    background-color: red;
    width: 200px !important;
  }

  .shrink {
    background-color: gray;
    width: 50px !important;
  }

  .text-style {
    text-align: center;
    font-family: cursive;
  }

  .div-size {
    width: 100px;
    height: 25px;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }
</style>
