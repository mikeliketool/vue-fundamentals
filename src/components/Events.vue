<template>
  <div class='events'>
    <h1 v-once>{{ title }}</h1>
    <button @click='increase(2, $event)'>Click Me</button>
    <p>{{ counter }}</p>
    <p @mousemove='updateCoordinates'>Coordinates: {{ x }} / {{ y }}
      <span @mousemove.stop="">Dead Spot </span>
    </p>
    <input type='text' @keyup.enter.space='alertMe' />
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
		return {
      title: 'Events',
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
      alert('Alert!');
    }
  }
}
</script>
