<template>
  <div class='events'>
    <button v-on:click='increase(2, $event)'>Click Me</button>
    <p>{{ counter }}</p>
    <p v-on:mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}
      <span v-on:mousemove.stop="">Dead Spot </span>
    </p>
    <input type='text' v-on:keyup.enter.space='alertMe' />
  </div>
</template>

<script>
export default {
  name: 'Events',
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
    },
    alertMe() {
      alert('Alert!')
    }
  }
}
</script>
