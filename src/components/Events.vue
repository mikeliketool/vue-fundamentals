<template>
  <div class='events'>
    <button v-on:click='increase(2, $event)'>Click Me</button>
    <p>{{ counter }}</p>
    <p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}
      <span v-on:mousemove.stop="">Dead Spot </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
		return {
      counter: 0,
      x: 0,
      y: 0
		};
  },
  methods: {
    increase(step) {
      this.counter += step;
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
}
</script>
