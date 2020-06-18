<template>
  <div class='onewaybinding_exercise'>
    <h1 v-once>{{ title }}</h1>
    <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>Age by three: {{ age * 3 }}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>Random number between 0 and 1: {{ getRandomNumberBetweenZeroAndOne() }}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
      <img style='width:100px;height:100px' :src='bronsonLink'>
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
      <input type='text' v-model='name'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneWayBindingExercise',
  data() {
		return {
      title: 'OneWayBinding Excercise',
      name: 'Mike Fehrenbach',
      age: 302,
      bronsonLink: 'https://www.santacruzbicycles.com/files/styles/scb_crop_520_333/public/frame-thumbs/bantam-profile.jpg?itok=ItEJZ77W'
		};
  },
  methods: {
    getRandomNumberBetweenZeroAndOne() {
      return Math.random()
    }
  }
}
</script>
